const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
/*Quando assegno una variabile ad un oggeto, in realtà non sto copiando l'intero oggetto,
ma semplicemente sto copiando l'indirizzo di memoria che fa riferimento a quel oggetto.
Praticamente, quando scrivo "const person2 = person1" sto copiando un puntatore e di 
conseguenza l'indirizzo di memoria che sta puntando, non sto creando un secondo oggetto.
Uno dei metodi per creare un secondo oggetto è copiarne la struttura dati ciclando 
sull'oggetto di riferimento*/
