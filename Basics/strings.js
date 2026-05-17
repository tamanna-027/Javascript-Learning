//strings in javascript are used to represent text. They are enclosed in single quotes, double quotes or backticks.
let objectName = 'anything'
let numBer = 123

console.log(`The name of the object is ${objectName} and the number is ${numBer}`)

//this is called template literals in javascript and it is used to create a string with embedded expressions. It is enclosed in backticks and the expressions are enclosed in ${}.
//instead of using + operator to concatenate strings we can use template literals to create a string with embedded expressions. It makes the code more readable and easier to maintain.

let newString = 'this-string'
// some important functions of string are length, toUpperCase, toLowerCase, indexOf, slice, substring, substr, replace, split, trim, charAt, charCodeAt, includes, startsWith, endsWith etc.

console.log(newString.length) // this will print the length of the string
console.log(newString.toUpperCase()) // this will convert the string to uppercase
console.log(newString.toLowerCase()) // this will convert the string to lowercase
console.log(newString.indexOf('s')) // this will return the index of the first occurrence of 's' in the string
console.log(newString.slice(0, 4)) // this will return the substring from index 0 to index 4 (not inclusive)
console.log(newString.substring(0, 4)) // this will return the substring from index 0 to index 4 (not inclusive)
console.log(newString.substr(0, 4)) // this will return the substring from index 0 to index 4 (not inclusive)
console.log(newString.replace('string', 'newString')) // this will replace 'string' with 'newString' in the original string
console.log(newString.split('-')) // this will split the string into an array of substrings based on the delimiter '-'
console.log(newString.trim()) // this will remove whitespace from both ends
console.log(newString.charAt(0)) // this will return the character at index 0
console.log(newString.charCodeAt(0)) // this will return the Unicode of the character at index 0
console.log(newString.includes('string')) // this will return true if the string contains 'string'
console.log(newString.startsWith('this')) // this will return true if the string starts with 'this'
console.log(newString.endsWith('string')) // this will return true if the string ends with 'string'