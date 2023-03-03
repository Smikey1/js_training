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
console.log(fruritArray)
console.log(poppedFruit)

// sift and unshift in array
fruritArray.unshift("G")
fruritArray.unshift("H")

console.log(fruritArray)
let removedItem = fruritArray.shift()
// sift remove first item from array
console.log(fruritArray)

console.log(removedItem);

// let vs const in array:
const mixedArray = [1, "Apple", true, "4", 5.2, -1]
// mixedArray = []
mixedArray.push("A")
console.log(mixedArray);


// cloning array and concat array
const arr1 = ["Item 1", "Item 2"]
const arr2 = ["Item 3", "Item 4"]
const arr3 = arr1.concat(arr2)
console.log(arr3)
console.log(arr1 === arr2)

// ... spread-operator # cloning
const arr4 = [...arr1, ...arr2, "Item 5"]
const cloneArray = [...arr1]
console.log("My array 4-->", arr4)
const arr12 = [..."123456789"]
console.log(arr12)

// for loop in array
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i])
}

// how to convert all item in array to uppercase
const newArray = [];
for (let i = 0; i < arr4.length; i++) {
    newArray.push(arr4[i].toUpperCase())
}
console.log(newArray)

// advance for loop
for (let item of arr4) {  // in --> index and of --> object
    console.log("My item -->", item)
}

// which loop we mostly user for array --> for of loop

// array de-structuring
const myArr = ['ITEM 1', 'ITEM 2']
// let [firstName,lastName,age] = req.body
let [i1, i2] = myArr
console.log(i1)