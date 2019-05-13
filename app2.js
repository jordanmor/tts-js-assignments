// Solution using no functions or classes

const weapons = ['rock' , 'paper', 'scissors'];
const player1 = 'Player1';
const player2 = 'Player2';
let player1NumOfWins = 0;
let player2NumOfWins = 0;
let player1Hand, player2Hand, weapon1, weapon2, winnindHand;
let round = 0;

let weapon = weapons[parseInt(Math.random()*weapons.length) %3];

while(player1NumOfWins !== 3 && player2NumOfWins !== 3) {
  weapon1 = weapons[parseInt(Math.random()*weapons.length) %3];
  weapon2 = weapons[parseInt(Math.random()*weapons.length) %3];
  round++;

  if(weapon1 === weapon2) {
    console.log(`Round ${round} is a Tie.`);
  } else if (weapon1 === 'paper' && weapon2 === 'rock' || weapon1 === 'scissors' && weapon2 === 'paper' || weapon1 === 'rock' && weapon2 === 'scissors') {
    player1NumOfWins++;
    console.log(`Player 1 Wins Round ${round}`);
  } else {
    player2NumOfWins++;
    console.log(`Player 2 Wins Round ${round}`);
  }

  if(player1NumOfWins === 3) {
    console.log('Player 1 Wins the Game!')
  } else if (player2NumOfWins === 3) {
    console.log('Player 2 Wins the Game!')
  }
}