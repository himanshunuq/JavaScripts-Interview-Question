// to eske output pe dyan do ye shallow hai

const obj2 = Object.freeze({
  user: {
    name: "Himanshu",
  },
});

obj2.user.name = "Rama Rama";

console.log(obj2);

// freeze follow the shallow copy
