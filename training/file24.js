// array and its prototype
const number = [1, 2, 3, 4]
console.log("🚀 ~ file: file24.js:3 ~ number:", number)


console.log("🚀 ~ file: file24.js:6 ~ Array.prototype:", Array.prototype)

//sabai ko prototype nai object
// but in js, it can be modified

function ok() {
    console.log("🚀 ~ file: file24.js:14 ~ :", "Are you ok")
}


console.log("🚀 ~ file: file24.js:16 ~ ok.prototype:", ok.prototype)

ok.prototype = []

ok.prototype.push("1")

console.log("🚀 ~ file: file24.js:16 ~ ok.prototype:", ok.prototype)


ok()
