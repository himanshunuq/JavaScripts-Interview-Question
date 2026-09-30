const messyArray = [0, 1, false, 2, "", 3, null, undefined, 4];

const newarr = []; // [ 1, 2, 3, 4 ]

for (let n of messyArray) {
  if (n) {
    newarr.push(n);
  }
}

console.log(newarr);

// method 2
const other = messyArray.filter(Boolean);
console.log(other);
