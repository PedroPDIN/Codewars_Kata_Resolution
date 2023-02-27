function capitalize(s,arr){
  const arrStr = s.split("");

  for (let i = 0; i < arr.length; i += 1) {
    try {
      arrStr.splice(arr[i], 1, arrStr[arr[i]].toUpperCase());
    } catch (error) {
      break;
    }
  }
  
  return arrStr.join("");
};

// console.assert(capitalize("abcdef", [1, 2, 5]) === "aBCdeF", "erro no test 1")
console.assert(capitalize("abcdef", [1, 2, 5, 100]) === "aBCdeF", "erro no test 1")