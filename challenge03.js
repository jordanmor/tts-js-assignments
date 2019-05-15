const hands = ['rock', 'paper', 'scissors'];

class Player {
  constructor(name) {
    this.name = name;
  }
  getHand() {
    const hands = ['rock', 'paper', 'scissors'];
    return hands[parseInt(Math.random()*10)%3];
  }
}

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');

function playRound(player1, player2) {
  const hand1 = player1.getHand();
  const hand2 = player2.getHand();
  draw = hand1 === hand2;
  winningHand = (hand1 === 'paper' && hand2 === 'rock')     || 
                (hand1 === 'scissors' && hand2 === 'paper') || 
                (hand1 === 'rock' && hand2 === 'scissors');
  const handsPlayed = `Hands played: ${hand1} vs ${hand2}`;
  if(draw) {
    console.log(`It's a Tie. ${handsPlayed}`);
    return null;
  } else if (winningHand) {
    console.log(`${player1.name} Wins! ${handsPlayed}`);
    return player1;
  } else {
    console.log(`${player2.name} Wins! ${handsPlayed}`);
    return player2;
  }
}

console.log(playRound(player1, player2));

