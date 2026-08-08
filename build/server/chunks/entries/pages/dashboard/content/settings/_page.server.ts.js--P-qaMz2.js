import { r as db, t as siteSettings, m as eq } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { s as superValidate, m as message } from '../../../../../chunks/client2.js-Clbb-yOm.js';
import '../../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../../chunks/client.js-6EH1pFcc.js';
import { z as zod } from '../../../../../chunks/adapters.js-DmdkKCR7.js';
import { o as object, d as string } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/settings/schema.ts
var settingsSchema = object({
	/** One `Label | address` pair per line. The first is what the footer shows. */
	emails: string().optional(),
	/** One number per line. The first is what the footer shows. */
	phones: string().optional(),
	address: string().max(255).optional(),
	tagline: string().max(255).optional(),
	footerBlurb: string().optional()
});
//#endregion
//#region src/routes/dashboard/content/settings/+page.server.ts
var lines = (value) => (value ?? "").split("\n").map((line) => line.trim()).filter(Boolean);
/** Parses `Label | address` lines; a line without a separator is its own label. */
var parseEmails = (value) => lines(value).map((line) => {
	const [label, address] = line.split("|").map((part) => part.trim());
	return address ? {
		label,
		value: address
	} : {
		label: "Email",
		value: label
	};
});
var load = async () => {
	const current = (await db.select().from(siteSettings).limit(1)).at(0);
	return {
		form: await superValidate({
			emails: (current?.emails ?? []).map((e) => `${e.label} | ${e.value}`).join("\n"),
			phones: (current?.phones ?? []).join("\n"),
			address: current?.address ?? "",
			tagline: current?.tagline ?? "",
			footerBlurb: current?.footerBlurb ?? ""
		}, zod(settingsSchema)),
		exists: Boolean(current)
	};
};
var actions = { save: async ({ request, locals }) => {
	const form = await superValidate(request, zod(settingsSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	const values = {
		emails: parseEmails(form.data.emails),
		phones: lines(form.data.phones),
		address: form.data.address,
		tagline: form.data.tagline,
		footerBlurb: form.data.footerBlurb
	};
	try {
		const current = (await db.select({ id: siteSettings.id }).from(siteSettings).limit(1)).at(0);
		if (current) await db.update(siteSettings).set({
			...values,
			updatedBy: locals.user?.id
		}).where(eq(siteSettings.id, current.id));
		else await db.insert(siteSettings).values({
			...values,
			createdBy: locals.user?.id
		});
		return message(form, {
			type: "success",
			text: "Site settings saved"
		});
	} catch (err) {
		console.error("Failed to save site settings:", err);
		return message(form, {
			type: "error",
			text: "Could not save site settings"
		}, { status: 500 });
	}
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js--P-qaMz2.js.map
