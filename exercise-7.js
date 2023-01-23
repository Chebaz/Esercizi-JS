class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  setFullName(newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
  fullName() {
    return this.getFullName();
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName());

person.firstName = "Maria";
console.log(person.fullName());
person.lastName = "Verdi";
console.log(person.fullName());
