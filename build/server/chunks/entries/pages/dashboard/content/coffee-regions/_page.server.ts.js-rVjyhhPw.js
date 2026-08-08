import { G as coffeeRegions } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { n as number, o as object, h as file, d as string } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/coffee-regions/schema.ts
var addSchema = object({
	name: string("Required").min(1, "Required").max(255),
	cupping: string().max(255).optional(),
	aroma: string().optional(),
	flavor: string().optional(),
	image: file().max(1e7).optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/coffee-regions/+page.server.ts
var crud = contentCrud({
	table: coffeeRegions,
	label: "Region",
	addSchema,
	editSchema: addSchema.extend({ id: number() }),
	fileFields: ["image"]
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-rVjyhhPw.js.map
