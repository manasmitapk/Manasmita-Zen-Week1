
//-------------- .Chunk ------------/
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

//------------- .sum -------------/
const sum = (arr) => arr.reduce((total, item) => total += item, 0);


//-------------  find -----------/
const find = (arr) => arr.filter(i => i%4 == 0);
var find_op = (find([1, 2, 3, 4, 5]));
console.log("Find = " +find_op);

//-------------  reduce -----------/
const reduce = (arr) => arr.reduce((acc, item) => acc+= item, 0);

//-------------  filter -----------/
const filter = (arr) => arr.filter(i => i%2 == 0);
