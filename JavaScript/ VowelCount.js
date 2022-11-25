function getCount(str) {
  const baseVowels = ['a', 'e', 'i', 'o', 'u'];
  const result = str.split("").filter((letter) => baseVowels.includes(letter));
 
  return result.length;
}

console.assert(getCount('pedro') === 2, 'Erro no teste 1');
console.assert(getCount('abracadabra') === 5, 'Erro no teste 2');
console.assert(getCount('bys') === 0, 'Erro no teste 3');