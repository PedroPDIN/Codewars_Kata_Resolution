function feast(beast, dish) {
  const beastFirstLetter = beast.substr(0, 1)
  const beastSecondLetter = beast.substr(-1, 1)

  const dishFirstLetter = dish.substr(0, 1)  
  const dishSecondLetter = dish.substr(-1, 1)

  if (beastFirstLetter === dishFirstLetter && beastSecondLetter === dishSecondLetter) { 
    return true;
  }

  return false;
}

console.assert(feast("great blue heron", "garlic naan") === true, "erro no test 1")
console.assert(feast("chickadee", "chocolate cake") === true, "erro no test 2")
console.assert(feast("brown bear", "bear claw") === false, "erro no test 3")