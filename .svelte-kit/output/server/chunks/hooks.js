import { d as deLocalizeUrl } from "./runtime.js";
const reroute = (request) => {
  return deLocalizeUrl(request.url).pathname;
};
export {
  reroute
};
