import { _ as spread_props } from './index-server.js-BTqLeq8m.js';
import { I as Icon } from './Icon.js-CT_MUOCa.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/globe.svelte
function Globe($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "globe" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "10"
			}],
			["path", { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
			["path", { "d": "M2 12h20" }]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/leaf.svelte
function Leaf($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "leaf" },
		props,
		{ iconNode: [["path", { "d": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }], ["path", { "d": "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]] }
	]));
}

export { Globe as G, Leaf as L };
//# sourceMappingURL=leaf.js-dR--hGy3.js.map
