function balancedBraces(args) {
  const resultArr = [];
  const matchBraces = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (const arg of args) {
    const openBraces = ['(', '{', '['];
    const closeBraces = [')', '}', ']'];
    if (openBraces.includes(arg)) {
      resultArr.push(arg);
    } else if (closeBraces.includes(arg) && arg === matchBraces[resultArr[resultArr.length - 1]]) {
      resultArr.pop();
    }
  }
  return resultArr.length === 0;
}

export {
  balancedBraces,
};
