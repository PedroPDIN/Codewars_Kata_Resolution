function sumOfMinimums(arr) {
  const arrValue = [];

  for (let i = 0; i < arr.length; i++) {
    const currentMinValue = arr[i].sort((a, b) => a - b)[0];
    arrValue.push(currentMinValue);
  }

  return arrValue.reduce((ac, i) => ac + i, 0);
}

// console.assert(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) === 9, "Erro no test 1")
// console.assert(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]) === 76, "Erro no test 2")
console.assert(sumOfMinimums( [[91, 130, 3], [129, 123, 32], [50, 109, 140], [125, 146, 6], [11, 32, 96], [62, 50, 26]]) === 128, "Erro no test 2")