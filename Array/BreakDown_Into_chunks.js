const arr = [1, 2, 3, 4, 5];
const size = 2;

// output : [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
const arr2 = [];

for (let i = 0; i < arr.length; i = i + size) {
  arr2.push(arr.slice(i, i + size));
}

console.log(arr2);
