import { V as ensure_array_like, X as attr, a4 as escape_html } from './index-server.js-BTqLeq8m.js';
import { S as Sprout } from './sprout.js-B6N2W9VO.js';
import { C as Card, a as Card_content } from './card.js-BH16vHUa.js';
import { a as assetUrl } from './assets.js-DVYtCFUU.js';

//#region src/lib/components/farm-cards.svelte
function Farm_cards($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { farms, showStats = false } = $$props;
		$$renderer.push(`<div class="grid gap-6 md:grid-cols-3"><!--[-->`);
		const each_array = ensure_array_like(farms);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let farm = each_array[i];
			$$renderer.push(`<div>`);
			Card($$renderer, {
				class: "lift group h-full overflow-hidden hover:border-primary/40 hover:shadow-xl",
				children: ($$renderer) => {
					if (farm.image) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="overflow-hidden"><img${attr("src", assetUrl(farm.image))}${attr("alt", farm.name)} class="aspect-video w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> `);
					Card_content($$renderer, {
						class: "pt-6 pb-6",
						children: ($$renderer) => {
							Sprout($$renderer, { class: "size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" });
							$$renderer.push(`<!----> <h3 class="mt-4 text-xl font-semibold">${escape_html(farm.name)}</h3> `);
							if (farm.location) {
								$$renderer.push("<!--[0-->");
								$$renderer.push(`<p class="text-sm font-medium text-primary">${escape_html(farm.location)}</p>`);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]--> `);
							if (showStats && farm.stats?.length) {
								$$renderer.push("<!--[0-->");
								$$renderer.push(`<ul class="mt-4 space-y-1"><!--[-->`);
								const each_array_1 = ensure_array_like(farm.stats);
								for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
									let stat = each_array_1[$$index];
									$$renderer.push(`<li class="text-sm text-muted-foreground">${escape_html(stat)}</li>`);
								}
								$$renderer.push(`<!--]--></ul>`);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]--> <p class="mt-3 text-sm text-muted-foreground">${escape_html(farm.description)}</p>`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}

export { Farm_cards as F };
//# sourceMappingURL=farm-cards.js-CsCILJSB.js.map
