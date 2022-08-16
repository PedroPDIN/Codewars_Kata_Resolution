const structureArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].join(""));
  };

  const lastElement = result[result.length - 1];
  const indexLastElement = result.indexOf(lastElement);

  if (lastElement.length === 1) {
    result[indexLastElement] = `${lastElement}_`
  }
  return result;
}

const solution = (str) => {
  const arrLetters = str.split("");
  const result = [];

  if (str === "") return result;
  for (let i = 0; i < arrLetters.length; i += 2) {
    result.push(arrLetters.slice([i], [i + 2]));
  }
   return structureArray(result);
}

console.log(solution(""))