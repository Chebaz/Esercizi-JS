const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
const key = Object.keys(person);
console.log(key.at(0) + " : " + person.firstName);
console.log(key.at(1) + " : " + person.lastName);
console.log(key.at(2) + " : " + person.age);
