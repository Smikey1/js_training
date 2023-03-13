// only for 4x optimized  --> Final

// ESv6 --> late 2015 --> concept of classes
// constructor
class CreateUser {
    // constructor method --> init method in JS
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    aboutMe() {
        console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
    }

    isAbove18 () {
        return this.age > 18
    }

    dance() {
        return "Dancing Dancing"
    }
}

console.log(CreateUser.prototype)
const user1 = new CreateUser("Sarthak", "Shrestha", 20)
const user2 = new CreateUser("Apple", "A", 10)
const user3 = new CreateUser("Ball", "B", 30)

console.log(user3)
console.log(user3.dance())
const output = user3.isAbove18()
console.log(output)

console.log("-------------")

for (let key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key)
    }
}