// TTS JavaScript Assignment 6 Exercise 2

const players = [ 
  {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32}, 
  {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0}, 
  {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12}, 
  {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8}, 
  {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3}, 
  {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9}, 
  {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2} 
];

const chosenPlayer = players.find(player => player.firstName === 'Mike');
console.log(chosenPlayer); // { firstName: 'Mike', lastName: 'Tolbert', position: 'RB',touchdowns: 8 }

const rbPlayers = players.filter(player => player.position === 'RB');
console.log(rbPlayers); //Output;
/* 
[ 
  { firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12 },
  { firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8 },
  { firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3 } 
]
*/

const lastNames = players.map(player => player.lastName);
console.log(lastNames); // ['Newton','Anderson','Stewart','Tolbert','Whittaker','Ginn','Funchess']

const rbsWithMoreThanFiveTouchDowns = players
                                        .filter(player => player.touchdowns > 5)
                                        .map(player => `${player.firstName} ${player.lastName}`);
console.log(rbsWithMoreThanFiveTouchDowns); // ['Cam Newton', 'Jonathan Stewart', 'Mike Tolbert', 'Ted Ginn']

const numOfTouchDownsByRbs = players.reduce((acc, player) =>
  player.position === 'RB' ? acc + player.touchdowns : acc + 0 ,0);

console.log(numOfTouchDownsByRbs); // 23
