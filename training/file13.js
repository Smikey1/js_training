const numbers = [5, 9, 1300, 400, 3000]
// expeted --> 5,9,400,1300,3000
console.log(numbers)

// Sorting
numbers.sort((a, b) => a - b) // asc
numbers.sort((a, b) => a - b) // desc
// 1st step--> convert to ascii character to map decimal value
// ["5","9","1300","400","3000"]
// [53,57,49,52,51]
// [49,51,52,53,57]-->[1300,3000,400,5,9]
console.log(numbers)

// number Sorting


nameList = ["apple", "sarthak", "APPLE", "banana", "sandip", "cow"]
nameList.sort()
console.log(nameList)

// a = 10, b= 14
// a o b = a-b => 6 = +ve positive --> 
// b must come before a 
// else b comes after a

function mySortingNumber(a, b) {
    return a - b
}

let productList = [
    { productName: "laptop", price: 10000 },
    { productName: "mobile", price: 12000 },
    { productName: "desktop", price: 15000 },
    { productName: "ok", price: 18000 },
    { productName: "hello", price: 7000 }
]

// price range --> low to High
productList.sort((a, b) => a.price - b.price)
console.log(productList)


// find method:
const ans = nameList.find((name) => name.length === 7)
console.log(ans)

// every method and some --> in python all and any method
const even_list = [2, 4, 6, 8, 9]
const ans1 = even_list.every((num) => num % 2 === 0)
const ans2 = even_list.some((num) => num % 2 === 0)
console.log(ans1)
console.log(ans2)

// fill method --> value , start position, end position
const arr = [1,2,3,4,5,6]
arr.fill(0,2,5)
console.log(arr)

// splice method --> start, delete, insert
const arr2 = ["item1","item2","item3","item4","item5"]
let num_You_Want_to_delete =2
const returned = arr2.splice(2, num_You_Want_to_delete, "new item 3", "new item 4")
console.log(arr2)
console.log(returned)
