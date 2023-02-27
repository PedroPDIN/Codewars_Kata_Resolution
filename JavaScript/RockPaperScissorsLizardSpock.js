function rpsls(pl1,pl2){
  if (pl1 === pl2) return "Draw!";
  if (pl1 === "scissors") return GameScissors(pl2);
  if (pl1 === "paper") return GamePaper(pl2);
  if (pl1 === "rock") return GameRock(pl2);
  if (pl1 === "lizard") return GameLizard(pl2);
  if (pl1 === "spock") return GameSpock(pl2);
}

function GameScissors(pl2) {
  if (pl2 === "paper") return "Player 1 Won!"
  if (pl2 === "lizard") return "Player 1 Won!"
  return "Player 2 Won!"
};

function GamePaper(pl2) {
  if (pl2 === "rock") return "Player 1 Won!"
  if (pl2 === "spock") return "Player 1 Won!"
  return "Player 2 Won!"
};

function GameRock(pl2) {
  if (pl2 === "lizard") return "Player 1 Won!"
  if (pl2 === "scissors") return "Player 1 Won!"
  return "Player 2 Won!"
};

function GameLizard(pl2) {
  if (pl2 === "spock") return "Player 1 Won!"
  if (pl2 === "paper") return "Player 1 Won!"
  return "Player 2 Won!"
};

function GameSpock(pl2) {
  if (pl2 === "scissors") return "Player 1 Won!"
  if (pl2 === "rock") return "Player 1 Won!"
  return "Player 2 Won!"
};

console.assert(rpsls('rock', 'lizard') === 'Player 1 Won!', "erro no test 1");

// ou

function rpsls(p1, p2) {
  let wins = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  }
  
  let player1 = wins[p1].includes(p2)
  let player2 = wins[p2].includes(p1)
  
  if (!player1 && !player2) { return 'Draw!' }
}