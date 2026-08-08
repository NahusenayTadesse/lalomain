import { Y as head, X as attr, ac as store_get, a4 as escape_html, F as derived, _ as spread_props, af as store_mutate, ae as unsubscribe_stores } from '../../../chunks/index-server.js-BTqLeq8m.js';
import { I as Icon } from '../../../chunks/Icon.js-CT_MUOCa.js';
import { B as Button } from '../../../chunks/button.js-bMcXU9rE.js';
import { I as Input } from '../../../chunks/input.js-em5PybWO.js';
import { L as Label } from '../../../chunks/label.js-DTCBdSc8.js';
import { D as DarkMode } from '../../../chunks/DarkMode.js-CvlnLs7N.js';
import { C as Card, b as Card_header, c as Card_title, d as Card_description, a as Card_content } from '../../../chunks/card.js-BH16vHUa.js';
import { d as superForm } from '../../../chunks/client2.js-Clbb-yOm.js';
import '../../../chunks/exports.js-CimAlNvy.js';
import '../../../chunks/client.js-6EH1pFcc.js';
import { E as Errors } from '../../../chunks/Errors.js-BXAzcvnM.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../chunks/sun.js-1W10rV_o.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/dist.js-B6Yn2WWx.js';
import '../../../chunks/dropdown-menu.js-BmmLkMsj.js';
import '../../../chunks/minus.js-BTyGQs-Z.js';
import '../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../chunks/popper-layer-force-mount.js-C-nVoiI2.js';
import '../../../chunks/menu.js-D3VF0FIs.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/forms.js-Dl9gmZZg.js';
import '../../../chunks/app.js-COdsXQ7K.js';
import '../../../chunks/stores.js-s-pIdUZM.js';
import '../../../chunks/utils.js-BQTEHVEl.js';
import '../../../chunks/routing.js-BriaEEEY.js';
import '../../../chunks/internal2.js-CNE764l1.js';
import '../../../chunks/circle-alert.js-BBu5AyXT.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/eye.svelte
function Eye($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "eye" },
		props,
		{ iconNode: [["path", { "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", {
			"cx": "12",
			"cy": "12",
			"r": "3"
		}]] }
	]));
}
//#endregion
//#region src/lib/forms/Login.svelte
function Login($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/login" } = $$props;
		const { form, errors, allErrors} = superForm(data, {});
		let EyeIcon = derived(() => Eye);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					class: "mx-auto flex w-full max-w-md flex-col justify-center justify-self-center ",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											class: "flex flex-row justify-between text-2xl",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Login `);
												DarkMode($$renderer);
												$$renderer.push(`<!---->`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Card_description) {
										$$renderer.push("<!--[-->");
										Card_description($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->Enter your email below to login to your account`);
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
									$$renderer.push(`<form method="POST"${attr("action", action)}>`);
									Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
									$$renderer.push(`<!----> <div class="grid gap-4"><div class="grid gap-2">`);
									Label($$renderer, {
										for: "email",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Email`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> `);
									Input($$renderer, {
										id: "email",
										name: "email",
										type: "email",
										placeholder: "m@example.com",
										required: true,
										get value() {
											return store_get($$store_subs ??= {}, "$form", form).email;
										},
										set value($$value) {
											store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).email = $$value);
											$$settled = false;
										}
									});
									$$renderer.push(`<!----> `);
									if (store_get($$store_subs ??= {}, "$errors", errors).email) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).email)}</span>`);
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--></div> <div class="grid gap-2"><div class="flex items-center">`);
									Label($$renderer, {
										for: "password",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Password`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> <a href="/forgot-password" class="ml-auto inline-block text-sm underline">Forgot your password?</a></div> <div class="relative">`);
									Input($$renderer, {
										id: "password",
										name: "password",
										type: "password",
										required: true,
										get value() {
											return store_get($$store_subs ??= {}, "$form", form).password;
										},
										set value($$value) {
											store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).password = $$value);
											$$settled = false;
										}
									});
									$$renderer.push(`<!----> <button type="button" title="Make Password Visible">`);
									if (EyeIcon()) {
										$$renderer.push("<!--[-->");
										EyeIcon()($$renderer, { class: "absolute top-0.5 right-2 h-6 w-6 transition-transform duration-300 ease-in-out" });
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(`</button> `);
									if (store_get($$store_subs ??= {}, "$errors", errors).password) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).password)}</span>`);
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--></div></div> `);
									Button($$renderer, {
										type: "submit",
										class: "w-full",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Login`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----></div></form>`);
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
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/login/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("1x05zx6", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Login</title>`);
			});
		});
		$$renderer.push(`<div class="flex h-screen w-full items-center justify-center px-4">`);
		Login($$renderer, {
			data: data?.form,
			action: "?/login"
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-cMwGO5aP.js.map
