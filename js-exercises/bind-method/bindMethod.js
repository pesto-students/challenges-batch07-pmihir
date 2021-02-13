function bind(...args) {
  const fn = args[0];
  const obj = args[1];
  return (val) => fn.call(obj, val);
}
module.exports = { bind };
