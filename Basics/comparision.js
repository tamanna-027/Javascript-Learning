//node Basics/comparision.js
//cd -> change directory
//ls -> list of files and folders in current directory
//pwd -> print working directory

// console.log(2>3); //false operators : > , < , >= , <= , == , !=
// console.log(2<3); //true
// console.log(2>=3); //false
// console.log(2<=3); //true
// console.log(2==3); //false
// console.log(2!=3); //true

//problem comes when we compare different data types
console.log(2=='2'); // true because '2' is converted to number 2 and then compared with 2
console.log("02" > 1); // true because "02" is converted to number 2 and then compared with 1

console.log(0==0); // true
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true. This is because when we compare null with a number using the >= operator, JavaScript converts null to 0 before making the comparison. So, it evaluates as 0 >= 0, which is true.
//comparision operators and equality operators works differently in js due to type coercion
console.log(undefined == 0); // false

//comparision and equality checks works differently in js due to type coercion
//type coercion is a process of converting one data type to another data type
//when we compare two values of different data types , js will try to convert them to the same data type before making the comparison
//in the above example , js will convert the string '2' to number 2 and then compare them , so it will return true

