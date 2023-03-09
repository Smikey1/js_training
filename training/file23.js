// ONLY FOR UNDERSTANDING THE CONCEPT OF 
// new keyword

const my_array = new Array(1, 2, 3)
console.log(my_array)

const my_set = new Set([1, 2, 3])
console.log(my_set)

function createUser(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

createUser.prototype.aboutMe = function (){
    console.log(`Full name:${this.firstName} ${this.lastName} and Age: ${this.age}`)
}

// what does new keyword do:
// 1st ma --> empty object banauxa with linking own prototype --> this = {}
// 2nd --> auto return hunxa this

const user1 = new createUser("Apple","A",20)

// undefine aauxa because the lack of new
user1.aboutMe()
console.log(user1)