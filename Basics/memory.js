// Memory Management in JavaScript
// ls -> cd javascript-learning -> cd Basics -> node memory.js

let firstName = "tanu"
let naMe = firstName
naMe = "tanushree"

console.log(firstName)
console.log(naMe)

// primitives data types are stored in stack and non primitive data types are stored in heap memory
// data stored in stack is stored as a value and data stored in heap is stored as a reference

let person = {
    name : "tanu",
    age : 23
}

let person2 = person
person2.age = 24

console.log(person)
console.log(person2)

// when we assign a non primitive data type to another variable it is stored as a reference and both the variables point to the same memory location in heap and any change made to one variable will affect the other variable as they are pointing to the same memory location.