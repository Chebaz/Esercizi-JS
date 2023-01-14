function sumUntil(maxValue) {
  let value = 0;
  let i;
  for (i = 0; i < maxValue; i++) {
    value += i;
  }
  value += i;
  return value;
}

console.log(sumUntil(10));
