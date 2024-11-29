// Single line comment

/*
    Multi
    Line
    Comment
*/

// CASES
// Helps with variable readability
snake_case = "snake_case";
PascalCase = "PascalCase";
lowerCamelCase = "lowerCamelCase";


// console.log outputs to console
console.log("Hello World")

// Variables
// Let initialises a variable
let age = 28;

myName = "Nibras";
// We can change the value of variables lower in our script doc
age = 15;

console.log(age)
console.log(myName)

// We can use const instead of let to create a variable that cannot change value
const myConst = 54;

console.log(myConst)

// var is similar to let, with different scope
var myVar = 22;

// DATA TYPES
let num1 = 5; // Number
let float1 = 2.2; // Number
let string1 = "This is a text field"; // Text field
let bool1 = true; // Boolean: true or false
console.log(typeof bool1);

// We can perform maths in javascript
sum1 = 5 + 3
sum2 = num1 + float1;

// Even with strings
sum3 = myName + " " + string1;

console.log(sum3);

let stringNum = "76"

let stringAdd = stringNum + sum1; // String
let stringSubtract = stringNum - sum1; // Number

console.log(typeof stringNum)

console.log(stringAdd)
console.log(typeof stringAdd)

// Mathematical Operators

// Add
add1 = 5 + 5;

// Subtract
minus1 = 10 - 7;

// Multiply
Mult1 = 5 * 10;

// Divide
div1 = 10 / 2;

// modulus (remainder)
mod1 = 5 % 2

mod2 = 10 % 5
console.log("mod1: " + mod1)
console.log("mod2: " + mod2)

// Checking if remainder of 10/5 is 0 (if 10 is divisible by 5)
divCheck = 10 % 5 == 0
console.log(divCheck)


// Logical Operators

// '!' means not
console.log(!true)

// == compares values
console.log(1 == "1")

// === compares values & data type
console.log(1 === "1")

console.log(10 + 10) // 20
console.log("10" + "10") // 1010
console.log("10" + 10) // 1010

let pain = 0.1 + 0.1 + 0.1 // 0.30000000000000004
console.log(pain)   // Happens because computers count in base 2, rather than base 10

let why = true + true + true
console.log(why) // 3
console.log(typeof why) // number

// undefined
let mysteryVariable;
console.log(typeof mysteryVariableS)

// Null value
let spookyVariable = null;
console.log(typeof spookyVariable)

// Explicit type conversion
console.log(typeof Number(stringNum))

greetNum = Number("Hi gang, good morning!") // turning string into number

console.log(greetNum + 5) // NaN, trying to read as number, but can't

console.log(15 + true) // 16
console.log("3" * true) // 3
console.log("43"/ false) // Infinity

// Create a variable for your favourite song, and the artist that recorded it, and output it all in a string

favsong = "Be the Monster"
artist= "Umeda Cypher"

songSentence = "My favourite song is " + favsong + " by " + artist

console.log(songSentence)

// Template Literal
// Passing variable values into a string
literalGreeting = `Hello ${myName}`
console.log(literalGreeting)

// Iterators

// add 1 to value
age++;

console.log(age);

// add specified amount to variable
age += 5;

console.log(age);

let myNewString = "This is my new string!!!!!"

// Properties describe the characteristics of Objects or variables
// The length property is the amount of characters in the string
console.log(myNewString.length);

// Methods are things that objects and variables can do
// toUpperCase converts a string to all capitals

console.log(myName.toUpperCase());

// 1. Convert your song string to a template literal

literalSong = `My favourite song is ${favsong} by ${artist}`

console.log(literalSong)

// 2. Use the uppercase method to shout your template literal
console.log(literalSong.toUpperCase());

// 3. Research the 'prompt' function, and use it to ask the user for their favourite food, and repeat that information back to them
// let favFood = prompt("What is your favourite food?");
// console.log(`Your favourite food is ${favFood}`)

// 4. research the 'math' object, and associated functions, and generate a random number between 1 & 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)

/* Stretch Goals
1. Create a decimal number, and use math to round it to it's nearest integer
2. Instead round your number DOWN
3. Research the difference between var & let
4. Research the uses for the Null & Undefined data types
*/

roundNumber = 2.7
console.log(Math.round(roundNumber))
console.log(Math.floor(roundNumber))