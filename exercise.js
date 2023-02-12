const number = 15;
let promise = new Promise(function (resolve, reject) {
  if (number >= 10) {
    resolve();
  } else {
    reject();
  }
});
promise
  .then(function () {
    console.log("il numero va bene");
  })
  .catch(() => {
    console.log("il numero e' troppo piccolo");
  });
