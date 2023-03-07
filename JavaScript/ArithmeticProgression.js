function arithmeticSequenceElements(a, d, n) {
  let count = 0;
  let valueNumber = a;
  let arrNumber = "";

  while (count < n) {
    arrNumber += `${valueNumber}, `;
    valueNumber += d;
    count += 1;
  };

  return arrNumber.slice(0, -2);
}

console.assert(arithmeticSequenceElements(1, 2, 5) === "1, 3, 5, 7, 9", "erro no teste 1");
console.assert(arithmeticSequenceElements(1, 0, 5) === "1, 1, 1, 1, 1", "erro no teste 2");
console.assert(arithmeticSequenceElements(1, -3, 10) === "1, -2, -5, -8, -11, -14, -17, -20, -23, -26", "erro no teste 3");
console.assert(arithmeticSequenceElements(100, -10, 10) === "100, 90, 80, 70, 60, 50, 40, 30, 20, 10", "erro no teste 4");