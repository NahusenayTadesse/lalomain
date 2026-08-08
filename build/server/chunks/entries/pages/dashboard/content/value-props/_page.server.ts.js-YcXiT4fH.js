import { F as valueProps } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { n as number, o as object, d as string } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/value-props/schema.ts
var addSchema = object({
	icon: string("Required").min(1, "Required"),
	title: string("Required").min(1, "Required").max(255),
	description: string().optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/value-props/+page.server.ts
var crud = contentCrud({
	table: valueProps,
	label: "Value",
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
//# sourceMappingURL=_page.server.ts.js-YcXiT4fH.js.map
