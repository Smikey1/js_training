// switch statement
let day = 2;

switch (day) {
    case 0:
        console.log("It's Monday, time to wake up!");
        break
    case 1:
        console.log("It's Monday, time to wake up!");
        break;
    case 2:
        console.log("It's Monday, time to wake up!");
        break;
    case 3:
        console.log("It's Monday, time to wake up!");
        break;
    case 4:
        console.log("It's Monday, time to wake up!");
        break;
    default:
        console.log("ok")
}



/*
if (1 === day) {
    //execute this code
    console.log("It's Monday, time to wake up!");
}
else if (2 === day) {
    //execute this code
    console.log("It's Tuesday, time to wake up!");
}
else if (3 === day) {
    //execute this code
    console.log("It's Wednesday, time to wake up!");
}
else if (4 === day) {
    //execute this code
    console.log("It's Thursday, time to wake up!");
}
else if (5 === day) {
    //execute this code
    console.log("It's Friday, time to wake up!");
}
else {
    //execute this code
    console.log("It's ok, you can sleep in");
}
*/


// while loop vs for loop
// syntax: 
/*

# initalization
while (condition){
    //do sth
    increment
}

*/
let n = 0;
while (n < 10) {
    // back ticks symbol --> ` ` 
    // tilts synmobl --> ~
    // console.log("The value is:-->",n)
    console.log(`the value is:-->${n}`)
    n++;
}

let num = 15;
//  sum of n natural number --> sequence and series
// 1+2+3+4.....n
let totalSum = 0;  // yo falsy value ho ! Be aware
let k = 0;

while (k <= num) {
    totalSum += k
    k++;
}
console.log(`the total sum is: ${totalSum}`);
// n(n+1)/2
let myTotal = num * (num + 1) / 2
console.log(`the total sum is: ${myTotal}`);

// for loop
// syntax  
/*
# declaration 
 for (initialization OR declaration+initialization; condition; increment){
    # do sth
 }
*/
let mySum = 0
for (let i = 0; i <= 15; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
    if(i == 8){
        break;
    }
    mySum += i;
}
console.log(`My sum is:-->${mySum}`);

