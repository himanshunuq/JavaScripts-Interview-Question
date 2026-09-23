const arr = [122, 13, 144, 15];

// this is for sorting the array
const p = arr.sort((a, b) => {
  return b - a; // [ 15, 14, 13, 12 ] and (a-b) [ 12, 13, 14, 15 ]
});

console.log(p);

// for checking the element is sorted or not ?
let isSorted = true;
const arr2 = [12, 13, 14, 15, 16];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < arr2[i - 1]) {
    isSorted = false;
  }
}
console.log(isSorted);
