// only for optimized
const impUserMethod = {
    aboutMe: function () {
        console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
    },
    isAbove18: function () {
        return this.age > 18
    },
    dance: function () {
        return "Dancing Dancing"
    }
}

function createUser(firstName, lastName, age) {
    const user = Object.create(impUserMethod) // {}
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    return user
}

const user1 = createUser("Sarthak", "Shrestha", 20)
const user2 = createUser("Apple", "A", 10)
const user3 = createUser("Ball", "B", 30)
console.log(user3)
console.log(user3.dance())
const output = user3.isAbove18()
console.log(output)