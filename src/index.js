import extendDeep from './extendDeep.js';
import compareDeep from './compareDeep.js';

import { obj1, obj2 } from './test1.js';

console.log('Test:');
console.log(' obj1: '); console.dir(obj1);
console.log(' obj2: '); console.dir(obj2);
console.log('\n');

console.log('extendDeep:');
console.log(' obj1: '); console.dir(extendDeep(obj1, obj2));
console.log('\n');

console.log(`compareDeep:\n ${compareDeep(obj1, obj2)}`);
console.log('\n');
