let condition = 1

if(condition === true){
    console.log("Condition Met")
} else if (condition === false){
    console.log("Condition not met")
} else if (typeof condition == Number){
    console.log("Condition is a Number")
} else{
    console.log("Condition is not a Boolean Number")
}

let condition2 = 35

if(condition <= 30){
    console.log("Condition2 is less than or equal to 30")
}

frequency = 105;

switch(frequency){
    case 102:
        console.log("Hello")
        break;
    case 105:
        console.log("Bonjour")
        break;
    case 123:
        console.log("Hola")
        break;
}

temp = 30
daytime = false

// || means or
if(temp < 10 || temp > 37){
    console.log("stay inside weather is rough")
}           

// && means and
if(temp < 25 && daytime == false){
    console.log("its cold and late go home")
}

age = 70
if(age < 18){
    console.log("Not old enough to drink")
}
else if (age > 18){
    console.log("can drink")
} 

number = 71
if (number % 2 == 0 ){
    console.log("even number")
}
else {
    console.log("odd number")
}

num5 = 123
num6 = 6
if (num5 > num6 ){
    console.log("first is bigger")
} else if (num6 > num5){
    console.log("second is bigger")
} else if(num5 === num6){
    console.log("numbers are equal")
} else{
    console.log("those are'nt numberes")
}

x = 52
if (x > 100 ){
    console.log("x is higher than 100")
} else if(x > 50 ){
    console.log("x is higher than 50")
} else if(x > 20 ){
    console.log("x is higher than 20")
} else if(x > 10 ){
    console.log("x is higher than 10")
} else if(x > 5 ){
    console.log("x is higher than 5")
}

// 5

fizzbuzz = 18;

if (fizzbuzz % 3 === 0 && fizzbuzz % 5 ==0){
    console.log("fizzbuzz")
} else if (fizzbuzz % 5 ==0){
    console.log("buzz")
} else if (fizzbuzz % 3 === 0){
    console.log("fizz")
} else{
    console.log(fizzbuzz)
}
