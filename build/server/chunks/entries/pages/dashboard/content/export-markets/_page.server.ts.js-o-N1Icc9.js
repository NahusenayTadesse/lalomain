import { E as exportMarkets } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { n as number, o as object, d as string } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/export-markets/schema.ts
var addSchema = object({
	name: string("Required").min(1, "Required").max(255),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/export-markets/+page.server.ts
var crud = contentCrud({
	table: exportMarkets,
	label: "Market",
	addSchema,
	editSchema: addSchema.extend({ id: number() })
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-o-N1Icc9.js.map
