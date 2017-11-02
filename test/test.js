let a = require('../dist/import').default;
let b = require('../dist/array/sort').default;

a.use(b, "aaa");
let c = [4, 2, 3, 1, 6, 2, 8, 2, 4, 9, 1, 6];

console.log(c.aaa());