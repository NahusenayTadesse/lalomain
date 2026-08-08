import { F as derived, ac as store_get, ae as unsubscribe_stores } from '../../../chunks/index-server.js-BTqLeq8m.js';
import { C as Circle_alert } from '../../../chunks/circle-alert.js-BBu5AyXT.js';
import { B as Button } from '../../../chunks/button.js-bMcXU9rE.js';
import { I as Input } from '../../../chunks/input.js-em5PybWO.js';
import { L as Label } from '../../../chunks/label.js-DTCBdSc8.js';
import '../../../chunks/client.js-6EH1pFcc.js';
import { C as Card, b as Card_header, a as Card_content, c as Card_title, d as Card_description } from '../../../chunks/card.js-BH16vHUa.js';
import { p as page } from '../../../chunks/stores.js-s-pIdUZM.js';
import '../../../chunks/auth-client.js-x1HIy4_Q.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/exports.js-CimAlNvy.js';
import '../../../chunks/routing.js-BriaEEEY.js';
import '../../../chunks/internal2.js-CNE764l1.js';
import '../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../chunks/utils.js-BQTEHVEl.js';
import '../../../chunks/dist3.js-DHSx5JNT.js';
import '../../../chunks/error.js-DzWUU7VP.js';

//#region src/routes/reset-password/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const token = derived(() => store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("token"));
		let password = "";
		let confirmPassword = "";
		let isLoading = false;
		const passwordsMatch = derived(() => password === confirmPassword);
		const isPasswordValid = derived(() => password.length >= 8);
		const canSubmit = derived(() => passwordsMatch() && isPasswordValid() && token() && true);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="container flex h-screen w-screen flex-col items-center justify-center">`);
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					class: "w-full max-w-md border-border bg-card text-card-foreground shadow-lg",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								class: "space-y-1",
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											class: "text-2xl font-bold tracking-tight",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Reset your password`);
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
											class: "text-muted-foreground",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Choose a new password for your account.`);
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
									if (!token()) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<div class="flex items-start gap-2 rounded-lg bg-destructive/15 p-3 text-sm text-destructive">`);
										Circle_alert($$renderer, { class: "h-5 w-5 shrink-0" });
										$$renderer.push(`<!----> <p><strong>Invalid link:</strong> This reset link is missing or has expired. Request a new one from the forgot password page.</p></div>`);
									} else {
										$$renderer.push("<!--[-1-->");
										$$renderer.push(`<form class="space-y-4">`);
										$$renderer.push("<!--[-1-->");
										$$renderer.push(`<!--]--> <div class="space-y-2">`);
										Label($$renderer, {
											for: "password",
											class: "text-foreground",
											children: ($$renderer) => {
												$$renderer.push(`<!---->New password`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Input($$renderer, {
											id: "password",
											type: "password",
											required: true,
											disabled: isLoading,
											class: "border-input bg-background text-foreground",
											get value() {
												return password;
											},
											set value($$value) {
												password = $$value;
												$$settled = false;
											}
										});
										$$renderer.push(`<!----> `);
										if (password && !isPasswordValid()) {
											$$renderer.push("<!--[0-->");
											$$renderer.push(`<p class="text-xs text-destructive">Password must be at least 8 characters</p>`);
										} else $$renderer.push("<!--[-1-->");
										$$renderer.push(`<!--]--></div> <div class="space-y-2">`);
										Label($$renderer, {
											for: "confirmPassword",
											class: "text-foreground",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Confirm new password`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Input($$renderer, {
											id: "confirmPassword",
											type: "password",
											required: true,
											disabled: isLoading,
											class: "border-input bg-background text-foreground",
											get value() {
												return confirmPassword;
											},
											set value($$value) {
												confirmPassword = $$value;
												$$settled = false;
											}
										});
										$$renderer.push(`<!----> `);
										if (confirmPassword && !passwordsMatch()) {
											$$renderer.push("<!--[0-->");
											$$renderer.push(`<p class="text-xs text-destructive">Passwords do not match</p>`);
										} else $$renderer.push("<!--[-1-->");
										$$renderer.push(`<!--]--></div> `);
										Button($$renderer, {
											type: "submit",
											class: "w-full bg-primary text-primary-foreground hover:bg-primary/90",
											disabled: !canSubmit(),
											children: ($$renderer) => {
												$$renderer.push("<!--[-1-->");
												$$renderer.push(`Update password`);
												$$renderer.push(`<!--]-->`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----></form>`);
									}
									$$renderer.push(`<!--]-->`);
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
			$$renderer.push(`</div>`);
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

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BS37_GDI.js.map
