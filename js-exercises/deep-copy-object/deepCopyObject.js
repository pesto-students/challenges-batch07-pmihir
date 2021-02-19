const deepCopyObject = obj => {
  if (obj === null || typeof (obj) !== 'object') return obj;
  let temp;
  if (obj instanceof Date) temp = new obj.constructor();
  else temp = obj.constructor();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) temp[key] = deepCopyObject(obj[key]);
  }
  return temp;
};

export { deepCopyObject };
