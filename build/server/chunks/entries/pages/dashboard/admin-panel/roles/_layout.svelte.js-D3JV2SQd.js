import { p as page } from '../../../../../chunks/state.js-BOdOMYMy.js';
import { P as Plus } from '../../../../../chunks/plus.js-D_QDBo_j.js';
import { S as Sheet } from '../../../../../chunks/sheet.js-DaIXYGto.js';
import { B as Button } from '../../../../../chunks/button.js-bMcXU9rE.js';
import '../../../../../chunks/index-server.js-BTqLeq8m.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/client.js-6EH1pFcc.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../../chunks/internal2.js-CNE764l1.js';
import '../../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../../chunks/utils.js-BQTEHVEl.js';
import '../../../../../chunks/Icon.js-CT_MUOCa.js';

//#region src/routes/dashboard/admin-panel/roles/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		$$renderer.push(`<div class="mb-8 flex flex-row items-center justify-start gap-2">`);
		Button($$renderer, {
			href: "/dashboard/admin-panel/roles",
			variant: page.url.pathname === "/dashboard/admin-panel/roles" ? "default" : "outline",
			children: ($$renderer) => {
				Sheet($$renderer, {});
				$$renderer.push(`<!----> All Roles`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			href: "/dashboard/admin-panel/roles/add-roles",
			variant: page.url.pathname === "/dashboard/admin-panel/roles/add-roles" ? "default" : "outline",
			children: ($$renderer) => {
				Plus($$renderer, {});
				$$renderer.push(`<!----> Add Roles`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div> `);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte.js-D3JV2SQd.js.map
