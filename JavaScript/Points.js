function points(games) {
  // let totalPoints = 0;

  let result = games.reduce((totalPoints, game) => {
    return totalPoints += +game[0] > +game[2] ? 3 : +game[0] === +game[2] ? 1 : 0
  }, 0)

  // for (let i = 0; i < games.length; i++) {
  //   let dataGame = games[i].split(":") // ["1", "0"]
  //   if (dataGame[0] > dataGame[1]) totalPoints = totalPoints + 3;
  //   if (dataGame[0] === dataGame[1]) totalPoints = totalPoints + 1;
  //   if (dataGame[0] < dataGame[1]) totalPoints = totalPoints + 0;
  // }

  return result;
}

console.log(points(["1:2","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
// console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))