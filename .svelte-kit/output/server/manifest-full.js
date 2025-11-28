export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["banner.png","favicon.png","lettermark.jpg","manifest.json","pandoc.wasm","robots.txt","sitemap.xml","sw.js"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".json":"application/json",".wasm":"application/wasm",".txt":"text/plain",".xml":"text/xml",".js":"text/javascript"},
	_: {
		client: {start:"_app/immutable/entry/start.DsBd8M_H.js",app:"_app/immutable/entry/app.BJw4l1ZQ.js",imports:["_app/immutable/entry/start.DsBd8M_H.js","_app/immutable/chunks/Da9x9ds5.js","_app/immutable/chunks/B2FR920w.js","_app/immutable/entry/app.BJw4l1ZQ.js","_app/immutable/chunks/CXQUeE7d.js","_app/immutable/chunks/B2FR920w.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/2lrRA0kY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/convert",
				pattern: /^\/convert\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
