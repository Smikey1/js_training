// parameter destructuring --> dp
const person = {
    "name": "Sarthak",
    "gender": "male",
    "age": 18
}

// let myNname = person.name
// let mygender = person["gender"]

let { name, gender, age } = person
console.log(age)


function any(obj) {
    console.log(obj["name"])
}

// parameter destructuring
function any2({ name, gender, age }) {
    console.log(name)
    console.log(gender)
    console.log(age)
}

any(person)
any2(person)