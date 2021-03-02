const limitFunctionCallCount = (fn, noOfTimesTobeInvoke) => {
  let counter = noOfTimesTobeInvoke;
  return function limitFunction(...args) {
    if (counter === 0) return null;
    counter -= 1;
    return fn(...args);
  };
};

export {
  limitFunctionCallCount,
};
