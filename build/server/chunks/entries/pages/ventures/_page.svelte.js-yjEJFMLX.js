import { Y as head, V as ensure_array_like, X as attr, a4 as escape_html } from '../../../chunks/index-server.js-BTqLeq8m.js';
import { D as Dynamic_icon } from '../../../chunks/dynamic-icon.js-gFV7Vm9n.js';
import { M as Map_pin } from '../../../chunks/map-pin.js-BlkrXNXX.js';
import { a as assetUrl } from '../../../chunks/assets.js-DVYtCFUU.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-CFjCxjDC.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../chunks/coffee.js-Y2AfR-s8.js';
import '../../../chunks/leaf.js-dR--hGy3.js';
import '../../../chunks/sprout.js-B6N2W9VO.js';

//#region src/routes/ventures/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("1yu1cjx", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Ventures | Fahem General Trading</title>`);
			});
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="space-y-16 py-20"><!--[-->`);
		const each_array = ensure_array_like(data.ventures);
		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let venture = each_array[$$index_1];
			$$renderer.push(`<div class="container mx-auto px-4 sm:px-6"><div class="group mx-auto grid max-w-5xl items-center gap-0 overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow duration-700 hover:shadow-xl lg:grid-cols-2"><div class="h-64 overflow-hidden lg:h-full"><img${attr("src", assetUrl(venture.image))}${attr("alt", venture.imageAlt ?? venture.title)} class="h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div> <div class="bg-card p-8 sm:p-10"><div>`);
			Dynamic_icon($$renderer, {
				name: venture.icon,
				fallback: "Stethoscope",
				class: "size-10 text-primary"
			});
			$$renderer.push(`<!----></div> <h2 class="mt-4 font-heading text-3xl font-bold">${escape_html(venture.title)}</h2> <div class="reveal-rule mt-4 h-px w-16 bg-primary"></div> <p class="mt-4 text-muted-foreground">${escape_html(venture.description)}</p> `);
			if (venture.regionsServed?.length) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="mt-8"><p class="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground uppercase">`);
				Map_pin($$renderer, { class: "size-4 text-primary" });
				$$renderer.push(`<!----> Regions Served</p> <div class="mt-4 flex flex-wrap gap-3"><!--[-->`);
				const each_array_1 = ensure_array_like(venture.regionsServed);
				for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
					let region = each_array_1[i];
					$$renderer.push(`<span class="rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10">${escape_html(region)}</span>`);
				}
				$$renderer.push(`<!--]--></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div></div>`);
		}
		$$renderer.push(`<!--]--></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-yjEJFMLX.js.map
