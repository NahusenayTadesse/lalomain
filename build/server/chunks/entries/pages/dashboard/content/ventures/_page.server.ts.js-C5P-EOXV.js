import { H as ventures } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { n as number, o as object, d as string, h as file } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/ventures/schema.ts
var addSchema = object({
	title: string("Required").min(1, "Required").max(255),
	description: string().optional(),
	image: file().max(1e7).optional(),
	imageAlt: string().max(255).optional(),
	icon: string("Required").min(1, "Required"),
	regionsServed: string().optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/ventures/+page.server.ts
var crud = contentCrud({
	table: ventures,
	label: "Venture",
	addSchema,
	editSchema: addSchema.extend({ id: number() }),
	fileFields: ["image"],
	listFields: ["regionsServed"]
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-C5P-EOXV.js.map
