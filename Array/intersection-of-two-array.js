// intersection of two array

const a = [1, 2, 3];
const b = [2, 3, 4];

// output [2,3]

// method 1

const c = [];
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) {
      c.push(b[j]);
    }
  }
}

console.log(c);

// method 2

const p = [1, 2, 5];
const q = [5, 2, 4];

const j = p.filter((currOfp) => q.includes(currOfp));
console.log(j);
