"use strict";

function juicermaker(apple, orange) {
  console.log(apple, orange);
  const juice = `Make apple ${apple} and orange ${orange} by mixing`;
  return juice;
}

juicermaker(4, 5);
const reqJuice = juicermaker(4, 5);

console.log(reqJuice);
