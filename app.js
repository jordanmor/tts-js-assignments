const weapons = ['rock' , 'paper', 'scissors'];
let round = 0;

class Player {
  constructor(name) {
    this.name = name;
    this.numOfWins = 0;
    this.hand = undefined;
  }
}

const player1 = new Player('Player1');
const player2 = new Player('Player2');

const weaponOfChoice = () => weapons[parseInt(Math.random()*weapons.length) %3];

const compareHands = (weapon1, weapon2) => {
  const winningHand = weapon1 === 'paper' && weapon2 === 'rock' || weapon1 === 'scissors' && weapon2 === 'paper' || weapon1 === 'rock' && weapon2 === 'scissors';
  round++;
  if(weapon1 === weapon2) {
    return `Round ${round} is a Tie.`;
  } else if (winningHand) {
    player1.numOfWins++;
    return `Player 1 Wins Round ${round}`;
  } else {
    player2.numOfWins++;
    return `Player 2 Wins Round ${round}`;
  }
}

while(player1.numOfWins !== 3 && player2.numOfWins !== 3) {
  player1.hand = weaponOfChoice();
  player2.hand = weaponOfChoice();
  console.log(compareHands(player1.hand, player2.hand));
  if(player1.numOfWins === 3) {
    console.log('Player 1 Wins the Game!')
  } else if (player1.numOfWins === 3) {
    console.log('Player 2 Wins the Game!')
  }
}