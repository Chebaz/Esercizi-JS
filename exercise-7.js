class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get FirstName() {
    return this.firstName;
  }
  get LastName() {
    return this.lastName;
  }
  get Age() {
    return this.age;
  }
  set FirstName(newFirstName) {
    this.firstName = newFirstName;
  }
  set FirstName(newLastName) {
    this.lastName = newLastName;
  }
  set FirstName(newAge) {
    this.age = newAge;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName());

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName());
