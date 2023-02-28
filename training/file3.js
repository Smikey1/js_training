//2 min hai
let fname = "Sarthak"
let age = 22

//--> age + " "
//We have to print this --> "Hello I am Sarthak and I am 22 years old"
let aboutMe = "Hello I am " + fname + " and I am " + age + " years old"
console.log(aboutMe);
// we can solve this problem with template string 
// template string is something like string formating in python

let aboutMe2 = `Hello I am ${fname} and I am ${age} years old`
console.log(aboutMe2)

// Data type --> undefined vs null

let firstName;
// firstName = "Amount received"
console.log(typeof firstName);

let myValue = null
console.log(typeof (myValue))
// type of null in JS is obj --> this is bug in JS
// --> initally JS is expanding so fastly like 
// 2 million people in 1 day

console.log(myValue)


// Big int
let myNum = BigInt(12);
// OR

let myNum1 = 12n;
console.log(typeof myNum);
console.log(typeof myNum1);
// console.log(Number.MAX_SAFE_INTEGER);

// booleans and comparision operator
// for booleans --> true, false
let num1 = 1;
let num2 = "1";
// console.log(num1>num2);

// == vs ===
// Note: == --> compare the value only holds by variable
// but ==== compare the value along with its datatype.
console.log("Test-->1", num1 == num2);
console.log("Test-->2", num1 === num2);

/*
!=  vs !==
*/
console.log(num1 != num2)
console.log(num1 !== num2)

// Types of values in JS
// 2 types--> falsy value and truthy value
// falsy values are --> false, "", null, undefined, 0
// truthy values are --> true, "apple", 1,-1

// if else
// syntax --> if (condition) {} 
// syntax --> if (condition) {} else {}
let myAge = 14;
if (myAge > 15){
    console.log("can watch movie");
} else {
    console.log("can not watch movie");
}

let meroNum = 8;
if(meroNum%2 === "0"){
    console.log("even")
} else {
    console.log("odd")

}

// please see above for the truthy and falsy value for else case
let first1Name = "";
if(first1Name){
    console.log(first1Name);
} else {
    console.log(`First name is empty`);
}




