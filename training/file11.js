// Higher Order function:
// --> because of callback function, function return function

// callback function:
function mainFunction(callback) {
    // console.log(params)
    console.log("Hello!, I am from Main Function")
    callback("apple")
}

function anotherMain(value) {
    console.log("Another function", value)
}

// mainFunction((value) => console.log("Another function", value))
mainFunction(anotherMain)


// function returning function
function myFunc() {
    let one_line_arr_func = () => console.log("I am wrapper function");
    return one_line_arr_func
}

const returnAsAFunc = myFunc(); // my func return a arrow funct
console.log(returnAsAFunc()) // excuting the returned func by myFunc