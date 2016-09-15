export default function extendDeep(obj1 = {}, obj2 = {}) {
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') return;
  let key;
  for (key in obj2) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        extendDeep(obj1[key], obj2[key]);
        continue;
      }
      if (obj1[key] === obj2[key]) continue;
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}
