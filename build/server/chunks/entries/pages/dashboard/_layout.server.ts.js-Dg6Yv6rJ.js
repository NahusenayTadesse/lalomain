import { r as db, c as count, B as contactMessages, m as eq } from '../../../chunks/db.js-gHXkniRQ.js';
import { A as redirect } from '../../../chunks/utils.js-BQTEHVEl.js';

//#region src/routes/dashboard/+layout.server.ts
var load = async ({ locals, depends }) => {
	if (!locals.user) return redirect(302, "/login");
	depends("app:messages");
	const messageNumber = await db.select({ count: count() }).from(contactMessages).where(eq(contactMessages.seen, false)).then((rows) => rows[0]?.count ?? 0);
	return {
		name: locals.user.name,
		messageNumber
	};
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _layout_server_ts as _ };
//# sourceMappingURL=_layout.server.ts.js-Dg6Yv6rJ.js.map
