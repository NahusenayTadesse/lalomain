import { C as coffeeProducts, D as farms, E as exportMarkets } from '../../chunks/db.js-gHXkniRQ.js';
import { a as getHero, l as list, b as listMilestones, c as listGallery, d as listFaqs } from '../../chunks/content.js-CyX77nEo.js';

//#region src/routes/+page.server.ts
var load = async () => {
	const [hero, products, allFarms, milestones, markets, gallery, faqs] = await Promise.all([
		getHero("home"),
		list(coffeeProducts),
		list(farms),
		listMilestones("home"),
		list(exportMarkets),
		listGallery("home"),
		listFaqs("home")
	]);
	return {
		hero,
		products,
		farms: allFarms,
		milestones,
		markets,
		gallery,
		faqs
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-HT1mZiit.js.map
