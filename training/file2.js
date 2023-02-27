// declaration of constant
const pi = 3.14
console.log(pi);

// String indexing
// --> variable.length --> total length
// --> last index: total length -1
let firstName = "Sarthak";

console.log(firstName[2]);
console.log(firstName.length);
console.log(firstName[firstName.length - 1]);
console.log(firstName.slice(1, 3 + 1));

// other string methods:
// trim(), toUpperCate(), toLowerCase(), slice

let lastName = "     shrestha    "
console.log("the length is", lastName.length);
let newLastName = lastName.trim()
let newUpper = lastName.toUpperCase()
console.log("the Upper is", newUpper);


// typeof operator/method
// datatype 
/*
string --> "this" or 'this'
number --> 2,4 , 4.5
booleans --> true,false
undefined, null, BigInt and Symbol
*/

let age = 22;
let firstNameS = "sarthak";
console.log(typeof (age));  // as a method
console.log(typeof firstNameS);  // as a operator

// conversion of number to string
age = age + ""  // "22"  --> 22
console.log("type1 -->", typeof (age));  // as a method
// converstion of string to number
age = +age
console.log("type 2-->", typeof (age));  // as a method


// as a num
let myNum = +"-90"
console.log("type 3 -->", myNum);
console.log("type 3 -->", typeof (myNum));

// string concation
// addion of two or many string 
let fname = "sarthak"
let lname = "shrstha"
let fullName = fname + " " + lname
console.log(fullName);

let str1 = "12"
let str2 = "13"
let concatStr = +str1 + +str2
console.log(typeof concatStr);

