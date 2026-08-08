import { r as db, y as user, z as roles, m as eq, A as partners } from '../../chunks/db.js-gHXkniRQ.js';
import { g as getSettings, l as list } from '../../chunks/content.js-CyX77nEo.js';

//#region src/routes/+layout.server.ts
/**
* The footer shows contact details and partner links on every page.
*
* `roleName` is also resolved here because the dashboard guard and the login
* redirect both read it from `parent()`.
*/
var load = async ({ locals }) => {
	const userId = locals.user?.id;
	const [settings, partnerList, account] = await Promise.all([
		getSettings(),
		list(partners),
		userId ? db.select({
			roleName: roles.name,
			legacyRole: user.role
		}).from(user).leftJoin(roles, eq(roles.id, user.roleId)).where(eq(user.id, userId)).limit(1).then((rows) => rows.at(0)) : void 0
	]);
	return {
		settings,
		partners: partnerList,
		roleName: account?.roleName ?? account?.legacyRole ?? void 0
	};
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _layout_server_ts as _ };
//# sourceMappingURL=_layout.server.ts.js-BU658qDc.js.map
