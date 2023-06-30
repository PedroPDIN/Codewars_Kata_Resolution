function dominator(arr) {
  const lenArr = arr.length;
  const dataObj = {};
  let count = 0;

  while (count < lenArr) {
    if (!dataObj[arr[count]]) {
      dataObj[arr[count]] = 0;
    }
    dataObj[arr[count]] += 1;
    count += 1
  }

  const dominator = { key: 0, value: 0 }

  for (let key in dataObj) {
    if (dataObj[key] > dominator.value) {
      dominator.key = +key
      dominator.value = dataObj[key]
    }
  }

  if (dominator.value > (lenArr / 2)) {
    return dominator.key;
  } else {
    return -1
  }
}


console.assert(dominator([3, 4, 3, 2, 3, 1, 3, 3]) === 3, "erro no teste 1")
// console.assert(dominator([1, 1 ,1 ,2 ,2 ,2 ,2]) === 2, "erro no teste 2")
// console.assert(dominator([1, 2, 3, 4, 5]) === -1, "erro no teste 3")
// console.assert(dominator([1, 1, 1, 2, 2, 2]) === -1, "erro no teste 4")