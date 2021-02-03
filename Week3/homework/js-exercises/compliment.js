'use strict'

function giveCompliment(name) { //declares a function with an argument of 'name'
    var compliments = ['great', 'awesome', 'wonderful', 'courteous', 'friendly', 'intelligent', 'brave', 'honest', 'kind', 'smart']; //declares a variable with an array of compliments
    let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]; //randomly selects a compliment from the array

console.log(`You are ${randomCompliment} ${name}!`);
} //logs a random compliment with a name
let name = 'Noer';
giveCompliment(name); //calls the function with an argument of 'name'
giveCompliment(name); //calls the function with an argument of 'name'
giveCompliment(name); //calls the function with an argument of 'name'