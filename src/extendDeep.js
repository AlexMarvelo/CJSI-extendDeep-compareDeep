export default function extendDeep(objExtendTo = {}, objExtendFrom = {}) {
  let obj1 = Object.assign({}, objExtendTo);
  let obj2 = Object.assign({}, objExtendFrom);
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') return;
  let key;
  let result = obj1;
  for (key in obj2) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        result[key] = extendDeep(obj1[key], obj2[key]);
        continue;
      }
      if (obj1[key] === obj2[key]) continue;
      result[key] = obj2[key];
    }
  }
  return result;
}
