function last(x){
  const arrString = x.split(' ');
  return arrString.sort(sortArr);
}

function sortArr(a, b) {
  const word1 = a.charAt(a.length - 1);
  const word2 = b.charAt(b.length - 1);

  if (word1 > word2) return 1
  if (word1 < word2) return -1;
  return 0;
}


console.log(last('man i need a taxi up to ubud'));