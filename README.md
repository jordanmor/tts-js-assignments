## TTS JavaScript Challenge 1

1. Create a game of 'Rock Paper Scissors' that runs until one player has three wins.  
2. Store the player names and number of wins for each player in variables.  
3. Use a while loop to run the game until one player has 3 wins.  
4. Use the given data below to randomly select an item.  
5. Output each players hand to the console
    - Use an `if` or `switch` statement to determine a winner of the round
    - Output the round winner's name to the console
    - Create a way to track how many rounds each player has won
    - When one player wins 3 rounds, announce that player's name as the game winner
    - Push the code to your GitHub Repo

## TTS JavaScript Challenge 2

[Exercise 1](https://github.com/ttsJavaScriptAppDevelopmentSummer16/classNotes/blob/master/Lesson%2002%20-%20Data%20Structures%20-%20Arrays%20&%20Objects.md#exercise-1)  
[Exercise 2](https://github.com/ttsJavaScriptAppDevelopmentSummer16/classNotes/blob/master/Lesson%2002%20-%20Data%20Structures%20-%20Arrays%20%26%20Objects.md#exercise-addressing-objects)  
Exercise 3
- Create an object that models the data of your favorite email application. Add as much detail as you'd like. 
- Nest objects inside of arrays and arrays inside of objects multiple levels deep. Ask yourself if some of the primatives you've created could be objects instead. 
- Once you've composed your object, write some code to address it.
- Push the completed code to our GitHub channel.

## TTS JavaScript Challenge 3

1. Define a hands array with the values 'rock', 'paper', and 'scissors';
2. Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
3. Define two objects for two players. Each player has name and getHand() properties.
4. Define a function called playRound() that
    - Takes two player objects as arguments
    - Gets hands from each
    - Determines the winner
    - Logs the hands played and name of the winner.
    - If its a tie, log the hands played and "it's a tie".
    - Returns the winner object (null if no winner)
5. Define a function called playGame() that takes arguments player1, player2, and playUntil.
    - Play rounds until one of the players wins playUntil hands
    - When one player has won enough games, return the winning player object
6. Play a game to 5 wins

<strong>Bonus Questions</strong>  
- Define a function called playTournament():  
- Take 4 players and playUntil as arguments  
- Play a game between the first two players, and the second two players  
- Play a game between the winners of the first round.  
- Announce the tournament winner's name "\[name] is the world champion";  

## TTS JavaScript Challenge 4

Exercise 1
- Create an outer function with an inner function. Call the outer function.
- Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
- Log the values of a and b in the inner function.
- Update the inner function to take two parameters named a and b.
- Pass a and b in as arguments when you execute inner().
- Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
- Inside the inner function, update a property of the b object.

Exercise 2
- Create a single object named slideshow that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:
    - An array called photoList that contains the names of the photos as strings
    - An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    - A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
    - A prevPhoto() function that does the same thing, but backwards.
    - A function getCurrentPhoto() that returns the current photo from the list.