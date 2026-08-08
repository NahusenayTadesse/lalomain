import { F as valueProps, A as partners } from '../../../chunks/db.js-gHXkniRQ.js';
import { a as getHero, b as listMilestones, l as list, c as listGallery, d as listFaqs } from '../../../chunks/content.js-CyX77nEo.js';

//#region src/routes/about/+page.server.ts
var load = async () => {
	const [hero, milestones, whyFahem, allPartners, gallery, faqs] = await Promise.all([
		getHero("about"),
		listMilestones("about"),
		list(valueProps),
		list(partners),
		listGallery("about"),
		listFaqs("about")
	]);
	return {
		hero,
		milestones,
		whyFahem,
		partners: allPartners,
		gallery,
		faqs
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-DgcItGcx.js.map
