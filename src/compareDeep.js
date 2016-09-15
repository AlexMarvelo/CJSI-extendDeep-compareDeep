function compareWith(obj1 = {}, obj2 = {}) {
  let key;
  for (key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        if (compareWith(obj1[key], obj2[key]) === false ||
            compareWith(obj2[key], obj1[key]) === false) {
          return false;
        }
        continue;
      }
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
}

export default function compareDeep(obj1 = {}, obj2 = {}) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  return compareWith(obj1, obj2) && compareWith(obj2, obj1);
}
