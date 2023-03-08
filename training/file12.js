// important array methods
const numbers = [3, 5, 4, 8, 2]
// forEach --> map --> filter --> reduce

// forEach
function multiplyBy2(number, index) {
    console.log("Index is-->", index)
    console.log(number * 2)
}


// for (let i=0; i<=numbers.length;i++){
//     multiplyBy2(numbers[i], i)
// }

numbers.forEach(multiplyBy2)
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


// map
let square_finder = function (number) {
    return number * number;
}
const returned_value = numbers.map(square_finder)
console.log(returned_value)

// let array = []
// for(let user of userList){
//     array.push(user.name)
// }
// console.log(`mY array is: --> ${array}`)

// let user_name_fuct = (user)=>user["name"]

const returned_name = userList.map((user) => user["name"])
console.log(returned_name)

// filter method
let filter_func = function (element) {
    return element % 2 === 0
}

const returned_num = numbers.filter(filter_func)
// const returned_num = numbers.filter((elemnet)=>elemnet%2===0)
console.log(returned_num)

let productList = [
    { productName: "laptop", price: 10000 },
    { productName: "mobile", price: 12000 },
    { productName: "desktop", price: 15000 },
    { productName: "ok", price: 18000 },
    { productName: "hello", price: 7000 }
]
const returned_product = productList.filter((product) => product.price <= 12000)
console.log(returned_product.map(p=>p.productName))


// reduce method:
const sum = numbers.reduce((previousValue,currentValue)=>previousValue+currentValue)
// working way
  // prev   next   return 
    // 3       5       8
    // 8       4       12
    // 12      8       20
    // 20      2       22
console.log(sum)



let cartList = [
    { productId:1,productName: "laptop", price: 10000 },
    { productId:2,productName: "mobile", price: 12000 },
    { productId:3,productName: "desktop", price: 15000 }
]
let initalTotal = 0
const totalAmt = cartList.reduce((totalPrice,product)=>totalPrice+product.price,initalTotal)
console.log(totalAmt)