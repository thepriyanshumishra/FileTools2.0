import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CHHJXvhg.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/B2FR920w.js","_app/immutable/chunks/CXQUeE7d.js","_app/immutable/chunks/B5_f92kn.js","_app/immutable/chunks/ZuJMJxCK.js","_app/immutable/chunks/2lrRA0kY.js","_app/immutable/chunks/Da9x9ds5.js","_app/immutable/chunks/vk4J04_-.js","_app/immutable/chunks/BVvji_Ko.js","_app/immutable/chunks/CTlK7yW2.js","_app/immutable/chunks/Bad5gOXB.js","_app/immutable/chunks/Bz_dL90c.js","_app/immutable/chunks/BGXx31h7.js","_app/immutable/chunks/C9qBMrOu.js"];
export const stylesheets = ["_app/immutable/assets/Tooltip.D-QfNzbh.css","_app/immutable/assets/0.CbWlcZGF.css"];
export const fonts = ["_app/immutable/assets/radio-canada-big-latin-ext-600-normal.DKnEklya.woff2","_app/immutable/assets/radio-canada-big-latin-ext-600-normal.CEpdy69J.woff","_app/immutable/assets/radio-canada-big-latin-600-normal.EEat7m1j.woff2","_app/immutable/assets/radio-canada-big-latin-600-normal.D0gNAP3f.woff","_app/immutable/assets/HostGrotesk-Regular.B7k6tT-N.woff2","_app/immutable/assets/HostGrotesk-Italic.DA4UfojV.woff2","_app/immutable/assets/HostGrotesk-Medium.UmvgMdRS.woff2","_app/immutable/assets/HostGrotesk-MediumItalic.D64yYyMU.woff2","_app/immutable/assets/HostGrotesk-SemiBold.CBlqH9jN.woff2","_app/immutable/assets/HostGrotesk-SemiBoldItalic.C5hKVyOc.woff2"];
