import { r as db, c as count, B as contactMessages, m as eq, o as and, k as isNull, D as farms, G as coffeeRegions, v as galleryImages, A as partners, H as ventures, x as faqs, I as testimonials } from '../../../chunks/db.js-gHXkniRQ.js';
import { a as auth } from '../../../chunks/auth.js-xzNrYZ7P.js';
import { A as redirect } from '../../../chunks/utils.js-BQTEHVEl.js';

//#region src/routes/dashboard/+page.server.ts
/** Live rows only, so the counts match what the public site actually renders. */
var liveCount = (table) => db.select({ value: count() }).from(table).where(and(eq(table.isActive, true), isNull(table.deletedAt))).then((rows) => rows[0]?.value ?? 0);
var load = async () => {
	const [farmCount, regions, images, partnerCount, ventureCount, faqCount, quotes, unread] = await Promise.all([
		liveCount(farms),
		liveCount(coffeeRegions),
		liveCount(galleryImages),
		liveCount(partners),
		liveCount(ventures),
		liveCount(faqs),
		liveCount(testimonials),
		db.select({ value: count() }).from(contactMessages).where(eq(contactMessages.seen, false)).then((rows) => rows[0]?.value ?? 0)
	]);
	return {
		unread,
		stats: [
			{
				label: "Farms",
				value: farmCount,
				href: "/dashboard/content/farms"
			},
			{
				label: "Coffee regions",
				value: regions,
				href: "/dashboard/content/coffee-regions"
			},
			{
				label: "Gallery images",
				value: images,
				href: "/dashboard/content/gallery"
			},
			{
				label: "Partners",
				value: partnerCount,
				href: "/dashboard/content/partners"
			},
			{
				label: "Ventures",
				value: ventureCount,
				href: "/dashboard/content/ventures"
			},
			{
				label: "FAQs",
				value: faqCount,
				href: "/dashboard/content/faqs"
			},
			{
				label: "Testimonials",
				value: quotes,
				href: "/dashboard/testimonials"
			}
		]
	};
};
var actions = { logout: async (event) => {
	await auth.api.signOut({ headers: event.request.headers });
	return redirect(302, "/login");
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-2CzfPEyv.js.map
