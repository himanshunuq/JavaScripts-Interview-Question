const arr = [1, 2, 2, 3, 1];
// output = [1,2,3]

// method 1

const arr2 = [...new Set(arr)];
console.log(arr2);

// method 2

const myArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!myArr.includes(arr[i])) {
    myArr.push(arr[i]);
  }
}

console.log(myArr);
