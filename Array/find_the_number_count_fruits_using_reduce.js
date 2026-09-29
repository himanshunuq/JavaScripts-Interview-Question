const arr = ["apple", "banana", "apple", "mango", "grapes", "guava", "grapes"];

const re = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(re);
