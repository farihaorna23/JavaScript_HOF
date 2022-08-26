console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const plus = number => {
  return function(plusNumber) {
    return number + plusNumber;
  };
};

// const plus15 = plus(15);
// console.log(plus15(10));

console.log("EXERCISE 2:\n==========\n");
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false
  }
];

const print = users => {
  users.forEach(user => console.log(user.name));
};

// print(users);
console.log("EXERCISE 3:\n==========\n");

const namesScore = users => {
  console.log(users);
  const result = users.map(user => `${user.name} : ${user.score}`);
  console.log(result);
};

namesScore(users);
