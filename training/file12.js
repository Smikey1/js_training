// important array methods
// forEach --> map --> filter --> reduce

const numbers = [3, 5, 4, 8, 2]

function multiplyBy2(number, index) {
    console.log("Index is-->", index)
    console.log(number * 2)
}


// for (let i=0; i<=numbers.length;i++){
//     multiplyBy2(numbers[i], i)
// }

// numbers.forEach(multiplyBy2)
numbers.forEach((number, index) => console.log(`${number}x${index}=${number * 2}`))

const userList = [
    { name: "Apple", age: 23 },
    { "name": "Ball", "age": 34 },
    { name: "Sarthak", age: 40 },
    { name: "Cat", age: 22 },
]

// for (let i = 0; i <= userList.length; i++) {
//     console.log(userList[i]["age"] + "@abc.com")
// }

// for (let user of userList) {
//     console.log(user.age + "@abc.com")
// }

userList.forEach((user) => console.log(user["name"]))

