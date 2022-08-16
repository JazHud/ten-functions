"use strict";

function isTrue(input) {
    if (String.input === false){
        return true;
    }else if (input === true);
        return true;
}

function isEqual(string, number){
    return string == number;
}

function isEven(input){
    return (input % 2 === 0);
}

function isIdentical(string, number){
    return string === number;
}
isIdentical();

function addOne(value) {
    return (parseInt(value) + 1);
}

function concat(input1, input2){
    return String(input1) + String(input2);
}

function isFalse(value) {
    if (value !== 0){
        return false;
    } else if (value = String){
        return false;
    } else if (value = false){
        return false;
    } else {
        return true;
    }
}

function or(input1, input2){
    return input1 || input2
}

function and(input1, input2){
    return input1 && input2;
}

function not(input) {
    if (input === 0) {
        return false;
    } else if (input === "hello"){
        return false;
    } else if (input !== ("")) {
        return false;
    } else {
        return true;
    }

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
