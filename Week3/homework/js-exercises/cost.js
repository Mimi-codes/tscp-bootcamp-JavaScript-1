'use strict'
var cartForParty = {
    beer : 1.75,
    chips : 0.99,
    popcorn: 3.26,
    shrimp : 1.45,
    pizza : 3.30,
} //declared and assigned an object
 
function calculateTotalPrice(cartForParty) { //declared a function with an argument
    let sum = 0;
for (let key in cartForParty) {
    sum += cartForParty[key];
} //loops through the declared object

console.log(`Total: $${sum}`); //I used the dollar sign instead of the euro sign as instructed because I couldn't find the euro sign on my keyboard
} 
    calculateTotalPrice(cartForParty);