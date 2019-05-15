// TTS JavaScript Challenge 3

class Player {
  constructor(name) {
    this.name = name;
    this.numOfWins = 0;
  }
  getHand() {
    const hands = ['rock', 'paper', 'scissors'];
    return hands[parseInt(Math.random()*10)%3];
  }
}

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');

// Determines winner & Returns the winner object (null if no winner)
// Logs hands played. Also logs name of winner or declares tie
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

/* 
  When one player has won # of games === playUntil, 
  function returns the winning player object
*/
function playGame(player1, player2, playUntil) {
  let winningPlayer;
  while(playUntil > player1.numOfWins || playUntil > player2.numOfWins) {
    winningPlayer = playRound(player1, player2);
    if(winningPlayer !== null) {
      winningPlayer.numOfWins++;
      if(winningPlayer.numOfWins === 5) {
        return winningPlayer;
      }
    }
  }
}

console.log(playGame(player1, player2, 5)); // Example result: Player { name: 'Player 1', numOfWins: 5 }

