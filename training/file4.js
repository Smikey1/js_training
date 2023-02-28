// concept of ternary operator (to)
// to-in python-->: value if condition else value

/*
let fname = "Sarthak"
let quote;
if(fname[0]==="S"){
    quote = "Name starts with S are lucky"
} else {
    quote = "Unlucky"
}
*/
// same above program with to 
// syntax to: condition ? true_if_value : false_else_value

let fname = "Sarthak"
let age = 12;
let quote = fname[0] === "S" ? "Name starts with S are lucky" : "Unlucky";
console.log(quote);

// and or operaror
// syntax: and operator --> &&
// syntax: or operator --> ||

if (fname[0] === "S" && age >= 15) {
    console.log("condition 1 ok");
} else {
    console.log("condition 1 not ok");
}

if (fname[0] === "S" || age >= 10) {
    console.log("condition 2 ok");
} else {
    console.log("condition 2 not ok");
}

let temperature = 15;
if (temperature < 0) {
    console.log("extremly cold");
} else if (temperature < 15) {
    console.log("halka halka cold");
} else if (temperature < 40) {
    console.log("thorai garmi");
} else if (temperature < 50) {
    console.log("dheari garmi");
} else {
    console.log("toooo hot");
}


// nested if else
let winningNum = 10
let userGuess = 15;
// let userGuess = +prompt("Enter a num"); // promt ko value always string ma
console.log(typeof userGuess)
if (userGuess === winningNum) {
    console.log("Your guess is right");
} else {
    if (userGuess < winningNum) {
        console.log("Too low");
    } else {
        console.log("Too High");
    }
    console.log("Your guess is wrong");
}