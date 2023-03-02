// introduction to array  --> ordered collection of items
// reference type
// how to create array
// yesko indexing-->0   1    2    3     4
let fruritArray = ["A", "B", "C", "D", "E"]
let numList = [1, 2, 3, 4, 5];

let mixed = [1, "Apple", true, "4", 5.2, -1]

console.log(fruritArray[fruritArray.length - 1]);

let myObject = {}
console.log(typeof fruritArray)
console.log(typeof myObject)
console.log(Array.isArray(fruritArray));
// false because object is not array
// console.log(typeof (fruritArray) == Array);

// method in array--> push and pop
fruritArray.push("F")
console.log(fruritArray)
let poppedFruit = fruritArray.pop()
console.log(fruritArray)
console.log(poppedFruit)