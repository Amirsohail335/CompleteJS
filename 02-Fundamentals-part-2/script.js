"use strict";

function juicermaker(apple, orange) {
  console.log(apple, orange);
  const juice = `Make apple ${apple} and orange ${orange} by mixing`;
  return juice;
}

juicermaker(4, 5);
const reqJuice = juicermaker(4, 5);

console.log(reqJuice);

const requiredPieces = function (cutpieces) {
  return 4 * cutpieces;
};

const fruitProcessor = function (apple, orange) {
  console.log(orange, apple);
  const applePieces = requiredPieces(apple);
  const orangePieces = requiredPieces(orange);

  const juice = `For making juices ${applePieces} apple pieces and ${orangePieces} orange pieces required`;
  return juice;
};

const fruitJuice = fruitProcessor(4, 5);
console.log(fruitJuice);

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
