const sentence = "My name is himanshu shekhar and i am ready to interview";

const h = sentence.split(" "); // ye array me convert ho gya
const mapCheck = h.map((val) => {
  return val[0].toUpperCase() + val.slice(1);
}); // map operation kar ke upper + slice

const finaljoin = mapCheck.join(" "); // sab ko join kar liya
console.log(finaljoin);

// Method 3

const n = "my name is himanshu shekhar";
const arr = n.split(" ");
console.log(arr);

const my = [];
for (let i of arr) {
  my.push(i.charAt(0).toUpperCase() + i.slice(1));
}

console.log(my);

const final = my.join(" ");
console.log(final);
