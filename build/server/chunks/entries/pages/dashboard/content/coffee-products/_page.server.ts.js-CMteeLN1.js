import { C as coffeeProducts } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { n as number, o as object, d as string } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/coffee-products/schema.ts
var addSchema = object({
	name: string("Required").min(1, "Required").max(255),
	grade: string().max(255).optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/coffee-products/+page.server.ts
var crud = contentCrud({
	table: coffeeProducts,
	label: "Coffee",
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
//# sourceMappingURL=_page.server.ts.js-CMteeLN1.js.map
