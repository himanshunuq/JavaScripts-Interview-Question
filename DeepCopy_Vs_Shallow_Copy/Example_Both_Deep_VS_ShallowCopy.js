// Let create one nested Object

const obj1 = {
  name: "Himanshu",

  nested_Obj: {
    full_Name: "Himanshu Shekhar Mehta",
  },
};

// Shallow Copy

const shallowCopy = Object.assign(obj1);
// const shallowCopy = {...obj1}
//console.log(shallowCopy);

// Now change the original full Name in obj1

const pp = (obj1.nested_Obj.full_Name = "Udesh Kumar Kesari");
// here both are pointing to the same memory reference
console.log("This is shallow copy : ", shallowCopy);
console.log("This is original copy : ", obj1);

// Now Deep Copy

const deepCopy = JSON.stringify(obj1);
console.log(deepCopy); // {"name":"Himanshu","nested_Obj":{"full_Name":"Udesh Kumar Kesari"}}

// now parse this deepCopy

const deepCopy2 = JSON.parse(deepCopy);
console.log(deepCopy2); // { name: 'Himanshu', nested_Obj: { full_Name: 'Udesh Kumar Kesari' } }

// Now try to change in original one

obj1.nested_Obj.full_Name = "Ravi Shankar";
console.log(deepCopy2.nested_Obj.full_Name); // Udesh Kumar Kesari
