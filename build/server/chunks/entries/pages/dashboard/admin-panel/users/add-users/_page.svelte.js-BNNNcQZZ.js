import { Y as head, a0 as bind_props, ac as store_get, ae as unsubscribe_stores } from '../../../../../../chunks/index-server.js-BTqLeq8m.js';
import { I as InputComp } from '../../../../../../chunks/InputComp.js-WvDjA_HK.js';
import { P as Plus } from '../../../../../../chunks/plus.js-D_QDBo_j.js';
import { B as Button } from '../../../../../../chunks/button.js-bMcXU9rE.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-BOcE4VBH.js';
import { C as Card, b as Card_header, c as Card_title, a as Card_content } from '../../../../../../chunks/card.js-BH16vHUa.js';
import { d as superForm } from '../../../../../../chunks/client2.js-Clbb-yOm.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-BXAzcvnM.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-DmdkKCR7.js';
import { a as add } from '../../../../../../chunks/schema4.js-UiGcEcCw.js';
import '../../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../../../../chunks/badge-check.js-Bm3KBDwy.js';
import '../../../../../../chunks/minus.js-BTyGQs-Z.js';
import '../../../../../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../../../../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../../../../../chunks/circle-alert.js-BBu5AyXT.js';
import '../../../../../../chunks/loader.js-BRhHoeZt.js';
import '../../../../../../chunks/command.js-DctsEKur.js';
import '../../../../../../chunks/input.js-em5PybWO.js';
import '../../../../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../../chunks/x.js-Ck4p1r8z.js';
import '../../../../../../chunks/SelectComp.js-DiDAVd-M.js';
import '../../../../../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../../../../../chunks/popper-layer-force-mount.js-C-nVoiI2.js';
import '../../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../../chunks/safe-polygon.svelte.js-MuUjbcC-.js';
import '../../../../../../chunks/label.js-DTCBdSc8.js';
import '../../../../../../chunks/scroll-area.js-CsR-G4bR.js';
import '../../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../../../chunks/client.js-6EH1pFcc.js';
import '../../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../../../chunks/internal2.js-CNE764l1.js';
import '../../../../../../chunks/utils.js-BQTEHVEl.js';
import 'browser-image-compression';
import '../../../../../../chunks/dialog-content.js-xpb-oFii.js';
import '../../../../../../chunks/forms.js-Dl9gmZZg.js';
import '../../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../../chunks/stores.js-s-pIdUZM.js';
import '../../../../../../chunks/auth.js-xzNrYZ7P.js';
import '../../../../../../chunks/shared-server.js-D6HhUxAQ.js';
import '../../../../../../chunks/db.js-gHXkniRQ.js';
import 'node:buffer';
import 'url';
import 'net';
import 'tls';
import 'timers';
import 'events';
import 'stream';
import 'buffer';
import 'string_decoder';
import 'process';
import 'crypto';
import 'zlib';
import 'util';
import 'node:events';
import '../../../../../../chunks/dist3.js-DHSx5JNT.js';
import '../../../../../../chunks/error.js-DzWUU7VP.js';
import '../../../../../../chunks/factory.js-gM_GGoVD.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:os';

//#region src/routes/dashboard/admin-panel/users/add-users/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, errors, delayed, allErrors, capture, restore} = superForm(data.form, {
			taintedMessage: () => {
				return new Promise((resolve) => {
					resolve(window.confirm("Do you want to leave?\nChanges you made may not be saved."));
				});
			},
			validators: zodClient(add)
		});
		const snapshot = {
			capture,
			restore
		};
		head("1msq1ji", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Add User</title>`);
			});
		});
		if (Card) {
			$$renderer.push("<!--[-->");
			Card($$renderer, {
				class: "flex w-full flex-col gap-4 lg:w-lg",
				children: ($$renderer) => {
					if (Card_header) {
						$$renderer.push("<!--[-->");
						Card_header($$renderer, {
							children: ($$renderer) => {
								if (Card_title) {
									$$renderer.push("<!--[-->");
									Card_title($$renderer, {
										class: "text-2xl",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Add New User`);
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` `);
					if (Card_content) {
						$$renderer.push("<!--[-->");
						Card_content($$renderer, {
							children: ($$renderer) => {
								$$renderer.push(`<form action="?/add" id="main" class="flex flex-col gap-4" method="post">`);
								Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									label: "Name",
									form,
									errors,
									type: "text",
									name: "name",
									placeholder: "Enter the name of new user",
									required: true
								});
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									label: "Email",
									form,
									type: "email",
									errors,
									name: "email",
									placeholder: "Enter the email of new admin user",
									required: true
								});
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									label: "Password",
									form,
									errors,
									name: "password",
									placeholder: "Enter password",
									required: true,
									type: "password"
								});
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									form,
									errors,
									name: "role",
									type: "select",
									label: "Role",
									items: data?.allRoles,
									required: true
								});
								$$renderer.push(`<!----> `);
								Button($$renderer, {
									type: "submit",
									class: "mt-4",
									form: "main",
									children: ($$renderer) => {
										if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
											$$renderer.push("<!--[0-->");
											LoadingBtn($$renderer, { name: "Adding New User" });
										} else {
											$$renderer.push("<!--[-1-->");
											Plus($$renderer, { class: "h-4 w-4" });
											$$renderer.push(`<!----> Add User`);
										}
										$$renderer.push(`<!--]-->`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----></form>`);
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { snapshot });
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BNNNcQZZ.js.map
