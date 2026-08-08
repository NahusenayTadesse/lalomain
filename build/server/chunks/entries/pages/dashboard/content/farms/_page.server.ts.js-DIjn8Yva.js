import { D as farms } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { n as number, o as object, d as string, h as file } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/farms/schema.ts
var addSchema = object({
	name: string("Required").min(1, "Required").max(255),
	location: string().max(255).optional(),
	image: file().max(1e7).optional(),
	description: string().optional(),
	altitude: string().max(255).optional(),
	grade: string().max(255).optional(),
	stats: string().optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/farms/+page.server.ts
var crud = contentCrud({
	table: farms,
	label: "Farm",
	addSchema,
	editSchema: addSchema.extend({ id: number() }),
	fileFields: ["image"],
	listFields: ["stats"]
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-DIjn8Yva.js.map
