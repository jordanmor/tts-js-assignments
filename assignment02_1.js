// TTS JavaScript Assignment 2 - Exercise 1

const shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa","coffee"];
shoppingList.push("fruit loops");
shoppingList[4] = "fair trade coffee";
shoppingList.splice(2,2,"rice", "beans");
const shoppingCart = [];
shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());
while(shoppingList.length > 0) {
  shoppingCart.push(shoppingList.shift());
}
shoppingCart.sort().reverse();
console.log(shoppingCart.join(", "));
// Answer: "rice, ramen noodles, pop tarts, fruit loops, fair trade coffee, beans"