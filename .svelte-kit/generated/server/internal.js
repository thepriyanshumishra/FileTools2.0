
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUB_',
	env_private_prefix: 'PRI_',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"%lang%\">\r\n\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"" + assets + "/favicon.svg\" />\r\n\t).matches;\r\n\tconsole.log(\r\n\t`Theme: ${theme || \"N/A\"}, prefers dark: ${prefersDark}`,\r\n\t);\r\n\r\n\tif (theme !== \"light\" && theme !== \"dark\") {\r\n\tconsole.log(\"Invalid theme, setting to default\");\r\n\ttheme = prefersDark ? \"dark\" : \"light\";\r\n\tlocalStorage.setItem(\"theme\", theme);\r\n\t}\r\n\r\n\tconsole.log(`Applying theme: ${theme}`);\r\n\tdocument.documentElement.classList.add(theme);\r\n\r\n\t// Lock dark reader if it's set to dark mode\r\n\tif (theme === \"dark\") {\r\n\t< !doctype html>\r\n\t\t<html lang=\"%lang%\">\r\n\r\n\t\t<head>\r\n\t\t\t<meta charset=\"utf-8\" />\r\n\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"" + assets + "/favicon.svg\" />\r\n\t\t\t<link rel=\"alternate icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t\t<link rel=\"apple-touch-icon\" href=\"" + assets + "/favicon.png\" />\r\n\r\n\t\t\t<link rel=\"apple-touch-startup-image\" href=\"" + assets + "/lettermark.jpg\" />\r\n\t\t\t<meta name=\"mobile-web-app-capable\" content=\"yes\" />\r\n\t\t\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\r\n\t\t\t<meta name=\"description\"\r\n\t\t\t\tcontent=\"Free, open-source, and private file converter. Convert images, audio, and documents locally on your device. No file size limits, no ads.\" />\r\n\t\t\t<meta name=\"keywords\"\r\n\t\t\t\tcontent=\"file converter, image converter, audio converter, document converter, privacy focused, open source, local conversion, webassembly, ffmpeg, imagemagick, pandoc\" />\r\n\t\t\t<meta name=\"author\" content=\"FileTools Team\" />\r\n\t\t\t<meta name=\"theme-color\" content=\"#ec4899\" />\r\n\r\n\t\t\t<!-- Open Graph / Facebook -->\r\n\t\t\t<meta property=\"og:type\" content=\"website\" />\r\n\t\t\t<meta property=\"og:url\" content=\"https://filetools.app/\" />\r\n\t\t\t<meta property=\"og:title\" content=\"FileTools - Private & Free File Converter\" />\r\n\t\t\t<meta property=\"og:description\"\r\n\t\t\t\tcontent=\"Convert files locally on your device with FileTools. No ads, no tracking, no file size limits. Supports images, audio, and documents.\" />\r\n\t\t\t<meta property=\"og:image\" content=\"https://filetools.app/banner.png\" />\r\n\r\n\t\t\t<!-- Twitter -->\r\n\t\t\t<meta property=\"twitter:card\" content=\"summary_large_image\" />\r\n\t\t\t<meta property=\"twitter:url\" content=\"https://filetools.app/\" />\r\n\t\t\t<meta property=\"twitter:title\" content=\"FileTools - Private & Free File Converter\" />\r\n\t\t\t<meta property=\"twitter:description\"\r\n\t\t\t\tcontent=\"Convert files locally on your device with FileTools. No ads, no tracking, no file size limits.\" />\r\n\t\t\t<meta property=\"twitter:image\" content=\"https://filetools.app/banner.png\" />\r\n\r\n\t\t\t<link rel=\"canonical\" href=\"https://filetools.app/\" />\r\n\t\t\t<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\" />\r\n\r\n\t\t\t" + head + "\r\n\t\t\t<script>\r\n\t\t\t\t(function () {\r\n\t\t\t\t\t// Apply theme before DOM is loaded\r\n\t\t\t\t\tlet theme = localStorage.getItem(\"theme\");\r\n\t\t\t\t\tconst prefersDark = window.matchMedia(\r\n\t\t\t\t\t\t\"(prefers-color-scheme: dark)\",\r\n\t\t\t\t\t).matches;\r\n\t\t\t\t\tconsole.log(\r\n\t\t\t\t\t\t`Theme: ${theme || \"N/A\"}, prefers dark: ${prefersDark}`,\r\n\t\t\t\t\t);\r\n\r\n\t\t\t\t\tif (theme !== \"light\" && theme !== \"dark\") {\r\n\t\t\t\t\t\tconsole.log(\"Invalid theme, setting to default\");\r\n\t\t\t\t\t\ttheme = prefersDark ? \"dark\" : \"light\";\r\n\t\t\t\t\t\tlocalStorage.setItem(\"theme\", theme);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tconsole.log(`Applying theme: ${theme}`);\r\n\t\t\t\t\tdocument.documentElement.classList.add(theme);\r\n\r\n\t\t\t\t\t// Lock dark reader if it's set to dark mode\r\n\t\t\t\t\tif (theme === \"dark\") {\r\n\t\t\t\t\t\tconst lock = document.createElement(\"meta\");\r\n\t\t\t\t\t\tlock.name = \"darkreader-lock\";\r\n\t\t\t\t\t\tdocument.head.appendChild(lock);\r\n\t\t\t\t\t}\r\n\t\t\t\t})();\r\n\t\t\t</script>\r\n\t\t\t<script type=\"application/ld+json\">\r\n\t\t\t{\r\n\t\t\t\t\"@context\": \"https://schema.org\",\r\n\t\t\t\t\"@type\": \"SoftwareApplication\",\r\n\t\t\t\t\"name\": \"FileTools\",\r\n\t\t\t\t\"applicationCategory\": \"UtilitiesApplication\",\r\n\t\t\t\t\"operatingSystem\": \"Web\",\r\n\t\t\t\t\"offers\": {\r\n\t\t\t\t\t\"@type\": \"Offer\",\r\n\t\t\t\t\t\"price\": \"0\",\r\n\t\t\t\t\t\"priceCurrency\": \"USD\"\r\n\t\t\t\t},\r\n\t\t\t\t\"description\": \"Free, open-source, and private file converter. Convert images, audio, and documents locally on your device.\",\r\n\t\t\t\t\"author\": {\r\n\t\t\t\t\t\"@type\": \"Organization\",\r\n\t\t\t\t\t\"name\": \"FileTools Team\",\r\n\t\t\t\t\t\"url\": \"https://filetools.app\"\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</script>\r\n\t\t</head>\r\n\r\n<body data-sveltekit-preload-data=\"hover\">\r\n\t<div style=\"display: contents\">" + body + "</div>\r\n</body>\r\n\r\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "7of4qb"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	({ handle, handleFetch, handleError, handleValidationError, init } = await import("../../../src/hooks.server.ts"));

	let reroute;
	let transport;
	({ reroute, transport } = await import("../../../src/hooks.ts"));

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
