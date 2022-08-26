console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const plus = number => {
  return function(plusNumber) {
    return number + plusNumber;
  };
};

const plus15 = plus(15);
console.log(plus15(10));
