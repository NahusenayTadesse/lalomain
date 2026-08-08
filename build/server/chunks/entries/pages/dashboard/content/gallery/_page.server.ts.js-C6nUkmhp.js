import { v as galleryImages } from '../../../../../chunks/db.js-gHXkniRQ.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-CVouNPKP.js';
import { h as file, n as number, o as object, d as string } from '../../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/content/gallery/schema.ts
var addSchema = object({
	page: string("Required").min(1, "Required"),
	src: file("An image is required").max(1e7),
	caption: string().max(255).optional(),
	alt: string().max(255).optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/gallery/+page.server.ts
var crud = contentCrud({
	table: galleryImages,
	label: "Image",
	addSchema,
	editSchema: addSchema.extend({
		id: number(),
		src: file().max(1e7).optional()
	}),
	fileFields: ["src"]
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-C6nUkmhp.js.map
