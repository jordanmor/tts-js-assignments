# Tech Talent Select

## TTS Assignment - JavaScript Libraries

- **Completed Lodash Exercises**  
Lab File - `js-lib-lab/lodash-lab.js` 
- **Completed Moment Exercises**  
Lab File - `js-lib-lab/moment-lab.js` 
- **Completed mathjs Exercises**  
Lab File - `js-lib-lab/mathjs-lab.js`
- **Completed DataTable Lab**  
Lab Folder - `js-lib-lab/data-table-lab`

## TTS Assignment - TypeScript (Angular Basics)  

- Create an HTML file template and a TypeScript file. Compile the TypeScript file by to the proper folder in the command prompt and compile with the tsc command. Note the name of the produced JavaScript file. Reference the JavaScript file from the HTML page, then launch the HTML page in a browser to verify the output.
- Create a class called `Employee`. Give it the properties of first name, last name, age, phone number, state, zip code, and occupation. Create a constructor to initialize these properties. Also create several method to return combinations of interest, such as Full name, Name and Phone Number, Location, etc.
- Compile the file again with tsc to ensure the syntax is correct.
- Create several people and assign the output of some of their information to various sections in your page.
- Add a hourlyWage property to the employee. Add a function that calculates a weekly wage and takes the number of hours as an default parameter. If it is not presented, use a typical 40 hours to calculate the wage. Display this in a area that states the name of the person and their weekly wage.
- Create a property for a person's certifications/degrees that is an array. These could be things such as MBA, CSM, MCSD, etc. Next create a function called addCerts() that takes an unknown number of arguments and adds them to the array.
- Create an interface called EmployeeOptions where the name values are required but the other parameters are optional. Create a method in the class that takes an option parameter and returns an Employee based on the options given. Implement this will a few different options to observe how it works.
- Examine the compiled JavaScript file to see how the tsc changes TypeScript into JavaScript.

**Submitted folder**  
`typescript` 

**Screenshot of my completed TypeScript assignment**  

![TypeScript Assignment Screen Shot](/images/typescript-screenshot.png)

# Tech Talent South

## TTS JavaScript Assignment 1

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

    **Submitted files**  
    `assignment01_a.js` - assignment completed using functions  
    `assignment01_b.js` - At teacher's request, assignment was also completed without using functions or classes

## TTS JavaScript Assignment 2

Exercise 1  
- Use an array to keep track of your shopping list at the grocery store.  
- [Exercise 1 Instructions](https://github.com/ttsJavaScriptAppDevelopmentSummer16/classNotes/blob/master/Lesson%2002%20-%20Data%20Structures%20-%20Arrays%20&%20Objects.md#exercise-1)  

Exercise 2
- Given the following object, get the following values...
- [Exercise 2 Instructions](https://github.com/ttsJavaScriptAppDevelopmentSummer16/classNotes/blob/master/Lesson%2002%20-%20Data%20Structures%20-%20Arrays%20%26%20Objects.md#exercise-addressing-objects)

Exercise 3
- Create an object that models the data of your favorite email application. Add as much detail as you'd like. 
- Nest objects inside of arrays and arrays inside of objects multiple levels deep. Ask yourself if some of the primitives you've created could be objects instead. 
- Once you've composed your object, write some code to address it.
- Push the completed code to our GitHub channel.

**Submitted files**  
`assignment02_1.js`  
`assignment02_2.js`  
`assignment02_3.js`

## TTS JavaScript Assignment 3 - Rock, Paper, Scissors Game

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

**Submitted file**  
`rock-paper-scissors.js` 

## TTS JavaScript Assignment 4

- Create an outer function with an inner function. Call the outer function.
- Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
- Log the values of a and b in the inner function.
- Update the inner function to take two parameters named a and b.
- Pass a and b in as arguments when you execute inner().
- Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
- Inside the inner function, update a property of the b object.

**Submitted file**  
`assignment04.js` 

## TTS JavaScript Assignment 5 - Slideshow
- Create a single object named slideshow that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:
    - An array called photoList that contains the names of the photos as strings
    - An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    - A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
    - A prevPhoto() function that does the same thing, but backwards.
    - A function getCurrentPhoto() that returns the current photo from the list.  

**Submitted file**  
`slideshow.js` 
    
---

**Updated Solution** 
- Original solution refactored using a closure, short-circuiting and arrow functions 
- Created basic html page to display slideshow functionality
- Located in folder challenge05_updated

**Submitted folder**  
`slideshow_updated` 

## TTS JavaScript Assignment 6

Exercise 1
1. Create an Array named superHeroes
    - Inside the superHeroes array create the following arrays: ["Batman", "Bruce Wayne"],["Spiderman", "Peter Parker"],["The Flash", "Barry Allen"]
2. Create a secretIdentity variable
3. Assign superHeroes.map() to the secretIdentity variable
4. Assign and anonymous function to superheroes.map() as an argument
5. Your anonymous function should have one parameter named revealArray
6. Inside the block of your anonymous function:
    - You'll be working with revealArray as an argument
    - Using revealArray return a string that will join the two array items.
    - Join them together with the string "is", ie: "Batman is Bruce Wayne"
7. Log the results to the screen and join them with a line break.

Exercise 2
1. Using the following data:
    - const players = [
        {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
        {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
        {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
        {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
        {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
        {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
        {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
    ];
2. Find a player with the name 'Mike'
3. Get an array of all players with position 'RB'
4. Get an array of all the players lastNames
5. Get an array of the full names of all the runningbacks with more than 5 touchdowns
6. Get the number of touchdowns scored by Runningbacks

Exercise 3  
- Going back to our slideshow object, let's add some functionality.
    1. Create an empty property named playInterval
    2. A play() function that moves to the next photo ever 2000ms until the end. <em>Tip - use playInterval = setInterval(fn,ms).</em>
    3. A pause() function that stops the slideshow <em>Tip - use clearInterval(playInterval)</em>
    4. Automatically pause the slideshow if it gets to the end of the photolist while playing.

**Submitted files**  
`assignment06_1.js`  
`assignment06_2.js`  
`assignment06_3.js`