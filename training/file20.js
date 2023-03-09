// ONLY FOR UNDERSTANDING THE CONCEPT OF 
// Reference object & __proto__ , [[prototype]], prototype Keyword

const myObj1 = {
    key1: "my value 1",
    key2: "my value 2",
}

// const myObj2 = {
//     key3: "my value 3",
// }
// console.log(myObj2.key1)

// creating empty object
// const myObj2 = {}

//one more way to create empty object
const myObj2 = Object.create(myObj1)
// my obj2 is considered as a proto of myobj1

myObj2.key3 = "my value 3"

console.log(myObj2)
console.log(myObj2.key3)
console.log(myObj2.key1)

console.log(myObj2)


// why this...???
// tyo reference lai hamle __proto__ bhanxam

// __proto__ --> exactly same as --> [[prototype]]
// offical doc of esmascript --> [[prototype]]

// __proto__ is not same as prototype 200% not same.




// js ko function --> fuction + object
function test1() {
    // and only function will provide prototype
    // prototype is in the form object --> which is free for use
    // i mean --> function banauda yuta empty object (constructor hunxa) free ma dinxa
    console.log("This is test")
}

test1()
console.log("----------------------")
// test1.prototype = [] // type can be change
console.log(test1.prototype)

// and only function will provide prototype
function abc(){
    console.log("ok")
}
// const abc = [1, 2, 3]
// const abc = { "name": "Apple" }

if (abc.prototype){
    console.log("prototype xa ")
} else {
    console.log("prototype xaina")
}
const user = {}
user.name ="sarthak"
console.log(user)

abc.prototype.firstName = "K xa"
abc.prototype.lastName = "Ok"
abc.prototype.dance = function (){
    return "Dancing Dancing"
}

console.log(abc.prototype)

