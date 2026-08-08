import { r as db, D as farms, N as subRegions, m as eq, o as and, k as isNull, a as asc, G as coffeeRegions, O as traceabilitySteps } from '../../../chunks/db.js-gHXkniRQ.js';
import { a as getHero, l as list, d as listFaqs, c as listGallery } from '../../../chunks/content.js-CyX77nEo.js';

//#region src/routes/our-coffee/+page.server.ts
/** Sub-regions are shown grouped under their farm, so the farm name comes along. */
var listSubRegions = () => db.select({
	name: subRegions.name,
	altitude: subRegions.altitude,
	notes: subRegions.notes,
	farmName: farms.name
}).from(subRegions).leftJoin(farms, eq(subRegions.farmId, farms.id)).where(and(eq(subRegions.isActive, true), isNull(subRegions.deletedAt))).orderBy(asc(subRegions.sortOrder), asc(subRegions.id));
var load = async () => {
	const [hero, allFarms, subs, regions, steps, allFaqs, gallery] = await Promise.all([
		getHero("our-coffee"),
		list(farms),
		listSubRegions(),
		list(coffeeRegions),
		list(traceabilitySteps),
		listFaqs("our-coffee"),
		listGallery("our-coffee")
	]);
	return {
		hero,
		farms: allFarms,
		subRegions: subs,
		regions,
		steps,
		faqs: allFaqs,
		gallery
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CPV_iOxF.js.map
