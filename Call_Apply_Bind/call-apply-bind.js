const obj1 = {
  name: "Himanshu ",
  age: 27,
  designation: "Associate Software Engineer",
};

function displayDetails(city, state) {
  console.log(`${this.name} and age is ${this.age} and : ${city}, ${state} `);
}
const obj2 = {
  name: "Udesh ",
  age: 24,
  designation: "UPSC Asspirents",
};

// call
displayDetails.call(obj1, "Ranchi", "Jharkhand");
displayDetails.call(obj2, "Rabadganj", "Uttar Pradesh");

// apply
displayDetails.apply(obj1, ["applyRanchi", "applyJharkhand"]);
displayDetails.apply(obj2, ["applyBareli", "applyUttarPradesh"]);

// bind
const demoBind = displayDetails.call(obj1, "Bind+Patan", "Bihar-1900's");
demoBind;
