import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { siteSettings } from '$lib/server/db/schema';
import { settingsSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const lines = (value?: string) =>
	(value ?? '')
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean);

/** Parses `Label | address` lines; a line without a separator is its own label. */
const parseEmails = (value?: string) =>
	lines(value).map((line) => {
		const [label, address] = line.split('|').map((part) => part.trim());
		return address ? { label, value: address } : { label: 'Email', value: label };
	});

/** Parses `platform | url` lines, e.g. `facebook | https://facebook.com/...`. */
const parseSocialLinks = (value?: string) =>
	lines(value)
		.map((line) => {
			const [platform, url] = line.split('|').map((part) => part.trim());
			return url ? { platform: platform.toLowerCase(), url } : undefined;
		})
		.filter((entry) => entry !== undefined);

export const load: PageServerLoad = async () => {
	const current = (await db.select().from(siteSettings).limit(1)).at(0);

	const form = await superValidate(
		{
			emails: (current?.emails ?? []).map((e) => `${e.label} | ${e.value}`).join('\n'),
			phones: (current?.phones ?? []).join('\n'),
			address: current?.address ?? '',
			tagline: current?.tagline ?? '',
			footerBlurb: current?.footerBlurb ?? '',
			socialLinks: (current?.socialLinks ?? [])
				.map((s) => `${s.platform} | ${s.url}`)
				.join('\n')
		},
		zod4(settingsSchema)
	);

	return { form, exists: Boolean(current) };
};

export const actions: Actions = {
	save: async ({ request, locals }) => {
		const form = await superValidate(request, zod4(settingsSchema));

		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		const values = {
			emails: parseEmails(form.data.emails),
			phones: lines(form.data.phones),
			address: form.data.address,
			tagline: form.data.tagline,
			footerBlurb: form.data.footerBlurb,
			socialLinks: parseSocialLinks(form.data.socialLinks)
		};

		try {
			const current = (await db.select({ id: siteSettings.id }).from(siteSettings).limit(1)).at(0);

			// A single row backs the whole site, so the first save creates it.
			if (current) {
				await db
					.update(siteSettings)
					.set({ ...values, updatedBy: locals.user?.id })
					.where(eq(siteSettings.id, current.id));
			} else {
				await db.insert(siteSettings).values({ ...values, createdBy: locals.user?.id });
			}

			return message(form, { type: 'success', text: 'Site settings saved' });
		} catch (err) {
			console.error('Failed to save site settings:', err);
			return message(
				form,
				{ type: 'error', text: 'Could not save site settings' },
				{ status: 500 }
			);
		}
	}
};
