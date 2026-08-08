import { Y as head, V as ensure_array_like, a4 as escape_html } from '../../chunks/index-server.js-BTqLeq8m.js';
import { A as Arrow_right } from '../../chunks/arrow-right.js-BcQAl_8u.js';
import { I as Image_gallery, F as Faq_section } from '../../chunks/faq-section.js-BGAu395n.js';
import { G as Globe, L as Leaf } from '../../chunks/leaf.js-dR--hGy3.js';
import { B as Button } from '../../chunks/button.js-bMcXU9rE.js';
import { C as Card, a as Card_content } from '../../chunks/card.js-BH16vHUa.js';
import { P as Page_hero } from '../../chunks/page-hero.js-CFjCxjDC.js';
import { S as Section_heading } from '../../chunks/section-heading.js-fpGDQmSC.js';
import { F as Farm_cards } from '../../chunks/farm-cards.js-CsCILJSB.js';
import { M as Milestone_cards } from '../../chunks/milestone-cards.js-Mqi4u-ME.js';
import '../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../chunks/uneval.js-CatQk29t.js';
import '../../chunks/Icon.js-CT_MUOCa.js';
import '../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../chunks/create-id.js-C-QgUMSs.js';
import '../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../chunks/x.js-Ck4p1r8z.js';
import '../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../chunks/index-server2.js-BPx0mTfA.js';
import '../../chunks/dialog-content.js-xpb-oFii.js';
import '../../chunks/dialog-description.js-CrMMB7cS.js';
import '../../chunks/assets.js-DVYtCFUU.js';
import '../../chunks/sprout.js-B6N2W9VO.js';

//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Fahem General Trading | Ethiopian Coffee, Harvested with Pride</title>`);
			});
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, {
				hero: data.hero,
				size: "lg",
				children: ($$renderer) => {
					$$renderer.push(`<div class="enter-up mt-10 flex flex-wrap items-center justify-center gap-4" style="--enter-delay: 680ms">`);
					Button($$renderer, {
						href: "/our-coffee",
						size: "lg",
						class: "gap-2",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Explore Our Coffee `);
							Arrow_right($$renderer, { class: "size-4" });
							$$renderer.push(`<!---->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Button($$renderer, {
						href: "/about",
						size: "lg",
						variant: "outline",
						class: "border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Our Story`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div>`);
				}});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="bg-muted/30 py-20"><div class="container mx-auto px-4 sm:px-6"><div class="grid items-center gap-12 lg:grid-cols-2"><div>`);
		Section_heading($$renderer, {
			title: "Our Coffee",
			align: "start",
			rule: true
		});
		$$renderer.push(`<!----> <p class="mt-6 text-lg text-muted-foreground">Grown across Ethiopia's most celebrated origins, our Arabica beans carry flavor profiles
					ranging from sweet and citrusy to deep, dark chocolatey notes — a reflection of the soil,
					altitude, and care behind every harvest.</p> <div>`);
		Button($$renderer, {
			href: "/our-coffee",
			variant: "link",
			class: "group mt-2 gap-1 px-0 text-primary",
			children: ($$renderer) => {
				$$renderer.push(`<!---->See our regions and farms `);
				Arrow_right($$renderer, { class: "size-4 transition-transform duration-500 group-hover:translate-x-1" });
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div> <div class="group overflow-hidden rounded-2xl border border-border shadow-sm"><img src="/image2.webp" alt="A cup of brewed coffee resting on a bed of green and roasted beans" class="aspect-4/3 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div></div> <div class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"><!--[-->`);
		const each_array = ensure_array_like(data.products);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let product = each_array[i];
			$$renderer.push(`<div>`);
			Card($$renderer, {
				class: "lift h-full text-center hover:border-primary/40 hover:shadow-md",
				children: ($$renderer) => {
					Card_content($$renderer, {
						class: "py-6",
						children: ($$renderer) => {
							$$renderer.push(`<p class="font-heading text-lg font-semibold">${escape_html(product.name)}</p> <p class="text-sm text-muted-foreground">${escape_html(product.grade)}</p>`);
						},
						$$slots: { default: true }
					});
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="py-20"><div class="container mx-auto px-4 sm:px-6"><div class="grid items-center gap-12 lg:grid-cols-2"><div class="group order-2 overflow-hidden rounded-2xl border border-border shadow-sm lg:order-1"><img src="/image1.webp" alt="Hands sorting freshly picked coffee cherries into a bucket" class="aspect-4/3 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div> <div class="order-1 lg:order-2">`);
		Section_heading($$renderer, {
			title: "From Bean to Beyond",
			align: "start",
			rule: true
		});
		$$renderer.push(`<!----> <p class="mt-6 text-lg text-muted-foreground">What began as a humble endeavor in the local market evolved into a profound dedication to
					crafting and supplying the finest coffee beans Ethiopia has to offer.</p></div></div> <div class="mt-16">`);
		Milestone_cards($$renderer, {
			milestones: data.milestones,
			highlightLast: true
		});
		$$renderer.push(`<!----></div></div></section> <section class="bg-muted/30 py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, {
			title: "Our Farms",
			subtitle: "Three farms, three distinct terroirs, one shared commitment to quality."
		});
		$$renderer.push(`<!----> <div class="mt-14">`);
		Farm_cards($$renderer, { farms: data.farms });
		$$renderer.push(`<!----></div></div></section> <section class="relative isolate overflow-hidden py-20 text-primary-foreground"><img src="/coffee.webp" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="absolute inset-0 -z-10 bg-primary/70"></div> <div class="container mx-auto px-4 text-center sm:px-6"><div>`);
		Globe($$renderer, { class: "mx-auto size-10" });
		$$renderer.push(`<!----></div> <h2 class="mt-4 font-heading text-3xl font-bold md:text-4xl">A Global Reach</h2> <p class="mx-auto mt-4 max-w-2xl text-lg opacity-90">Our coffee travels from the highlands of Jimma to tables across the world.</p> <div class="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"><!--[-->`);
		const each_array_1 = ensure_array_like(data.markets);
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let market = each_array_1[i];
			$$renderer.push(`<div class="lift rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 py-4 backdrop-blur-sm hover:border-primary-foreground/40 hover:bg-primary-foreground/10"><p class="font-heading font-semibold">${escape_html(market.name)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, {
			title: "From Farm to Cup",
			subtitle: "A glimpse into the life of every harvest."
		});
		$$renderer.push(`<!----></div> <div class="container mx-auto mt-12 px-4 sm:px-6">`);
		Image_gallery($$renderer, { images: data.gallery });
		$$renderer.push(`<!----></div></section> `);
		Faq_section($$renderer, {
			faqs: data.faqs,
			subtitle: "The questions buyers ask us most often.",
			class: "bg-muted/30"
		});
		$$renderer.push(`<!----> <section class="relative isolate overflow-hidden py-28"><img src="/image5.webp" alt="A cup of coffee resting in a sea of ripe coffee cherries" class="absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="absolute inset-0 -z-10 bg-linear-to-b from-black/75 via-black/70 to-black/80"></div> <div class="container mx-auto px-4 text-center sm:px-6"><div>`);
		Leaf($$renderer, { class: "mx-auto size-8 text-secondary" });
		$$renderer.push(`<!----></div> <h2 class="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">Let's Work Together</h2> <p class="mx-auto mt-4 max-w-xl text-white/85">Interested in sourcing premium Ethiopian coffee, or learning more about our ventures? We'd
			love to hear from you.</p> <div>`);
		Button($$renderer, {
			href: "/contact",
			size: "lg",
			class: "mt-8",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Get in Touch`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Dt-zFOwJ.js.map
