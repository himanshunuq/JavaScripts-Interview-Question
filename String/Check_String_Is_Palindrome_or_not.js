// check string is palindrome of now without reverse method

let str = "level";
// console.log(str.length);
let p = "";
for (let i = str.length - 1; i >= 0; i--) {
  p = p + str[i];
}
// console.log(p);

if (str === p) {
  console.log("sahi hai");
} else {
  console.log("nahi hai re bhai pali");
}
