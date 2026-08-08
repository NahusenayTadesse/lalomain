import { a4 as escape_html } from '../../chunks/index-server.js-BTqLeq8m.js';
import { p as page } from '../../chunks/state.js-BOdOMYMy.js';
import '../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../chunks/uneval.js-CatQk29t.js';
import '../../chunks/client.js-6EH1pFcc.js';
import '../../chunks/shared.js-4SMYzfPQ.js';
import '../../chunks/exports.js-CimAlNvy.js';
import '../../chunks/routing.js-BriaEEEY.js';
import '../../chunks/internal2.js-CNE764l1.js';
import '../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../chunks/utils.js-BQTEHVEl.js';

//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}

export { Error as default };
//# sourceMappingURL=error.svelte.js-BWuc4X0T.js.map
