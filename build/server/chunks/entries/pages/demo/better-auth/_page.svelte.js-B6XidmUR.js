import { a4 as escape_html } from '../../../../chunks/index-server.js-BTqLeq8m.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/client.js-6EH1pFcc.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../chunks/internal2.js-CNE764l1.js';
import '../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../chunks/utils.js-BQTEHVEl.js';

//#region src/routes/demo/better-auth/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<h1>Hi, ${escape_html(data.user.name)}!</h1> <p>Your user ID is ${escape_html(data.user.id)}.</p> <form method="post" action="?/signOut"><button>Sign out</button></form>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-B6XidmUR.js.map
