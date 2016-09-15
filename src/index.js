import extendDeep from './extendDeep.js';
import compareDeep from './compareDeep.js';

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
};

const obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

console.log(extendDeep(obj1, obj2));
console.log(compareDeep(obj1, obj2));
