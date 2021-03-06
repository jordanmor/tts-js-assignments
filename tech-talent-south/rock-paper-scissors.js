// TTS JavaScript Assignment 3 - Rock, Paper, Scissors Game

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

const players = [];

for(let i = 1; i <= 4; i++) {
  players.push(new Player(`Player ${i}`))
}

// Determines winner & returns the winner object (null if no winner)
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

function playTournament(players, playUntil) {
  // first two players compete
  const winningPlayer1 = playGame(players[0], players[1], playUntil);
  // second two players compete
  const winningPlayer2 = playGame(players[2], players[3], playUntil);
  // Reset final two players numOfWins count
  winningPlayer1.numOfWins = 0;
  winningPlayer2.numOfWins = 0;
  // last competition between the winners of the first round
  return playGame(winningPlayer1, winningPlayer2, playUntil);
}

const champion = playTournament(players, 5); // stores the final winner object

console.log(`${champion.name} is the world champion!`); // Ex. Player 4 is the world champion!