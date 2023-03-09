// methods
// function inside object

function myBio() {
    // console.log(this)
    console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
}
const user1 = {
    firstName: "Sarthak",
    age: 19,
    aboutMe: function () {
        console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
    }
}
const user2 = {
    firstName: "Apple",
    age: 12,
    aboutMe: function(lastName,address,country){
        console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
        console.log(`Mr.${lastName} leave in:-->${address},${country}`)
    }
}
const user3 = {
    firstName: "Ball",
    age: 9,
}

user1.aboutMe()
// user2.aboutMe()

// three important methods --> call, apply, bind

// user3.aboutMe()
// call method
user2.aboutMe.call(user3,"SHRESTHA","KTM","Nepal")
// taking help from other object to execute our data

// apply method
const param_list = ["PQRS", "Butwal", "Nepal"]
user2.aboutMe.apply(user3,param_list)

// bind
const output = user2.aboutMe.bind(user3,"ABCD","Pokhara","Nepal")
output()

// 99% makes mistake in
// user1.aboutMe()
const store = user1.aboutMe.bind(user1)
store()



// arrow function use na garnu in method, 
// because it don't have their own this keyword

console.log("-------------------")

const test_user = {
    firstName: "Test User",
    age: 0,
    aboutMe: ()=> {
        console.log(`Your name is:${this.firstName} and age is: ${this.age}`)
    },
    isAbove18(){
        return this.age > 18
    }
}

test_user.aboutMe()