function noBoringZeros(n) {
  if (n === 0) return 0;

  const arrString = String(n).split("").reverse();
  let stop = false;
  
  while (!stop) {
    if (arrString[0] === '0') {
      arrString.splice(0, 1);
    } else {
      stop = true;
    }
  };

  const result = +arrString.reverse().join("")
  return result;
}

console.assert(noBoringZeros(-1050) === -105, "erro no teste 1!")