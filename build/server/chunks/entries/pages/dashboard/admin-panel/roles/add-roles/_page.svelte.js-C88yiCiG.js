import { Y as head, a0 as bind_props, ac as store_get, ae as unsubscribe_stores } from '../../../../../../chunks/index-server.js-BTqLeq8m.js';
import { I as InputComp } from '../../../../../../chunks/InputComp.js-WvDjA_HK.js';
import { P as Plus } from '../../../../../../chunks/plus.js-D_QDBo_j.js';
import { B as Button } from '../../../../../../chunks/button.js-bMcXU9rE.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-BOcE4VBH.js';
import { d as superForm } from '../../../../../../chunks/client2.js-Clbb-yOm.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-BXAzcvnM.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-DmdkKCR7.js';
import { c as createRoleSchema } from '../../../../../../chunks/schema2.js-CRoqXkwa.js';
import { F as FormCard } from '../../../../../../chunks/FormCard.js-CoTL2ZAb.js';
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
import '../../../../../../chunks/card.js-BH16vHUa.js';

//#region src/routes/dashboard/admin-panel/roles/add-roles/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, errors, delayed, capture, restore, allErrors } = superForm(data.form, {
			dataType: "json",
			validators: zodClient(createRoleSchema)
		});
		const snapshot = {
			capture,
			restore
		};
		head("1ckc1g2", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Add New Role</title>`);
			});
		});
		FormCard($$renderer, {
			title: "Add New Role",
			children: ($$renderer) => {
				$$renderer.push(`<form action="?/add" id="main" class="flex flex-col gap-4" method="POST">`);
				Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					label: "Name",
					name: "name",
					type: "text",
					form,
					errors,
					placeholder: "Enter Role Name"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					label: "Description",
					name: "description",
					type: "textarea",
					form,
					errors,
					placeholder: "Enter Role Description"
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					type: "submit",
					class: "mt-4",
					form: "main",
					children: ($$renderer) => {
						if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
							$$renderer.push("<!--[0-->");
							LoadingBtn($$renderer, { name: "Adding Role" });
						} else {
							$$renderer.push("<!--[-1-->");
							Plus($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> Add Role`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></form>`);
			}});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { snapshot });
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-C88yiCiG.js.map
