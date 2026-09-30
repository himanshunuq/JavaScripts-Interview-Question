const arr = [1, 2, 3, 4];

let sum = 0;

for (let i of arr) {
  sum = sum + i;
}

console.log(sum);

const j = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(j);
