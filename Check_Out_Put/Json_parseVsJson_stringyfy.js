const obj = {
  name: "Himanshu",
  age: 24,
  add: "blr",
  empId: undefined,
};

console.log(obj);

const obj2 = JSON.stringify(obj);
console.warn(obj2); // Note here we stringify will remove undefined key value;

console.log(JSON.parse(obj2));

/*
output
{ name: 'Himanshu', age: 24, add: 'blr', empId: undefined }
{"name":"Himanshu","age":24,"add":"blr"}
{ name: 'Himanshu', age: 24, add: 'blr' }
*/
