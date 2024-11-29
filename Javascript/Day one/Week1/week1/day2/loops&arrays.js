// arrays
let arr = [1, 5, "hi", true, null, 3]

const fruits = ["apple" , "pears", "banana", "mango"]

console.log(fruits)

// print a single entry
console.log(fruits[1])

// array.length tells 
console.log(fruits.length)

// finding the last index number in our array
console.log("==========")

//replacing data
fruits[1] = "melon"
console.log(fruits)

// add an item
fruits.push("peach")
fruits.push("orange")
console.log(fruits)

// remove the last element of your array
fruits.pop();
console.log(fruits);

// shift will remove the first element of the array
fruits.pop();
console.log(fruits);


//splice  let us remove an amount of entries, starting from an index point

fruits.splice(1,1)
console.log(fruits)

fruits.push("plum")
fruits.push("melon")
fruits.push("cherry")
console.log(fruits)

// we can also use splice to insert new entries
fruits.splice(2,1, "passionfruit") // at index point 2, delete nothing & add 
console.log(fruits)



console.log(fruits.join(" , "))
console.log("==========")

// loops

// for loop //count till 20
for(let i = 1; i<=20; i++){
    console.log(i)
}

// for loop reverse count
for(let i = 10; i>=0; i--){
    console.log(i)
}

// for loop can also iterate through arrays
for(let fruit of fruits){
    console.log(fruit);
}

// print out each letter of my name
myName = "Nibras" 
for(letter of myName){
    console.log(letter)
}


//while loops

// let x = 2
// while(x <= 20){
//    console.log(x)
//    x++
// } 

//1  print array

let myArray = [1,2,true,"hello", 5]

for (let item of myArray)[
    console.log(item)
]

//2 , 0 to 50 in 5's
int = 0

while(int <= 50){
    console.log(int)
    int+=5
}

//3  increment 

let counter = 0
let increment = 5
while(counter <= 500){
    console.log(counter)
    increment++
    counter+=increment;
}

//intermediate

//1

let number = 0
let add = true

while(number < 20){
    if(add == true){
        console.log(number)
        number +=2
        add = false
    }
    else if(add == false ){
        console.log(number)
        number -=1
        add = true
    }
}

let x = 1
while(x <= 20 ) {
    console.log(x)
    x+=2
    console.log(x)
    x--
}

//2

num10 = 12
iterator = 1
tick = true

while(num10 < 50 && num10 > -50){
    if(tick === true){
        console.log(num10)
        num10 += iterator
        iterator++
        tick = false
    } else{
        console.log(num10)
        num10 -= iterator
        iterator ++
        tick = true
}
    }

console.log("==============================")

// 3

fib1 = 1
fib2 = 0
fib3 = 0
counter = 1

while(counter<20){
    fib3= fib1+fib2
    fib2 = fib1
    fib1 = fib3
    console.log(fib3)
    counter++
}

// 4

for (let i = 1; i<=100; i++){
    let output = "";

    if(i % 3 === 0){output += "Fizz"}
    if(i % 5 === 0){output += "Buzz"}

    if (output===""){output = i;}

    console.log(output)
}

for (let i = 1; i<=100; i++){
    if(i % 3 === 0 && i % 5=== 0){
        console.log("FizzBuzz")
    } else if(i % 5 === 0){
        console.log("Buzz")
    } else if(i % 3 === 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}

