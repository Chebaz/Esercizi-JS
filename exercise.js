const user = {
  id: 1,
  name: "John",
  age: 25,
};
function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  const userData = localStorage.getItem("user");
  if (userData) {
    const user = JSON.parse(userData);
    console.log(user);
  } else {
    console.log("nessun utente trovato");
  }
}
