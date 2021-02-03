'use strict'

const shoppingCart = ['bananas', ' milk']; //declared an array
let item = [' chocolate', ' waffles', ' tea']; //declared an array which serves as a function argument

let grocery = shoppingCart.concat(item[0]); //adds item[0] to shoppingCart array 
let grocery2 = grocery.concat(item[1]); //adds item[1] to shoppingCart array

let slice = grocery2.slice(1); //removes the first item from the array

let grocery3 = slice.concat(item[2]); //adds item[2] to shoppingCart array
let slice2 = grocery3.slice(1); //removes the first item from the array



function addToShoppingCart(item) { //declared a function with an argument of 'item'
        for (let i = 0; i < grocery.length; i++) { //loops through the array
        
            //conditional statements
        if(item === 'chocolate') {
            console.log('You bought ' + `${grocery}` + '!');
        } else if (item === 'waffles') {
            console.log('You bought ' + `${slice}` + '!');
        }else {
            console.log('You bought ' + `${slice2}` + '!');
        }
break;
    }



}
addToShoppingCart('chocolate'); //calls the function with an argument of 'chocolate'
addToShoppingCart('waffles'); //calls the function with an argument of 'waffles'
addToShoppingCart('tea'); //calls the function with an argument of 'tea'