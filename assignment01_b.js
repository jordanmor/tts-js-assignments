// TTS JavaScript Assignment 1
// Solution using no functions or classes
const weapons = ['rock' , 'paper', 'scissors'];
const player1 = 'Player 1';
const player2 = 'Player 2';
let player1Score = 0, player2Score = 0, round = 0;
let hand1, hand2, draw, winningHand;

while(player1Score !== 3 && player2Score !== 3) {
  round++;
  hand1 = weapons[parseInt(Math.random()*weapons.length) %3];
  hand2 = weapons[parseInt(Math.random()*weapons.length) %3];
  draw = hand1 === hand2;
  winningHand = (hand1 === 'paper' && hand2 === 'rock')     || 
                (hand1 === 'scissors' && hand2 === 'paper') || 
                (hand1 === 'rock' && hand2 === 'scissors');
  if(draw) {
    console.log(`Round ${round} is a Tie.`);
  } else if (winningHand) {
    player1Score++;
    console.log(`${player1} Wins Round ${round}`);
    if(player1Score === 3) {
      console.log(`${player1} Wins the Game!`)
    }
  } else {
    player2Score++;
    console.log(`${player2} Wins Round ${round}`);
    if(player2Score === 3) {
      console.log(`${player2} Wins the Game!`)
    }
  }
}