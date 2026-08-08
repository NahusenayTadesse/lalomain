const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["coffee.webp","farm.webp","hero.webp","image1.webp","image10.webp","image11.webp","image12.webp","image13.webp","image14.webp","image2.webp","image3.webp","image4.webp","image5.webp","image6.webp","image7.webp","image8.webp","image9.webp","logo-icon.webp","logo.webp","robots.txt"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.U4FNj7Dl.js",app:"_app/immutable/entry/app.KpOxXdry.js",imports:["_app/immutable/entry/start.U4FNj7Dl.js","_app/immutable/chunks/C5V6TpUe.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/entry/app.KpOxXdry.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/chunks/HclGiUj8.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js-BUL4einV.js')),
			__memo(() => import('./nodes/1.js-UEkzV_kH.js')),
			__memo(() => import('./nodes/2.js-1j_ti9MQ.js')),
			__memo(() => import('./nodes/3.js-MOGPal0a.js')),
			__memo(() => import('./nodes/4.js-Dl6PKLSX.js')),
			__memo(() => import('./nodes/5.js-DeVjgw6c.js')),
			__memo(() => import('./nodes/6.js-DP6CMn9f.js')),
			__memo(() => import('./nodes/7.js-BOlnc7ME.js')),
			__memo(() => import('./nodes/8.js-DzNnyk2T.js')),
			__memo(() => import('./nodes/9.js-52h1Pz5N.js')),
			__memo(() => import('./nodes/10.js-BPCL0gvs.js')),
			__memo(() => import('./nodes/11.js-qMIa5KXM.js')),
			__memo(() => import('./nodes/12.js-DOjofNcd.js')),
			__memo(() => import('./nodes/13.js-DhN5oqM3.js')),
			__memo(() => import('./nodes/14.js-DALhestC.js')),
			__memo(() => import('./nodes/15.js-D4C9PVGK.js')),
			__memo(() => import('./nodes/16.js-CvhJfAyv.js')),
			__memo(() => import('./nodes/17.js-KnI2cyUU.js')),
			__memo(() => import('./nodes/18.js-CoFtS9KG.js')),
			__memo(() => import('./nodes/19.js-BcNsnedG.js')),
			__memo(() => import('./nodes/20.js-DjFhHPd8.js')),
			__memo(() => import('./nodes/21.js-fhjunYAL.js')),
			__memo(() => import('./nodes/22.js-B7qK8GPZ.js')),
			__memo(() => import('./nodes/23.js-y-cK4Onr.js')),
			__memo(() => import('./nodes/24.js-EdEWYJPh.js')),
			__memo(() => import('./nodes/25.js-Cd-saXtA.js')),
			__memo(() => import('./nodes/26.js-C9eG9-wg.js')),
			__memo(() => import('./nodes/27.js-D-TAa9Fz.js')),
			__memo(() => import('./nodes/28.js-CbtI_UEE.js')),
			__memo(() => import('./nodes/29.js-D8Xy8RED.js')),
			__memo(() => import('./nodes/30.js-D_uk8uY-.js')),
			__memo(() => import('./nodes/31.js-BIEJxdTi.js')),
			__memo(() => import('./nodes/32.js-DZJBpVj7.js')),
			__memo(() => import('./nodes/33.js-1koi2EBA.js')),
			__memo(() => import('./nodes/34.js-DN4jdFK7.js')),
			__memo(() => import('./nodes/35.js-5GyawV_5.js')),
			__memo(() => import('./nodes/36.js-DFUGei_v.js')),
			__memo(() => import('./nodes/37.js-DZxVjgKs.js')),
			__memo(() => import('./nodes/38.js-C7VrlCVf.js')),
			__memo(() => import('./nodes/39.js-DszWxXKB.js')),
			__memo(() => import('./nodes/40.js-ByhARg5x.js')),
			__memo(() => import('./nodes/41.js-BBavZFp0.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel",
				pattern: /^\/dashboard\/admin-panel\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/roles",
				pattern: /^\/dashboard\/admin-panel\/roles\/?$/,
				params: [],
				page: { layouts: [0,2,4,5,], errors: [1,3,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/roles/add-roles",
				pattern: /^\/dashboard\/admin-panel\/roles\/add-roles\/?$/,
				params: [],
				page: { layouts: [0,2,4,5,], errors: [1,3,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/roles/[id]",
				pattern: /^\/dashboard\/admin-panel\/roles\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,5,], errors: [1,3,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/users",
				pattern: /^\/dashboard\/admin-panel\/users\/?$/,
				params: [],
				page: { layouts: [0,2,4,6,], errors: [1,3,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/users/add-users",
				pattern: /^\/dashboard\/admin-panel\/users\/add-users\/?$/,
				params: [],
				page: { layouts: [0,2,4,6,], errors: [1,3,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/users/[id]",
				pattern: /^\/dashboard\/admin-panel\/users\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,6,], errors: [1,3,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/dashboard/content/coffee-products",
				pattern: /^\/dashboard\/content\/coffee-products\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/dashboard/content/coffee-regions",
				pattern: /^\/dashboard\/content\/coffee-regions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/dashboard/content/export-markets",
				pattern: /^\/dashboard\/content\/export-markets\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/dashboard/content/faqs",
				pattern: /^\/dashboard\/content\/faqs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/dashboard/content/farms",
				pattern: /^\/dashboard\/content\/farms\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/dashboard/content/gallery",
				pattern: /^\/dashboard\/content\/gallery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/dashboard/content/heroes",
				pattern: /^\/dashboard\/content\/heroes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/dashboard/content/milestones",
				pattern: /^\/dashboard\/content\/milestones\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/dashboard/content/partners",
				pattern: /^\/dashboard\/content\/partners\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/dashboard/content/settings",
				pattern: /^\/dashboard\/content\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/dashboard/content/sub-regions",
				pattern: /^\/dashboard\/content\/sub-regions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/dashboard/content/traceability",
				pattern: /^\/dashboard\/content\/traceability\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/dashboard/content/value-props",
				pattern: /^\/dashboard\/content\/value-props\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/dashboard/content/ventures",
				pattern: /^\/dashboard\/content\/ventures\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/dashboard/messages",
				pattern: /^\/dashboard\/messages\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/dashboard/testimonials",
				pattern: /^\/dashboard\/testimonials\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/demo",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/demo/better-auth",
				pattern: /^\/demo\/better-auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/demo/better-auth/login",
				pattern: /^\/demo\/better-auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/files/[name=filename]",
				pattern: /^\/files\/([^/]+?)\/?$/,
				params: [{"name":"name","matcher":"filename","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/files/_name_filename_/_server.ts.js-D5DdIEYQ.js'))
			},
			{
				id: "/forgot-password",
				pattern: /^\/forgot-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/our-coffee",
				pattern: /^\/our-coffee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/reset-password",
				pattern: /^\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/ventures",
				pattern: /^\/ventures\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			const { match: filename } = await import ('./entries/matchers/filename.js-tAFpakQ_.js');
			return { filename };
		},
		server_assets: {}
	}
}
})();

export { manifest as m };
//# sourceMappingURL=manifest.js-C1kQ8VUE.js.map
