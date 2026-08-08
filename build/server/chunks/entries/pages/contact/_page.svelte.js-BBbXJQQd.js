import { Y as head, X as attr, ac as store_get, a4 as escape_html, ae as unsubscribe_stores, V as ensure_array_like, a2 as stringify, F as derived } from '../../../chunks/index-server.js-BTqLeq8m.js';
import { I as InputComp } from '../../../chunks/InputComp.js-WvDjA_HK.js';
import { C as Circle_alert } from '../../../chunks/circle-alert.js-BBu5AyXT.js';
import { M as Mail } from '../../../chunks/mail.js-DNS3pYuf.js';
import { M as Map_pin } from '../../../chunks/map-pin.js-BlkrXNXX.js';
import { S as Send, P as Phone } from '../../../chunks/send.js-pLyNckSu.js';
import { B as Button } from '../../../chunks/button.js-bMcXU9rE.js';
import { L as LoadingBtn } from '../../../chunks/LoadingBtn.js-BOcE4VBH.js';
import { C as Card, a as Card_content } from '../../../chunks/card.js-BH16vHUa.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-CFjCxjDC.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-fpGDQmSC.js';
import { d as superForm } from '../../../chunks/client2.js-Clbb-yOm.js';
import { E as Errors } from '../../../chunks/Errors.js-BXAzcvnM.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../chunks/badge-check.js-Bm3KBDwy.js';
import '../../../chunks/minus.js-BTyGQs-Z.js';
import '../../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../../chunks/loader.js-BRhHoeZt.js';
import '../../../chunks/command.js-DctsEKur.js';
import '../../../chunks/input.js-em5PybWO.js';
import '../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/x.js-Ck4p1r8z.js';
import '../../../chunks/SelectComp.js-DiDAVd-M.js';
import '../../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../../chunks/popper-layer-force-mount.js-C-nVoiI2.js';
import '../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../chunks/safe-polygon.svelte.js-MuUjbcC-.js';
import '../../../chunks/label.js-DTCBdSc8.js';
import '../../../chunks/scroll-area.js-CsR-G4bR.js';
import '../../../chunks/assets.js-DVYtCFUU.js';
import '../../../chunks/exports.js-CimAlNvy.js';
import '../../../chunks/client.js-6EH1pFcc.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/routing.js-BriaEEEY.js';
import '../../../chunks/internal2.js-CNE764l1.js';
import '../../../chunks/utils.js-BQTEHVEl.js';
import 'browser-image-compression';
import '../../../chunks/dialog-content.js-xpb-oFii.js';
import '../../../chunks/forms.js-Dl9gmZZg.js';
import '../../../chunks/app.js-COdsXQ7K.js';
import '../../../chunks/stores.js-s-pIdUZM.js';

//#region src/lib/forms/ContactForm.svelte
function ContactForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/contact" } = $$props;
		const { form, errors, allErrors, delayed, message } = superForm(data, { resetForm: true });
		{
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<form method="POST"${attr("action", action)} id="contact" class="flex flex-col gap-2">`);
			if (store_get($$store_subs ??= {}, "$message", message)?.type === "error") {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div role="alert" aria-live="assertive" class="mb-2 flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">`);
				Circle_alert($$renderer, { class: "size-4 shrink-0" });
				$$renderer.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$message", message).text)}</div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
			$$renderer.push(`<!----> <div class="grid gap-2 sm:grid-cols-2">`);
			InputComp($$renderer, {
				form,
				errors,
				label: "Your name",
				type: "text",
				name: "name",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Email",
				type: "email",
				name: "email",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Phone",
				type: "tel",
				name: "phone",
				placeholder: "Optional"
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Company or address",
				type: "text",
				name: "address",
				placeholder: "Optional"
			});
			$$renderer.push(`<!----></div> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Subject",
				type: "text",
				name: "subject",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Message",
				type: "textarea",
				name: "message",
				rows: 6,
				required: true,
				placeholder: "Tell us what you are looking for — volumes, grades, destination market…"
			});
			$$renderer.push(`<!----> <input type="text" name="website"${attr("value", store_get($$store_subs ??= {}, "$form", form).website)} tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden"/> `);
			Button($$renderer, {
				type: "submit",
				form: "contact",
				size: "lg",
				class: "mt-2 gap-2",
				children: ($$renderer) => {
					if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
						$$renderer.push("<!--[0-->");
						LoadingBtn($$renderer, { name: "Sending" });
					} else {
						$$renderer.push("<!--[-1-->");
						Send($$renderer, { class: "size-4" });
						$$renderer.push(`<!----> Send Message`);
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></form>`);
		}
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/contact/+page.svelte
function card($$renderer, delay, Icon, title, body) {
	$$renderer.push(`<div>`);
	Card($$renderer, {
		class: "lift group h-full hover:border-primary/40 hover:shadow-lg",
		children: ($$renderer) => {
			Card_content($$renderer, {
				class: "pt-6",
				children: ($$renderer) => {
					if (Icon) {
						$$renderer.push("<!--[-->");
						Icon($$renderer, { class: "size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" });
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` <h3 class="mt-4 font-semibold">${escape_html(title)}</h3> `);
					body($$renderer);
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div>`);
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const settings = derived(() => data.settings);
		function address($$renderer) {
			$$renderer.push(`<p class="mt-2 text-sm text-muted-foreground">${escape_html(settings()?.address)}</p>`);
		}
		function emails($$renderer) {
			$$renderer.push(`<ul class="mt-2 space-y-2"><!--[-->`);
			const each_array = ensure_array_like(settings()?.emails ?? []);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let email = each_array[$$index];
				$$renderer.push(`<li><p class="text-xs text-muted-foreground">${escape_html(email.label)}</p> <a${attr("href", `mailto:${stringify(email.value)}`)} class="text-sm break-all text-foreground transition-colors hover:text-primary">${escape_html(email.value)}</a></li>`);
			}
			$$renderer.push(`<!--]--></ul>`);
		}
		function phones($$renderer) {
			$$renderer.push(`<ul class="mt-2 space-y-1"><!--[-->`);
			const each_array_1 = ensure_array_like(settings()?.phones ?? []);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let phone = each_array_1[$$index_1];
				$$renderer.push(`<li><a${attr("href", `tel:${stringify(phone.replace(/\s/g, ""))}`)} class="text-sm text-foreground transition-colors hover:text-primary">${escape_html(phone)}</a></li>`);
			}
			$$renderer.push(`<!--]--></ul>`);
		}
		head("1bv7ezn", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Contact Us | Fahem General Trading</title>`);
			});
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="py-16"><div class="container mx-auto px-4 sm:px-6"><div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">`);
		card($$renderer, 0, Map_pin, "Address", address);
		$$renderer.push(`<!----> `);
		card($$renderer, 110, Mail, "Email", emails);
		$$renderer.push(`<!----> `);
		card($$renderer, 220, Phone, "Phone", phones);
		$$renderer.push(`<!----></div></div></section> <section class="bg-muted/30 py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, {
			title: "Send Us a Message",
			subtitle: "Tell us what you need and our team will get back to you."
		});
		$$renderer.push(`<!----> <div class="mx-auto mt-12 max-w-2xl">`);
		ContactForm($$renderer, { data: data.form });
		$$renderer.push(`<!----></div></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BBbXJQQd.js.map
