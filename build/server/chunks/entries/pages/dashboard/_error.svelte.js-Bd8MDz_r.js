import { a4 as escape_html, Z as html } from '../../../chunks/index-server.js-BTqLeq8m.js';
import { p as page } from '../../../chunks/state.js-BOdOMYMy.js';
import { B as Button } from '../../../chunks/button.js-bMcXU9rE.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/client.js-6EH1pFcc.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/exports.js-CimAlNvy.js';
import '../../../chunks/routing.js-BriaEEEY.js';
import '../../../chunks/internal2.js-CNE764l1.js';
import '../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../chunks/utils.js-BQTEHVEl.js';

//#region src/routes/dashboard/+error.svelte
function _error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<div class="w-full h-full flex flex-col justify-center items-center"><h1 class="text-red-600 text-5xl">${escape_html(page.status)}</h1> <h3 class="text-red-600 font-head text-2xl">${html(page.error?.message)}</h3> `);
		Button($$renderer, {
			href: "/dashboard",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Back to Dashboard`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _error as default };
//# sourceMappingURL=_error.svelte.js-Bd8MDz_r.js.map
