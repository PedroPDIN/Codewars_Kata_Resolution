function strCount(str, letter){  
  let result = 0;

  if (str === "") return result;

  const arrLetters = str.split("");
  result = arrLetters.filter((l) => l === letter).length
  
  return result;
}

// ou 

function strCount(str, letter){  
  return str.split(letter).length-1
}

console.assert(typeof strCount('Hello', 'o') === "number", 'Espera que o retorno seja um inteiro');
console.assert(strCount('Hello', 'o') === 1, "Erro no teste 1");
console.assert(strCount('Hello', 'l') === 2, "Erro no teste 2");
console.assert(strCount('', 'z') === 0, "Erro no teste 3");