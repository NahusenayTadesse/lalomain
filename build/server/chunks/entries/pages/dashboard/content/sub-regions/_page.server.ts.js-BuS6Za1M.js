import { r as db, D as farms, a as asc, N as subRegions } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { n as number, o as object, d as string } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/sub-regions/schema.ts
var addSchema = object({
	farmId: number("Required"),
	name: string("Required").min(1, "Required").max(255),
	altitude: string().max(255).optional(),
	notes: string().optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/sub-regions/+page.server.ts
var crud = contentCrud({
	table: subRegions,
	label: "Sub-region",
	addSchema,
	editSchema: addSchema.extend({ id: number() })
});
var load = async () => {
	const [base, farmList] = await Promise.all([crud.load(), db.select({
		id: farms.id,
		name: farms.name
	}).from(farms).orderBy(asc(farms.sortOrder))]);
	return {
		...base,
		farmList
	};
};
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-BuS6Za1M.js.map
