function ascendingOrder(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function search(budget, prices) {
  let result = "";

  if (budget <= 0) return result;
  
  result = prices.sort(ascendingOrder).filter((price) => price <= budget).join(",");
  return result;
}

// ou

let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')

console.assert(typeof search(3, [6, 1, 2, 9, 2]) === 'string', 'Espera que o retorno seja do tipo string');
console.assert(search(3, [6, 1, 2, 9, 2]) === "1,2,2", 'Erro do teste 1');
console.assert(search(14, [7, 3, 23, 9, 14, 20, 7]) ===  "3,7,7,9,14", 'Erro do teste 2');
console.assert(search(0, [6, 1, 2, 9, 2]) === "", 'Erro do teste 3');