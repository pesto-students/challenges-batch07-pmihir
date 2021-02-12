function sumFibs(num) {
  let sum = 2;
  let a = 1;
  let b = 1;
  let fibResult = 2;
  for (let i = 2; i < num; i += 1) {
    sum = a + b;
    a = b;
    b = sum;
    fibResult += (sum % 2 !== 0 && sum < num) ? sum : 0;
  }
  return fibResult;
}

function cacheFunction(fn) {
  const cacheValue = {};
  return (n) => {
    if (n in cacheValue) {
      return cacheValue[n];
    }
    cacheValue[n] = fn(n);
    return cacheValue[n];
  };
}

export { sumFibs, cacheFunction };
