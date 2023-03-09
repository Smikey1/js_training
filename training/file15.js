// optional chaining
const user = {
    firstName: "sarthak",
    // address: {city:"ktm",area:"Gongbu",postal_code:"44600"}
}

console.log(user?.firstName)
console.log(user?.lastName)
console.log(user?.address?.area)

