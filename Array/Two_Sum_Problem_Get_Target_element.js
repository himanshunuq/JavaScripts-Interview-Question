// sum only two elemet find the target elment

// arr=[2,7,11,15]

// output target =18

const arr = [2, 7, 11, 15];

const target = 18;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(" mil gaya with index number ye dono ", i, j);
    }
  }
}
