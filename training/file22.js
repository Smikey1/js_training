// only for 3x optimized

// constructor
function CreateUser(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
CreateUser.prototype.aboutMe = function () {
    console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
}

CreateUser.prototype.isAbove18 = function () {
    return this.age > 18
}

CreateUser.prototype.dance = function () {
    return "Dancing Dancing"
}

// console.log(createUser.prototype)
const user1 = new CreateUser("Sarthak", "Shrestha", 20)
const user2 = new CreateUser("Apple", "A", 10)
const user3 = new CreateUser("Ball", "B", 30)
console.log(user3)
console.log(user3.dance())
const output = user3.isAbove18()
console.log(output)

console.log("-------------")

for (let key in user1) {
    // console.log(key)
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}