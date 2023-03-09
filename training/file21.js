// only for 2x optimized

function createUser(firstName, lastName, age) {
    const user = Object.create(createUser.prototype) // {}
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    return user
}
createUser.prototype.aboutMe = function () {
    console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
}

createUser.prototype.isAbove18 = function () {
    return this.age > 18
}

createUser.prototype.dance = function () {
    return "Dancing Dancing"
}

// console.log(createUser.prototype)
const user1 = createUser("Sarthak", "Shrestha", 20)
const user2 = createUser("Apple", "A", 10)
const user3 = createUser("Ball", "B", 30)
console.log(user3)
console.log(user3.dance())
const output = user3.isAbove18()
console.log(output)