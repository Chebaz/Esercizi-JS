let count = 0;

function repeatHello(callback) {
  let intervall = setInterval(() => {
    if (count >= 5) {
      clearInterval(intervall);
    } else {
      count++;
      callback();
    }
  }, 1000);
}

function printHello() {
  console.log("Hello");
}
repeatHello(printHello);
