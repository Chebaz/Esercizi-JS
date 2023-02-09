function printAsyncName(callback, name) {
  setTimeout(() => console.log(name), 2000);
  setTimeout(() => callback(), 1000);
}

function printHello() {
  console.log("Hello");
}
printAsyncName(printHello, "Simone");

/*Il principale motivo per cui vengono usate le arrow 
function all'interno di una funzione callback è che con le 
arrow function non si modifica il contesto all'interno della funzione*/
