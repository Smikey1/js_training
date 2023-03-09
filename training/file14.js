//#1  iterables
// where loop is possible like string array are iterables
const myName = "Sarthak"
for (let char of myName) {
    console.log(char)
}

const arr1 = ["item1", "item2", "item3"]
for (let element of arr1) {
    console.log(element)
}

//#2 array like objects
// objects having length property and consist of indexing
console.log(myName.length)
console.log(myName[3])


// Sets
// --> it is iterable, store data, no order, no index, unique item only
const numList = [5, 7, 1, 9, 2, 3, 4, 5, 7, 1, 4]
const new_set = new Set(numList)
new_set.add("ok")
console.log(new_set)

const items = ["item1", "item2"]  // ram --> 0x29
const set1 = new Set()
set1.add(["item3", "item4"])
set1.add(1)
set1.add(items)
set1.add(2)
set1.add(["item3", "item4"])
console.log(set1)

// 0x11--> sarthak assignment --> d://new folder -->
// desktop --> 0x12-->0x11
// has method
if (set1.has(1)) {
    console.log("ok is alreadly")
} else {
    set1.add(9)
}


// clone using Object.assign
const obj1 = {   // memory obj1 --> 0x24
    "name": "Sarthak",
    age: 18
}

// const obj2 = obj1 // memory obj2 --> 0x24 --> same as obj 1

// const obj2 = {...obj1}  --> very very new new in JS
const obj2 = Object.assign({}, obj1)
obj1.address = "ktm"
console.log(obj1)
console.log(obj2)

// undo concept 
const wish_list = [p1, p2, p3, p4]
// const clone_wl = Object.assign([],wish_list)
const clone_wl = [...wish_list]
const poppedItem = clone_wl.pop()
//  button --> click --> undo -->
clone_wl.push(poppedItem);
// save or aarko page --> kunai event/action trigger
wish_list = clone_wl
