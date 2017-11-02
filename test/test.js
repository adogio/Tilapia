let a = require('../dist/import').default;
let b = require('../dist/array/sort').default;

a.use(b, "aaa");
let c = [4, 2, 3, 1, 7, 1, 3, 8, 2, 0, 1, 2, 9, 6, 2, 8, 2, 4, 9, 1, 6, 5, 2, 1, 2, 4, 6, 32, 4, 42, 423, 42, 34, 24, 4, 43, 4, 3, 33, 4, 2, 2, 2, 12837918];
console.time("m");
c.aaa();
console.timeEnd("m");
console.time("t");
c.sort();
console.timeEnd("t");