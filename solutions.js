"use strict";

function isTrue(input) {
    return input === true;
}

function isEqual(string, number){
    return string == number;
}

function isEven(input){
   if (input % 2 === 0){
       return true;
   } else if (input % 2 !== 0){
       return false;
   }
}

function isIdentical(string, number){
    return string === number;
}
isIdentical();

function addOne(value){
    return Number(value) +1;
}

function concat(input1, input2){
    return String(input1) + String(input2);
}

function isFalse(value) {
    return value == false;
}

function or(input1, input2){
    return input1 || input2
}

function and(input1, input2){
    return input1 && input2;
}

function not(input) {
    return !input
}



/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
