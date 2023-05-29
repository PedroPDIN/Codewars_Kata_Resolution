const sumSquareEvenRootOdd = (array) => {
  const lenArray = array.length;
  let count = 0;
  let result = 0;

  while (count < lenArray) {
    if (array[count] % 2 === 0) {
      result += array[count] * array[count]
      count += 1;
    } else {
      result += Math.sqrt(array[count]);
      count += 1;
    };
  };

  return +result.toFixed(2);
};

console.assert(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]) === 91.61, 'Erro no teste 1')
// console.log("====================================================")
// console.assert(sumSquareEvenRootOdd([1,14,9,8,17,21]) === 272.71, 'Erro no teste 2')