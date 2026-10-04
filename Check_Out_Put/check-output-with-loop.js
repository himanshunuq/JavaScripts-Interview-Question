let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  arr[4] = i;
}

console.log(arr);

// [ 1, 2, 3, 4, 4 ]
