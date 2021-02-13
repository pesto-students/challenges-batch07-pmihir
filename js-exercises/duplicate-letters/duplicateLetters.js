/* eslint-disable no-plusplus */
function duplicateLetters(...args) {
  const inputStr = args[0];
  const valueCount = {};
  let maxValue = 0;
  for (let i = 0; i < inputStr.length; i++) {
    const key = inputStr[i];
    if (!valueCount[key]) {
      valueCount[key] = 0;
    }
    valueCount[key]++;
    if (valueCount[key] > maxValue) {
      maxValue = valueCount[key];
    }
  }
  return maxValue === 1 ? false : maxValue;
}

export {
  duplicateLetters,
};
