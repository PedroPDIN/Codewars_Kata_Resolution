function scramble(str, arr) {
  let objControl = {};

  arr.forEach((v, i) => {
    objControl[v] = str[i];
  })

  return Object.values(objControl).join("");
};

console.assert(scramble("abcd", [0, 3, 1, 2]) === "acdb", "Erro no teste 01")