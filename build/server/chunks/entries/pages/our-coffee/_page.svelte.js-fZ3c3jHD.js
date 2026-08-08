import { Y as head, a4 as escape_html, V as ensure_array_like, F as derived } from '../../../chunks/index-server.js-BTqLeq8m.js';
import { I as Image_gallery, F as Faq_section } from '../../../chunks/faq-section.js-BGAu395n.js';
import { C as Card, a as Card_content } from '../../../chunks/card.js-BH16vHUa.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-CFjCxjDC.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-fpGDQmSC.js';
import { F as Farm_cards } from '../../../chunks/farm-cards.js-CsCILJSB.js';
import { B as Badge } from '../../../chunks/badge.js-BEMS_QjW.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../../chunks/x.js-Ck4p1r8z.js';
import '../../../chunks/button.js-bMcXU9rE.js';
import '../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/dialog-content.js-xpb-oFii.js';
import '../../../chunks/dialog-description.js-CrMMB7cS.js';
import '../../../chunks/assets.js-DVYtCFUU.js';
import '../../../chunks/sprout.js-B6N2W9VO.js';

//#region src/routes/our-coffee/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		/** The sub-region table is introduced by the farm the rows belong to. */
		const subRegionFarm = derived(() => data.subRegions[0]?.farmName);
		head("9k0s6e", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Our Coffee | Fahem General Trading</title>`);
			});
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="py-16"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, { title: "Our Farms" });
		$$renderer.push(`<!----> <div class="mt-12">`);
		Farm_cards($$renderer, {
			farms: data.farms,
			showStats: true
		});
		$$renderer.push(`<!----></div> `);
		if (data.subRegions.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mx-auto mt-16 max-w-4xl"><h3 class="text-center text-xl font-semibold">${escape_html(subRegionFarm())} — Sub-regions &amp; Profiles</h3> <div class="mt-6 overflow-x-auto rounded-xl border border-border"><table class="w-full text-left text-sm"><thead class="bg-muted/50"><tr><th class="px-4 py-3 font-semibold">Region</th><th class="px-4 py-3 font-semibold">Altitude</th><th class="px-4 py-3 font-semibold">Characteristics</th></tr></thead><tbody><!--[-->`);
			const each_array = ensure_array_like(data.subRegions);
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let row = each_array[i];
				$$renderer.push(`<tr class="border-t border-border transition-colors duration-300 hover:bg-muted/40"><td class="px-4 py-3 font-medium">${escape_html(row.name)}</td><td class="px-4 py-3 text-muted-foreground">${escape_html(row.altitude)}</td><td class="px-4 py-3 text-muted-foreground">${escape_html(row.notes)}</td></tr>`);
			}
			$$renderer.push(`<!--]--></tbody></table></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></section> <section class="bg-muted/30 py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, {
			title: "Regions & Tasting Profiles",
			subtitle: "Distinct Ethiopian origins, each with its own signature cup."
		});
		$$renderer.push(`<!----> <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
		const each_array_1 = ensure_array_like(data.regions);
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let region = each_array_1[i];
			$$renderer.push(`<div class="h-full">`);
			Card($$renderer, {
				class: "lift h-full hover:border-primary/40 hover:shadow-lg",
				children: ($$renderer) => {
					Card_content($$renderer, {
						class: "pt-6",
						children: ($$renderer) => {
							$$renderer.push(`<h3 class="font-heading text-lg font-semibold">${escape_html(region.name)}</h3> <div class="mt-3 flex flex-wrap gap-1.5"><!--[-->`);
							const each_array_2 = ensure_array_like(region.cupping?.split(", ") ?? []);
							for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
								let note = each_array_2[$$index_1];
								Badge($$renderer, {
									variant: "secondary",
									class: "font-normal",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(note)}`);
									},
									$$slots: { default: true }
								});
							}
							$$renderer.push(`<!--]--></div> <p class="mt-4 text-sm"><span class="font-medium text-foreground">Aroma:</span> <span class="text-muted-foreground">${escape_html(region.aroma)}</span></p> <p class="mt-2 text-sm"><span class="font-medium text-foreground">Flavor:</span> <span class="text-muted-foreground">${escape_html(region.flavor)}</span></p>`);
						},
						$$slots: { default: true }
					});
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, {
			title: "Harvesting to Packing",
			subtitle: "Full traceability, documented at every stage from cherry to container."
		});
		$$renderer.push(`<!----></div> <div class="container mx-auto mt-12 px-4 sm:px-6">`);
		Image_gallery($$renderer, { images: data.gallery });
		$$renderer.push(`<!----></div> <div class="container mx-auto px-4 sm:px-6"><ol class="mx-auto mt-12 max-w-2xl space-y-4"><!--[-->`);
		const each_array_3 = ensure_array_like(data.steps);
		for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
			let step = each_array_3[i];
			$$renderer.push(`<li class="flex gap-4"><span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">${escape_html(i + 1)}</span> <p class="pt-1 text-sm text-muted-foreground"><span class="font-medium text-foreground">${escape_html(step.title)}</span> `);
			if (step.description) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`— ${escape_html(step.description)}`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></p></li>`);
		}
		$$renderer.push(`<!--]--></ol></div></section> `);
		Faq_section($$renderer, {
			faqs: data.faqs,
			class: "bg-muted/30"
		});
		$$renderer.push(`<!---->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-fZ3c3jHD.js.map
