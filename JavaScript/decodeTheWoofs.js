function woofDecoder(str) {
  if (str === "" || str.length < 4) return "nothing to decode!";

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const woofsWord = str.split(" ").join("").split("!")
  woofsWord.pop()
  let result = "";

  for (let i = 0; i < woofsWord.length; i++) {
    const regex = /w[a-z]+f/gi;
    let currentElement = woofsWord[i].match(regex);

    if (!currentElement && result.length === 0) {
      result = "nothing to decode!";
      return result;
    };

    if (currentElement && currentElement.length > alphabet.length) {
      result = "just barking!";
      return result;
    };

    if (currentElement) result += alphabet[currentElement.length - 1].toLowerCase();
  }

  return result;
}

// console.assert(woofDecoder("Woof-woof-woof-woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof!") === "hi", "erro no teste 1")
// console.assert(woofDecoder("Woofshhh! Shhh!") === "a", "erro no teste 2")
// console.assert(woofDecoder("khkhkhWbzzzzobzzzOghrrrrfseswsw!") === "a", "erro no teste 3")
// console.assert(woofDecoder("Shhhh!") === "nothing to decode!", "erro no teste 4")
// console.assert(woofDecoder("Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof!") === "just barking!", "erro no teste 5")

// console.assert(woofDecoder("dfjlxjlwjfuntludyoor!") === "nothing to decode!", "erro no teste 6")
