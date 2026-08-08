import { Y as head, V as ensure_array_like, a4 as escape_html } from '../../../chunks/index-server.js-BTqLeq8m.js';
import { D as Dynamic_icon, S as Shield_check } from '../../../chunks/dynamic-icon.js-gFV7Vm9n.js';
import { I as Image_gallery, F as Faq_section } from '../../../chunks/faq-section.js-BGAu395n.js';
import { C as Card, a as Card_content } from '../../../chunks/card.js-BH16vHUa.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-CFjCxjDC.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-fpGDQmSC.js';
import { M as Milestone_cards } from '../../../chunks/milestone-cards.js-Mqi4u-ME.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../chunks/coffee.js-Y2AfR-s8.js';
import '../../../chunks/leaf.js-dR--hGy3.js';
import '../../../chunks/map-pin.js-BlkrXNXX.js';
import '../../../chunks/sprout.js-B6N2W9VO.js';
import '../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../chunks/create-id.js-C-QgUMSs.js';
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

//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("cwls5q", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>About Us | Fahem General Trading</title>`);
			});
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="bg-muted/30 py-20"><div class="container mx-auto px-4 sm:px-6"><div class="grid items-center gap-12 lg:grid-cols-2"><div class="group overflow-hidden rounded-2xl border border-border shadow-sm"><img src="/image1.webp" alt="Hands sorting freshly picked coffee cherries into a bucket" class="aspect-4/3 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div> <div>`);
		Section_heading($$renderer, {
			title: "Our Origin",
			align: "start",
			rule: true
		});
		$$renderer.push(`<!----> <p class="mt-6 text-lg text-muted-foreground">Fahem General Trading traces its origins to Mohammed Lalo and Mohammed Muzeyin, who
					transitioned from selling used clothing to coffee picking in the late 1990s. That hands-on
					experience inspired their vision to become regional coffee suppliers by the early 2000s —
					a transformation from local trade into a name trusted at global standards, while remaining
					true to the soil and the craft.</p></div></div></div></section> <section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, { title: "Our Journey" });
		$$renderer.push(`<!----> <div class="mx-auto mt-14 max-w-5xl">`);
		Milestone_cards($$renderer, {
			milestones: data.milestones,
			columns: "sm:grid-cols-2 lg:grid-cols-4"
		});
		$$renderer.push(`<!----></div></div> <div class="group mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-border px-4 sm:px-6"><img src="/farm.webp" alt="Aerial view of coffee farmland rows in Oromia" class="aspect-21/9 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div></section> <section class="relative isolate overflow-hidden py-20 text-primary-foreground"><img src="/coffee.webp" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="absolute inset-0 -z-10 bg-primary/90"></div> <div class="container mx-auto px-4 sm:px-6"><h2 class="text-center font-heading text-3xl font-bold md:text-4xl">Why Fahem</h2> <div class="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-3"><!--[-->`);
		const each_array = ensure_array_like(data.whyFahem);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let item = each_array[i];
			$$renderer.push(`<div class="group text-center">`);
			Dynamic_icon($$renderer, {
				name: item.icon,
				class: "mx-auto size-8 transition-transform duration-500 group-hover:-translate-y-1"
			});
			$$renderer.push(`<!----> <h3 class="mt-4 text-xl font-semibold">${escape_html(item.title)}</h3> <p class="mt-2 text-sm opacity-90">${escape_html(item.description)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, {
			title: "Our World",
			subtitle: "Moments from the farms, the fields, and the roast."
		});
		$$renderer.push(`<!----></div> <div class="container mx-auto mt-12 px-4 sm:px-6">`);
		Image_gallery($$renderer, { images: data.gallery });
		$$renderer.push(`<!----></div></section> <section class="bg-muted/30 py-20"><div class="container mx-auto px-4 text-center sm:px-6"><div>`);
		Shield_check($$renderer, { class: "mx-auto size-8 text-primary" });
		$$renderer.push(`<!----></div> <h2 class="mt-4 font-heading text-3xl font-bold md:text-4xl">Certified &amp; Trusted</h2> <p class="mx-auto mt-4 max-w-xl text-muted-foreground">We work alongside leading names in the global coffee trade.</p> <div class="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"><!--[-->`);
		const each_array_1 = ensure_array_like(data.partners);
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let partner = each_array_1[i];
			$$renderer.push(`<div>`);
			Card($$renderer, {
				class: "lift h-full hover:border-primary/40 hover:shadow-md",
				children: ($$renderer) => {
					Card_content($$renderer, {
						class: "flex items-center justify-center py-8 text-sm font-medium",
						children: ($$renderer) => {
							$$renderer.push(`<!---->${escape_html(partner.name)}`);
						},
						$$slots: { default: true }
					});
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> `);
		Faq_section($$renderer, {
			faqs: data.faqs,
			subtitle: "More about who we are and how we work."
		});
		$$renderer.push(`<!---->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-tMSr5Q1d.js.map
