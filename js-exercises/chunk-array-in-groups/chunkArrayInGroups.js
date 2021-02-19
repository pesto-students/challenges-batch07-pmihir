/* eslint-disable no-param-reassign */
function chunkArrayInGroups(array, chunkSize) {
  return array.reduce((resultArray, input, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
    resultArray[chunkIndex].push(input);
    return resultArray;
  }, []);
}

export {
  chunkArrayInGroups,
};
