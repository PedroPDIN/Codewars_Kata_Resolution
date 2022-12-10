function derDieDas(wort){
  const arrVowelsUmlaute = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];
  const countWort = wort
    .toLowerCase()
    .split("")
    .filter((letter) => arrVowelsUmlaute
      .includes(letter));
  
  if (countWort.length < 2) return `das ${wort}`;
  else if (countWort.length === 2 || countWort.length === 3) return `die ${wort}`;
  else return `der ${wort}`;
}

console.assert(derDieDas('OOOpa') === 'der OOOpa', 'erro no test 01')
console.assert(derDieDas('Suppenhuhn') === 'die Suppenhuhn', 'erro no test 02')
console.assert(derDieDas('Geheimdienst') === 'der Geheimdienst', 'erro no test 03')
console.assert(derDieDas('Ofenkartoffel') === 'der Ofenkartoffel', 'erro no test 04')
console.assert(derDieDas('Fisch') === 'das Fisch', 'erro no test 05')
console.assert(derDieDas('Knödel') === 'die Knödel', 'erro no test 06')
console.assert(derDieDas('Leberkaassemmi') === 'der Leberkaassemmi', 'erro no test 07')

// ou

function derDieDas(wort) {
  var n = wort.split(/[aeiouäöü]/i).length - 1
  if (n < 2) return "das " + wort
  if (n > 3) return "der " + wort
  return "die " + wort
}