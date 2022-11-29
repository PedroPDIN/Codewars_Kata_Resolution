function highAndLow(numbers){
  const arrNumbers = numbers.split(" ").map((num) => +num)
  const maxNumber = Math.max(...arrNumbers);
  const minNumber = Math.min(...arrNumbers);
  return `${maxNumber} ${minNumber}`
}

console.assert(highAndLow("1 2 3") === "3 1", 'Erro no test 1');
console.assert(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") === "42 -9", 'Erro no test 2');