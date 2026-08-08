import { Y as head, a4 as escape_html, a3 as attr_class, a2 as stringify, V as ensure_array_like } from '../../../../chunks/index-server.js-BTqLeq8m.js';
import { A as Arrow_right } from '../../../../chunks/arrow-right.js-BcQAl_8u.js';
import { D as Dynamic_icon } from '../../../../chunks/dynamic-icon.js-gFV7Vm9n.js';
import { B as Button } from '../../../../chunks/button.js-bMcXU9rE.js';
import { C as Card, a as Card_content } from '../../../../chunks/card.js-BH16vHUa.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../../chunks/coffee.js-Y2AfR-s8.js';
import '../../../../chunks/leaf.js-dR--hGy3.js';
import '../../../../chunks/map-pin.js-BlkrXNXX.js';
import '../../../../chunks/sprout.js-B6N2W9VO.js';

//#region src/lib/components/AdminCard.svelte
function AdminCard($$renderer, $$props) {
	/** A grouped set of admin links, shown as one card on the admin panel index. */
	let { title, description = "", icon = "Users", items = [], accentColor = "from-primary/15 to-primary/5" } = $$props;
	if (Card) {
		$$renderer.push("<!--[-->");
		Card($$renderer, {
			class: "overflow-hidden",
			children: ($$renderer) => {
				$$renderer.push(`<div${attr_class(`bg-linear-to-br ${stringify(accentColor)} px-6 py-5`)}>`);
				Dynamic_icon($$renderer, {
					name: icon,
					class: "size-8 text-primary"
				});
				$$renderer.push(`<!----> <h3 class="mt-3 font-heading text-xl font-semibold">${escape_html(title)}</h3> `);
				if (description) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="mt-1 text-sm text-muted-foreground">${escape_html(description)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div> `);
				if (Card_content) {
					$$renderer.push("<!--[-->");
					Card_content($$renderer, {
						class: "flex flex-col gap-2 pt-4",
						children: ($$renderer) => {
							$$renderer.push(`<!--[-->`);
							const each_array = ensure_array_like(items);
							for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
								let item = each_array[$$index];
								Button($$renderer, {
									href: item.href,
									variant: "ghost",
									class: "justify-between",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(item.name)} `);
										Arrow_right($$renderer, { class: "size-4" });
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								});
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
}
//#endregion
//#region src/routes/dashboard/admin-panel/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let userManagement = [{
			name: "Users",
			href: "/dashboard/admin-panel/users"
		}, {
			name: "Roles",
			href: "/dashboard/admin-panel/roles"
		}];
		head("au7ei8", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Admin Panel</title>`);
			});
		});
		$$renderer.push(`<div class="min-h-dvh w-full text-foreground transition-colors duration-300"><main class="mx-auto max-w-7xl px-6 py-12"><div class="mb-16 flex flex-col gap-4"><h2 class="text-4xl font-bold tracking-tight">Welcome to Admin Dashboard</h2> <p class="max-w-2xl text-lg text-muted-foreground">Manage locations, organizational structure, and user access. Select a category below to get
				started.</p></div> <div class="grid gap-8 md:grid-cols-3">`);
		AdminCard($$renderer, {
			title: "User Management",
			description: "Control users and their assigned roles",
			icon: "Users",
			items: userManagement,
			accentColor: "from-violet-500/15 to-violet-500/5"
		});
		$$renderer.push(`<!----></div></main> <footer class="mt-16 border-t border-border/50 bg-card/50 py-8"><div class="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Fahem General Trading.</p></div></footer></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-DOolw2M-.js.map
