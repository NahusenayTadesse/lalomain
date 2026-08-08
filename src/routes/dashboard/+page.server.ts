import { redirect } from '@sveltejs/kit';
import { and, count, eq, isNull } from 'drizzle-orm';
import type { MySqlTable } from 'drizzle-orm/mysql-core';
import { auth } from '$lib/server/auth';
import { db } from '$lib/server/db';
import {
	coffeeRegions,
	contactMessages,
	faqs,
	galleryImages,
	partners,
	testimonials,
	ventures
} from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';

type CountableTable = MySqlTable & Record<string, any>;

/** Live rows only, so the counts match what the public site actually renders. */
const liveCount = (table: CountableTable) =>
	db
		.select({ value: count() })
		.from(table)
		.where(and(eq(table.isActive, true), isNull(table.deletedAt)))
		.then((rows) => rows[0]?.value ?? 0);

export const load: PageServerLoad = async () => {
	const [regions, images, partnerCount, ventureCount, faqCount, quotes, unread] =
		await Promise.all([
			liveCount(coffeeRegions),
			liveCount(galleryImages),
			liveCount(partners),
			liveCount(ventures),
			liveCount(faqs),
			liveCount(testimonials),
			db
				.select({ value: count() })
				.from(contactMessages)
				.where(eq(contactMessages.seen, false))
				.then((rows) => rows[0]?.value ?? 0)
		]);

	return {
		unread,
		stats: [
			{ label: 'Coffee regions', value: regions, href: '/dashboard/content/coffee-regions' },
			{ label: 'Gallery images', value: images, href: '/dashboard/content/gallery' },
			{ label: 'Partners', value: partnerCount, href: '/dashboard/content/partners' },
			{ label: 'Subsidiaries', value: ventureCount, href: '/dashboard/content/subsidiaries' },
			{ label: 'FAQs', value: faqCount, href: '/dashboard/content/faqs' },
			{ label: 'Testimonials', value: quotes, href: '/dashboard/testimonials' }
		]
	};
};

export const actions: Actions = {
	logout: async (event) => {
		await auth.api.signOut({ headers: event.request.headers });
		return redirect(302, '/login');
	}
};
