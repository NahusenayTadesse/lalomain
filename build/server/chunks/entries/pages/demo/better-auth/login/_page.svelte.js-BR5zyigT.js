import { a4 as escape_html } from '../../../../../chunks/index-server.js-BTqLeq8m.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/client.js-6EH1pFcc.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../../chunks/internal2.js-CNE764l1.js';
import '../../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../../chunks/utils.js-BQTEHVEl.js';

//#region src/routes/demo/better-auth/login/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { form } = $$props;
		$$renderer.push(`<h1>Login</h1> <form method="post" action="?/signInEmail"><label>Email <input type="email" name="email"/></label> <label>Password <input type="password" name="password"/></label> <label>Name (for registration) <input name="name"/></label> <button>Login</button> <button formaction="?/signUpEmail">Register</button></form> <p style="color: red">${escape_html(form?.message ?? "")}</p>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BR5zyigT.js.map
