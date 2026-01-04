// node Basics/data_types.js

// "use strict"; // Enabling Strict Mode , treat all JS code as modern

// alert("Welcome to JS Basics Data Types File"); 
// Alert Function to show alert box to user we r using node js so alert is not supported

console.log("Data Types in JS") 

// ecma scrpt provide standard data types in js
// documentation to refer : mdn 

// 1. number , have a range of values : 2^53 to -(2^53)
// bigint : to represent whole numbers larger than 2^53

// 2. string : sequence of characters , '' , "" , ``

// 3. boolean : true , false

// 4. undefined : when variable is declared but not assigned any value , by default its value is undefined , representation of empty value

// 5. null : when we want to clear the value of a variable , we assign it null
// null is a standalone value that represents "no value" example : if a server has no data to send back , it can send null to indicate the absence of data

// 6. symbol : used to create unique identifiers for objects , mostly used in react js

// 7. object : used to store collections of data and more complex entities . very important in real life applications


// typeof operator : to know the data type of a variable
// if we want to find typeof null the javascript will return object due to a bug in the language that has been present since its inception. This behavior is now considered a legacy issue, and it is unlikely to be fixed due to the potential for breaking existing code. So we have to take care of it while working with null values.

// for other data types it works fine 

console.log(typeof 'tamanna'); // string
console.log(typeof 34); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);