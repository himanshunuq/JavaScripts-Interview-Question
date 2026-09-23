const arr = [12, 14, 15, 16, 18];

// method using build in using sort it sort and then reverse
const a = arr.sort((a, b) => b - a);
console.log(a);

// using reverse method
const arr2 = [12, 14, 15, 16, 18];
const b = [...arr2].reverse();
console.log(b);

// using for loop
const arr3 = [122, 144, 155, 166, 188];
const emptyArr = [];

for (let i = arr3.length - 1; i >= 0; i--) {
  emptyArr.push(arr3[i]);
}

console.log(emptyArr);
