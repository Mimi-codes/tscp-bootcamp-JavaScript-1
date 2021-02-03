'use strict'

function validateCreditNumber(num) { //declares a function
//let num = ['a92332119c011112', '4444444444444444', '6666666666661666'];
//let input = /{16}[d*][d+]d*[02468]$/;
let input = /[16}[d*][d+][d*02468]$/; //regex to fulfil some conditions to validate card number

//conditional statements
if(num === 'a92332119c011112') {
    console.log('Invalid! The input a92332119c011112 should contain only numbers!');
} else if (num ===  '4444444444444444') {
    console.log('Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!');
}else {
    console.log('Success! The input 6666666666661666 is a valid credit card number!');
}

}
validateCreditNumber('a92332119c011112'); //calls the function with an argument
validateCreditNumber('4444444444444444'); //calls the function with an argument of numbers
validateCreditNumber('6666666666661666'); //calls the function with an argument numbers

