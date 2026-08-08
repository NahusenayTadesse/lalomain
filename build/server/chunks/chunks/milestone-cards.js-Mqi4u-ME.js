import { a3 as attr_class, V as ensure_array_like, a4 as escape_html, a2 as stringify } from './index-server.js-BTqLeq8m.js';

//#region src/lib/components/milestone-cards.svelte
function Milestone_cards($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { milestones, columns = "md:grid-cols-3", highlightLast = false } = $$props;
		$$renderer.push(`<div${attr_class(`grid gap-6 ${stringify(columns)}`)}><!--[-->`);
		const each_array = ensure_array_like(milestones);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let stage = each_array[i];
			$$renderer.push(`<div${attr_class(`lift relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg ${highlightLast && i === milestones.length - 1 ? "ring-2 ring-primary/50" : ""}`)}><div class="text-sm font-bold text-primary">${escape_html(stage.period)}</div> <h3 class="mt-2 text-xl font-semibold">${escape_html(stage.title)}</h3> <p class="mt-3 text-sm text-muted-foreground">${escape_html(stage.description)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}

export { Milestone_cards as M };
//# sourceMappingURL=milestone-cards.js-Mqi4u-ME.js.map
