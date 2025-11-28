import { o as overwriteServerAsyncLocalStorage, a as shouldRedirect, b as strategy, d as deLocalizeUrl, c as serverAsyncLocalStorage } from "./runtime.js";
async function paraglideMiddleware(request, resolve, callbacks) {
  if (!serverAsyncLocalStorage) {
    const { AsyncLocalStorage } = await import("async_hooks");
    overwriteServerAsyncLocalStorage(new AsyncLocalStorage());
  } else if (!serverAsyncLocalStorage) {
    overwriteServerAsyncLocalStorage(createMockAsyncLocalStorage());
  }
  const decision = await shouldRedirect({ request });
  const locale = decision.locale;
  const origin = new URL(request.url).origin;
  if (request.headers.get("Sec-Fetch-Dest") === "document" && decision.shouldRedirect && decision.redirectUrl) {
    const headers = {};
    if (strategy.includes("preferredLanguage")) {
      headers["Vary"] = "Accept-Language";
    }
    const response2 = new Response(null, {
      status: 307,
      headers: {
        Location: decision.redirectUrl.href,
        ...headers
      }
    });
    return response2;
  }
  const newRequest = strategy.includes("url") ? new Request(deLocalizeUrl(request.url), request) : (
    // need to create a new request object because some metaframeworks (nextjs!) throw otherwise
    // https://github.com/opral/inlang-paraglide-js/issues/411
    new Request(request)
  );
  const messageCalls = /* @__PURE__ */ new Set();
  const response = await serverAsyncLocalStorage?.run({ locale, origin, messageCalls }, () => resolve({ locale, request: newRequest }));
  return response;
}
function createMockAsyncLocalStorage() {
  let currentStore = void 0;
  return {
    getStore() {
      return currentStore;
    },
    async run(store, callback) {
      currentStore = store;
      try {
        return await callback();
      } finally {
        currentStore = void 0;
      }
    }
  };
}
const paraglideHandle = ({ event, resolve }) => paraglideMiddleware(
  event.request,
  ({ request: localizedRequest, locale }) => {
    event.request = localizedRequest;
    return resolve(event, {
      transformPageChunk: ({ html }) => {
        return html.replace("%lang%", locale);
      }
    });
  }
);
const handle = paraglideHandle;
export {
  handle
};
