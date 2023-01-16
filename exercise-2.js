const order = {
  costumer: "Carl",
  address: "cicco",
};

if (order && order?.customer.address.city) {
  console.log("City is required");
} else {
  console.log("ordine accettato");
}
