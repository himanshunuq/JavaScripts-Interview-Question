const sentence = "My name is himanshu shekhar and i am ready to interview";

const h = sentence.split(" "); // ye array me convert ho gya
const mapCheck = h.map((val) => {
  return val[0].toUpperCase() + val.slice(1);
}); // map operation kar ke upper + slice

const finaljoin = mapCheck.join(" "); // sab ko join kar liya
console.log(finaljoin);
