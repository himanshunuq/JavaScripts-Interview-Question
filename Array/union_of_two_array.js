// Union of Two Array

const a = [1, 2];
const b = [2, 3, 1];

const c = [...new Set([...a, ...b])];
console.log(c); //[ 1, 2, 3 ]

// method 2

const d = [...a, ...b];
const newArray = [];

console.log(d); // [ 1, 2, 2, 3 ]

for (let j of d) {
  if (!newArray.includes(j)) {
    newArray.push(j);
  }
}

console.log("remove dublicate", newArray);
