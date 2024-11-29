sayHello()

function sayHello(){
    console.log("Hello World!")
}

sayHello()

//function to add 2 numbers together
// x & are or arguments, which are placeholders for actual
function add(x,y){
    return x + y
}
// logs result of 3+5
console.log(add(3,5))

// function being passed in as a parameter
console.log(add(add(3,4),7))

//will only add first 2 numbers
console.log(add(3,4,5,6))

console.log(add("Hi", " Hello"))

// calling a function, and stored its output in a variable
addTest = add(33,77)
console.log(addTest)

//arrow function
// is not hoisted, helps us avoid conflicts
const arrowAdd = (x,y) =>{
    return x + y
}

// implicit return
// works the same, but does'nt use the 'return' keyword
// shorter to write, but may be harder to read
const implicitAdd = (x,y) => x+y;

console.log(implicitAdd(3,2))

// function expression
// assigns a function to a variable
// largly used to control the scope
// allow the function the remain anonymous

const funcAdd = function(x,y){
    return x+y
};

console.log(funcAdd(44,123))

//1
function add(x,y){
    return x + y
}
// logs result of  x + y
function subtract(x,y){
    return x - y
}

function multiply(x,y){
    return x * y
}

function task1(add1, add2, sub, mult){
    return(multiply(
        subtract(sub, add(add1, add2)), mult
    ))
}

console.log(task1(7,3,2,5))

// 2. Create a function to add two pairs of numbers together, then multiply the two results together
function multAdd(w,x,y,z){
    output = (w+x) * (y+z)
    return output
}

console.log(multAdd(3,2,6,5))

// 3a. Create a function to play fizzbuzz with a single number, with the aim to expand it in the future
// 3b. Add a condition for 'bang' to be added on all multiples of 7

function fizzBuzz(num){
    output=""
    if(num % 3 == 0) {output += "Fizz";}
    if(num % 5 == 0) {output += "Buzz";}
    if(num % 7 == 0) {output += "Bang";}

    if(output== ""){output = num;}
    return output;
}

console.log(fizzBuzz(105))