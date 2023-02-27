function consonantCount(str) {
  const result = str.replace(/([aeiou+\d _^&$#.,!-])/gi, "")
  return result.length;
}

console.assert(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#') === 42, "erro no test 1")