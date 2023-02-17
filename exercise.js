const isLogged = true;

let promiseOne = new Promise((resolve, reject) => {
  if (isLogged) {
    resolve(Math.random());
  } else {
    reject(new Error("Non si è loggati"));
  }
});

let promiseTwo = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "Jhon", age: 24 });
    } else {
      reject(new Error("Numero non abbastanza grande"));
    }
  });
};

promiseOne
  .then(promiseTwo)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise terminata");
  });
