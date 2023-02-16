function squareSum(numbers){  
  let result = 0;

  if (numbers.length <= 0) return result;

  for (let i = 0; i < numbers.length; i++) {
    result = result + Math.pow(numbers[i], 2)
  }

  return result;
}

console.assert(squareSum([1,2]) === 5, "Erro no test 1")
// console.assert(squareSum([0, 3, 4, 5]) === 50, "Erro no test 2")
// console.assert(squareSum([]) === 0, "Erro no test 3")