import { r as db, B as contactMessages, m as eq } from '../../../../chunks/db.js-gHXkniRQ.js';
import { s as superValidate, f as fail$1, m as message } from '../../../../chunks/client2.js-Clbb-yOm.js';
import '../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../chunks/client.js-6EH1pFcc.js';
import { z as zod } from '../../../../chunks/adapters.js-DmdkKCR7.js';
import { o as object, n as number } from '../../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/dashboard/messages/schema.ts
var markRead = object({ id: number() });
var deleteTestimonial = object({ id: number() });
//#endregion
//#region src/routes/dashboard/messages/+page.server.ts
var load = async () => {
	return {
		readForm: await superValidate(zod(markRead)),
		deleteForm: await superValidate(zod(deleteTestimonial)),
		allPaymentMethods: await db.select({
			id: contactMessages.id,
			name: contactMessages.name,
			email: contactMessages.email,
			phone: contactMessages.phone,
			subject: contactMessages.subject,
			isRead: contactMessages.seen,
			message: contactMessages.message,
			submittedAt: contactMessages.createdAt
		}).from(contactMessages)
	};
};
var actions = {
	read: async ({ request, locals }) => {
		const form = await superValidate(request, zod(deleteTestimonial));
		if (!form.valid) return fail$1(400, { form });
		const { id } = form.data;
		try {
			await db.update(contactMessages).set({ seen: true }).where(eq(contactMessages.id, id));
			return message(form, {
				type: "success",
				text: "Message Successfully Marked as Read"
			});
		} catch (err) {
			return message(form, {
				type: "error",
				text: "Error while marking message as read."
			}, { status: 500 });
		}
	},
	delete: async ({ request, locals }) => {
		const form = await superValidate(request, zod(deleteTestimonial));
		if (!form.valid) return fail$1(400, { form });
		const { id } = form.data;
		try {
			await db.delete(contactMessages).where(eq(contactMessages.id, id));
			return message(form, {
				type: "success",
				text: "Message Successfully Deleted"
			});
		} catch (err) {
			return message(form, {
				type: "error",
				text: "Error while deleting message."
			}, { status: 500 });
		}
	}
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-DTNUemKj.js.map
