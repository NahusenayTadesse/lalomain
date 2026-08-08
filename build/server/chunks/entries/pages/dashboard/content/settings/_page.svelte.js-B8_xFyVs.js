import { Y as head, ac as store_get, ae as unsubscribe_stores } from '../../../../../chunks/index-server.js-BTqLeq8m.js';
import { I as InputComp } from '../../../../../chunks/InputComp.js-WvDjA_HK.js';
import { S as Save } from '../../../../../chunks/save.js-BfqCztfl.js';
import { B as Button } from '../../../../../chunks/button.js-bMcXU9rE.js';
import { L as LoadingBtn } from '../../../../../chunks/LoadingBtn.js-BOcE4VBH.js';
import { d as superForm } from '../../../../../chunks/client2.js-Clbb-yOm.js';
import '../../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../../chunks/client.js-6EH1pFcc.js';
import { E as Errors } from '../../../../../chunks/Errors.js-BXAzcvnM.js';
import { F as FormCard } from '../../../../../chunks/FormCard.js-CoTL2ZAb.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../../../chunks/badge-check.js-Bm3KBDwy.js';
import '../../../../../chunks/minus.js-BTyGQs-Z.js';
import '../../../../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../../../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../../../../chunks/circle-alert.js-BBu5AyXT.js';
import '../../../../../chunks/loader.js-BRhHoeZt.js';
import '../../../../../chunks/command.js-DctsEKur.js';
import '../../../../../chunks/input.js-em5PybWO.js';
import '../../../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/x.js-Ck4p1r8z.js';
import '../../../../../chunks/SelectComp.js-DiDAVd-M.js';
import '../../../../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../../../../chunks/popper-layer-force-mount.js-C-nVoiI2.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../chunks/safe-polygon.svelte.js-MuUjbcC-.js';
import '../../../../../chunks/label.js-DTCBdSc8.js';
import '../../../../../chunks/scroll-area.js-CsR-G4bR.js';
import '../../../../../chunks/assets.js-DVYtCFUU.js';
import 'browser-image-compression';
import '../../../../../chunks/dialog-content.js-xpb-oFii.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/forms.js-Dl9gmZZg.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-s-pIdUZM.js';
import '../../../../../chunks/utils.js-BQTEHVEl.js';
import '../../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../../chunks/internal2.js-CNE764l1.js';
import '../../../../../chunks/card.js-BH16vHUa.js';

//#region src/routes/dashboard/content/settings/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, errors, allErrors, delayed} = superForm(data.form, { resetForm: false });
		head("1p59j5v", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Site Settings | Dashboard</title>`);
			});
		});
		$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div><h1 class="font-heading text-2xl font-bold">Site Settings</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Company contact details. These appear on the Contact page and in the footer of every page.
			The first email and the first phone number are the ones shown in the footer.</p></div> `);
		FormCard($$renderer, {
			title: "Contact details",
			description: "Changes go live as soon as you save.",
			children: ($$renderer) => {
				$$renderer.push(`<form method="post" action="?/save" id="settings" class="flex flex-col gap-2">`);
				Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Email addresses",
					name: "emails",
					type: "textarea",
					rows: 4,
					placeholder: "One per line, as: General Inquiries | info@fahemgeneraltrading.com"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Phone numbers",
					name: "phones",
					type: "textarea",
					rows: 3,
					placeholder: "One per line, e.g. +251 969 211 115"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Office address",
					name: "address",
					type: "text"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Tagline",
					name: "tagline",
					type: "text"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Footer paragraph",
					name: "footerBlurb",
					type: "textarea",
					rows: 4
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					type: "submit",
					form: "settings",
					class: "mt-4",
					children: ($$renderer) => {
						if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
							$$renderer.push("<!--[0-->");
							LoadingBtn($$renderer, { name: "Saving" });
						} else {
							$$renderer.push("<!--[-1-->");
							Save($$renderer, { class: "size-4" });
							$$renderer.push(`<!----> Save Settings`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></form>`);
			}});
		$$renderer.push(`<!----></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-B8_xFyVs.js.map
