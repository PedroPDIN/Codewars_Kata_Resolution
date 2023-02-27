function missingWord(nums, str) {
  const arrStr = str.split(" ").join("");
  const newNums = nums.sort((a, b) => a - b);
  let count = 0;
  let result = "";

  while (count < newNums.length) {
    if (arrStr[newNums[count]]) {
      result += arrStr[newNums[count]];
      count += 1;
    } else {
      return "No mission today"
    }
  } 

  return result.toLowerCase()
}

// console.assert(missingWord([5, 0, 3], "I love you") === "ivy", "erro no teste 1")
console.assert(missingWord([12, 4, 6], "Good Morning") === "No mission today", "erro no teste 2")