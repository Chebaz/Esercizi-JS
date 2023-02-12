const isLogged = true;
let promiseONe = new Promise((resolve, rejet) => {
  if (isLogged) {
    resolve(Math.random());
  } else {
    rejet("Non si e' loggati");
  }
});

let promiseTwo = (number) =>
  new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "Jhon", age: 24 });
    } else {
      console.log(number);
      reject("numero non abbastanza grande");
    }
  });

promiseONe
  .then(promiseTwo)
  .then((risultato) => {
    console.log(risultato);
  })
  .catch((errore) => {
    console.log(errore);
  });
