import { a3 as attr_class, U as clsx$1, a4 as escape_html } from './index-server.js-BTqLeq8m.js';

//#region src/lib/components/section-heading.svelte
function Section_heading($$renderer, $$props) {
	let { title, subtitle, align = "center", rule = false } = $$props;
	$$renderer.push(`<div${attr_class(clsx$1(align === "center" ? "mx-auto max-w-2xl text-center" : ""))}><h2 class="font-heading text-3xl font-bold md:text-4xl">${escape_html(title)}</h2> `);
	if (rule) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="reveal-rule mt-4 h-px w-16 bg-primary"></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> `);
	if (subtitle) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p class="mt-4 text-muted-foreground">${escape_html(subtitle)}</p>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div>`);
}

export { Section_heading as S };
//# sourceMappingURL=section-heading.js-fpGDQmSC.js.map
