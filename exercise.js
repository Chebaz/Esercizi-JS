function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}
function printHello() {
  console.log("Hello");
}
repeatHello(printHello);
