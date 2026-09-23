const obj = {
  name: "Himanshu",
  display() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  },
};

obj.display();

// if use function then it will return undefined

/*

const obj = {
  name: "Himanshu",
  display() {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  },
};

obj.display();

output undefine
*/
