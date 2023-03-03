// creation of js-object

const person = {
    "name": "Sarthak",
    "age": 20,
    "fav food": ["apple", "banana"]
}
// access data from js object
console.log(person["name"])
console.log(person.name)
console.log(person["age"])
console.log(person["fav food"])

// add new value to object
// key xa bhane add update garxa, xaina bhane add garxa
person["class"] = 12

console.log(person)

// loop in object--> {}

for (let key in person) {
    console.log(`${key}:${person[key]}`)
}

for (let key of Object.keys(person)) {
    console.log(`${key}:${person[key]}`)
}

const user_bio = {
    "name": "Apple",
    "age": 12,
    "dob": 2022,
    "favFood": "Banana"
}

// name must be name
let { name, age, favFood } = user_bio
console.log(favFood)


// complex data

const user_list = [
    {
        "userId": 1,
        "name": "Apple",
        "age": 12,
        "dob": 2022,
        "favFood": "Banana"
    },
    {
        "userId": 2,
        "name": "Ram",
        "age": 52,
        "dob": 3022,
        "favFood": "Banana"
    },
    {
        "userId": 3,
        "name": "Kumar",
        "age": 22,
        "dob": 1022,
        "favFood": "Banana"
    }
]

for (let user of user_list) {
    console.log(user["age"])
}

// same work with nested de-structing
const [user1,user2,user3]=user_list
console.log(user1["age"])