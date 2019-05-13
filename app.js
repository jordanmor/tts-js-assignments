const weapons = ['rock' , 'paper', 'scissors'];
const player1 = 'Jordan';
const player2 = 'Computer';
let player1NumOfWins = 0;
let player2NumOfWins = 0;
let player1Hand, player2Hand;
let round = 0;

const weaponOfChoice = () => weapons[parseInt(Math.random()*weapons.length) %3];

const compareHands = (weapon1, weapon2) => {
  if(weapon1 === weapon2) {
    round++;
    return `Round ${round} is a Tie.`;
  } else if (weapon1 === 'paper' && weapon2 === 'rock' || weapon1 === 'scissors' && weapon2 === 'paper' || weapon1 === 'rock' && weapon2 === 'scissors') {
    player1NumOfWins++;
    round++;
    return `Player 1 Wins Round ${round}`;
  } else {
    player2NumOfWins++;
    round++;
    return `Player 2 Wins Round ${round}`;
  }
}

while(player1NumOfWins !== 3 && player2NumOfWins !== 3) {
  player1Hand = weaponOfChoice();
  player2Hand = weaponOfChoice();
  console.log(compareHands(player1Hand, player2Hand));
  if(player1NumOfWins === 3) {
    console.log('Player 1 Wins the Game!')
  } else if (player2NumOfWins === 3) {
    console.log('Player 2 Wins the Game!')
  }
}