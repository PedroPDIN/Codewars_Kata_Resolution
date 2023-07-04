function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 4 === 0 && year % 100 !== 0) return true;
  return false;
}

console.assert(isLeapYear(2020) === true, "erro no teste 1");
console.assert(isLeapYear(2000) === true, "erro no teste 2");
console.assert(isLeapYear(2015) === false, "erro no teste 3");
console.assert(isLeapYear(2100) === false, "erro no teste 4");