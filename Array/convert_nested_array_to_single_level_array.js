const arr = [1, [2, [3, 4]]];

const l1 = arr.flat(2); // Infinity
console.log(l1);

//[ 1, 2, 3, 4 ]

// Method 2
function flatArray(arr5) {
  const res = [];

  for (let i of arr5) {
    if (Array.isArray(i)) {
      res.push(...flatArray(i));
    } else {
      res.push(i);
    }
  }

  return res;
}

const arr5 = [1, [2, [3, 4]]];

console.log(flatArray(arr5));
