// JS functions are executed in the order they are called, not the order they are written
function displayElement(displayme){
    document.getElementById("demo").innerHTML = displayme;
}

function displayOtherText(displayMe){
    document.getElementById("otherText").innerHTML = displayMe;
}

displayElement("Hello")
displayElement("Displaying?")

function add(x,y){
    let sum = x + y
    return sum
}

// To display the result of our function, we could write it like this
//let displayElement = add(9,10)
//displayElement(displayElement)

//displayElement(add(18+13))

// Or we could call the function within a new function
function displayAdd(x,y){
    let sum = x + y
    displayElement(sum)
}

displayAdd(14,16)
// We could also use a callback
// A callback is when we pass a function into another as an argument

function addWithCallback(x,y,callback){
    let sum = x + y;
    callback(sum);
}

// We don't need to use parenthesis when using a function as a callback
addWithCallback(10, 7, displayElement)

addWithCallback(24,25,displayOtherText)