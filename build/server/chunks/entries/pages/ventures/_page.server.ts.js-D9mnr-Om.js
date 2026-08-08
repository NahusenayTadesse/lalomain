import { H as ventures } from '../../../chunks/db.js-gHXkniRQ.js';
import { a as getHero, l as list } from '../../../chunks/content.js-CyX77nEo.js';

//#region src/routes/ventures/+page.server.ts
var load = async () => {
	const [hero, allVentures] = await Promise.all([getHero("ventures"), list(ventures)]);
	return {
		hero,
		ventures: allVentures
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-D9mnr-Om.js.map
