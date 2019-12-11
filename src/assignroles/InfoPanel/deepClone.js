export const deepClone = arrayOrObject => {
  let value, key;
  const clone = Array.isArray(arrayOrObject) ? [] : {};
  if (Array.isArray(arrayOrObject)) {
    for (const obj of arrayOrObject) {
      clone.push(deepClone(obj));
    }
  } else {
    for (key in arrayOrObject) {
      value = arrayOrObject[key];
      clone[key] = value;
    }
  }
  return clone;
};
