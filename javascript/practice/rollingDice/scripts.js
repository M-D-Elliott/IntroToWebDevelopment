function rollDice(size) {
  if (size === undefined || size === null) {
    size = 6;
  }
  return Math.floor(Math.random() * size) + 1;
}

// for (var i = 0; i < 100; i++) {
//   console.log(rollDice());
// }
