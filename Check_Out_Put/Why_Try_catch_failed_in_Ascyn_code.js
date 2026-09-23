const check = async () => {
  try {
    setTimeout(() => {
      throw new Error("boom");
    }, 0);
  } catch (error) {
    console.log("catch");
  }
};

check();

//  throw new Error("boom");
// setTimeout most run on other stack
// to mostly try catch use in async await
