// function inside function

function calculator() {

    function add(num1, num2) {
        return num1 + num2
    }
    function product(num1, num2) {
        return num1 * num2
    }
    console.log(product(5, 2))
    function sub(num1, num2) {
        return num1 - num2
    }
    console.log("We are inside calculator function");
}

calculator()

//lexical scope
// types of function
/*
1) normal function
2) anonomous function
3) expression function
4) arrow function
5) one line-function
*/

// normal function
function user_bio() {
    console.log("Hi!, I am a user")
}

user_bio()

// anonomous function
let a = function() {
    console.log("Hi!, I am a user")
}
a()

// expression function
const abc = function addTwoNum(num1, num2) {
    return num1 + num2
}

console.log(abc(2, 3))

// arrow function
const arrow_func = (num1, num2) => {
    return num1 + num2
}

// one-line function
const one_line_func = (num1, num2) => num1 + num2


console.log(arrow_func(2, 3))


// function with default parameter and rest parameter


// default parameter function
function myFunc(a, b, c=10) {
    console.log("the value of a:-->", a)
    console.log("the value of b:-->", b)
    console.log("the value of c:-->", c)
    return a + b + c
}
console.log(myFunc(10, 10)) // call without c-value
console.log(myFunc(10, 10, 11))  // call without c-value-->override


// rest parameter function
function myFunc1(a, b, ...c) {
    console.log("the value of a:-->", a)
    console.log("the value of b:-->", b)
    console.log("the value of c:-->", c)
    return a + b + "-->" + c
}
console.log(myFunc1(10, 10, 19, 12, 13, 14, 15, 16))