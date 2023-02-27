function selReverse(array, length) {
  let start = 0;
  let end = length;
  const arrTest = [];

  for (let i = 0; i < array.length; i += length) {
    let separateValue = array.slice(start, end).reverse()
    start += length;
    end += length;
    arrTest.push(separateValue)
  }

  const result = arrTest.reduce((ac, i) => ac.concat(i), [])
  return result;
}

console.time()
selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)
console.timeEnd()


// console.assert(selReverse([2,4,6,8,10,12,14,16], 3 ) === [6,4,2,12,10,8,16,14], "Erro no test 1")
// console.assert(selReverse([1,2,3,4,5,6], 2 ) === [2,1,4,3,6,5], "Erro no test 2")