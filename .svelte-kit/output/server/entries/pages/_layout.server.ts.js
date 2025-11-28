const load = () => {
  const isAprilFools = (/* @__PURE__ */ new Date()).getDate() === 1 && (/* @__PURE__ */ new Date()).getMonth() === 3;
  return { isAprilFools };
};
export {
  load
};
