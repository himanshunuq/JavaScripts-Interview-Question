// example p="welcome to goalmal" here c in first non repeating element

// Method 1
let checkingStringChart = "welcome to work goalmal";

let firt = "";

for (let outer of checkingStringChart) {
  let count = 0;

  for (let inner of checkingStringChart) {
    if (outer == inner) {
      count = count + 1;
    }
  }
  if (count == 1) {
    firt = outer;
    break;
  }
}

console.log(firt);

let stor = {};

for (let st of checkingStringChart) {
  if (st != " ") {
    stor[st] = (stor[st] ?? 0) + 1;
  }
}

console.log("find the frequency of element", stor);

// so we know object will only store only unique key inside the object
let firstLetter = "";

for (let keyCheck in stor) {
  if (stor[keyCheck] == 1) {
    firstLetter = keyCheck;
    break;
  }
}

console.log("second method of key", firstLetter);
