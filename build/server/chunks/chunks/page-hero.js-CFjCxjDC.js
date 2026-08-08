import { a3 as attr_class, X as attr, a4 as escape_html } from './index-server.js-BTqLeq8m.js';
import { a as assetUrl } from './assets.js-DVYtCFUU.js';

//#region src/lib/components/page-hero.svelte
function Page_hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { hero, size = "md", children } = $$props;
		$$renderer.push(`<section${attr_class(`relative isolate overflow-hidden ${size === "lg" ? "py-32 lg:py-44" : "py-28 lg:py-36"}`)}><img${attr("src", assetUrl(hero.image))}${attr("alt", hero.imageAlt ?? "")} class="enter-kenburns absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="enter-fade absolute inset-0 -z-10 bg-linear-to-b from-black/75 via-black/60 to-black/85" style="--enter-duration: 1400ms"></div> <div class="container mx-auto px-4 text-center sm:px-6">`);
		if (hero.eyebrow) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="enter-down mb-4 text-sm font-semibold tracking-widest text-primary-foreground/90 uppercase" style="--enter-delay: 150ms">${escape_html(hero.eyebrow)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <h1${attr_class(`enter-rise mx-auto max-w-4xl font-heading text-5xl font-bold tracking-tight text-balance text-white ${size === "lg" ? "md:text-7xl" : "md:text-6xl"}`)} style="--enter-delay: 250ms">${escape_html(hero.title)} `);
		if (hero.titleAccent) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="text-primary">${escape_html(hero.titleAccent)}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></h1> `);
		if (hero.tagline) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="enter-up mt-4 text-xl text-white/85" style="--enter-delay: 380ms">${escape_html(hero.tagline)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (hero.body) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="enter-up mx-auto mt-8 max-w-2xl text-lg text-white/80" style="--enter-delay: 520ms">${escape_html(hero.body)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		children?.($$renderer);
		$$renderer.push(`<!----></div></section>`);
	});
}

export { Page_hero as P };
//# sourceMappingURL=page-hero.js-CFjCxjDC.js.map
