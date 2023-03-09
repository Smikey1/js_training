
function createUser(firstName, lastName, age) {
    const user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.aboutMe = function () {
        console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
    }
    user.isAbove18 = function () {
        return this.age > 18
    }
    return user
}

const user1 = createUser("Sarthak", "Shrestha", 20)
const user2 = createUser("Apple", "A", 10)
const user3 = createUser("Ball", "B", 30)
console.log(user3)
const output=user3.isAbove18()
console.log(output)