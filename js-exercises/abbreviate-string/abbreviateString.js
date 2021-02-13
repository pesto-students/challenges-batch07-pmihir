function abbreviateString(str) {
  if (typeof str === 'string') {
    const tempAbbrivatedStringArray = str.split(' ');
    const tempAbbrivatedArrayLength = tempAbbrivatedStringArray.length;
    return `${tempAbbrivatedStringArray[0]} ${tempAbbrivatedStringArray[tempAbbrivatedArrayLength - 1][0].toUpperCase()}.`;
  }
  return 'throws error on invalid parameters';
}

export { abbreviateString };
