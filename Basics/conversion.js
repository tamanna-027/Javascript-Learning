//node Basics/conversion.js
let score = '45abc'
 console.log(typeof score)
 console.log(typeof (score)) // passing as a method argument

 let valueInNumber = Number(score) // converting string to number
    console.log(typeof valueInNumber)
    console.log(valueInNumber) // NaN : Not a number


    let s = null
 console.log(typeof s)
 console.log(typeof (s)) // passing as a method argument

 let valueNum = Number(s) // converting string to number
    console.log(typeof valueNum)
    console.log(valueNum) // NaN : Not a number

    // conversion rules
    // string -> NAN
    // boolean -> 1 for true , 0 for false
    // null -> 0
    // undefined -> NAN
    // number -> number
    // bigint -> error


    // let value = 187  // empty string is considered as false
    // let booleanValue = String(value)
    // console.log(typeof booleanValue)
    // console.log(booleanValue) // true

    // ********************** Operations ************************** */

    let value = 3 
    let negValue = -value
    console.log(negValue)

    // ** exponentiation operator
    console.log(3**3) // 3^3 = 27

    let str1 = "Hello "
    let str2 = "World"
    console.log(str1 + str2) // Hello World

    // ToPrimitive conversion
    console.log('3' + 2) // '32' string
    console.log(2+3 + '3') // '53' string
    console.log('3' + 2 + 3) // '323' string

// tricky conversions
console.log(true)
console.log(+"")

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2

console.log(num1 , num2 , num3)

// prefix and postfix increment/decrement operators
// refer to mdn doc for better understanding
let gameCounter = 100
gameCounter++;
console.log(gameCounter);
