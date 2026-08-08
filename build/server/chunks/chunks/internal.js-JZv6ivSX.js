//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/runtime/app/paths/internal/server.js
var base = "";
var assets = base;
var app_dir = "_app";
var initial = {
	base,
	assets
};
/**
* `base` could be overridden during rendering to be relative;
* this one's the original non-relative base path
*/
var initial_base = initial.base;
/**
* @param {{ base: string, assets: string }} paths
*/
function override(paths) {
	base = paths.base;
	assets = paths.assets;
}
function reset() {
	base = initial.base;
	assets = initial.assets;
}
var building = false;

export { assets as a, base as b, app_dir as c, building as d, initial_base as i, override as o, reset as r };
//# sourceMappingURL=internal.js-JZv6ivSX.js.map
