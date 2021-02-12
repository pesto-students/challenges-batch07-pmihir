function rot13(str) {
  let resultStr = '';
  for (const n of str) {
    resultStr += n.replace(/[A-Za-z]/g, (c) => String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13)));
  }
  return resultStr;
}

export {
  rot13,
};
