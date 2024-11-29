// dom manipulation allows us to make changes to our webpage 

// creating a new element for your page
const newParagraph = document.createElement("p")
newParagraph.textContent = "if this is on the page, newParagraph"

document.body.appendChild(newParagraph)

const newHeading = document.createElement("h1")
newHeading.textContent = "this is my new heading, i am very proud"
document.body.appendChild(newHeading)

newHeading.style.color="Red"
newHeading.style.backgroundColor="Cyan"

document.body.style.backgroundColor="green"

function newElement(type,text){
    let newText = document.createElement(type);
    newText.textContent = text
    document.body.appendChild(newText)
}

// change styling of an element 
function bigAndRed(){
    document.getElementById("stickman").style.color = "red"
    document.getElementById("stickman").style.fontSize = "150px"
    
}

function accessDenied(){
    alert("Sorry, nice try")
    location.href="page2.html"
}

//1a create a function to add text to your page
//1b add a button to your page that triggers the function
function newHeader(){
    const newHeading2 = document.createElement("h1")
    newHeading.textContent = "this is also my new heading"
    document.body.appendChild(newHeading2)
}

//2a create a new page with text on it and style
//2b write a function which can be applied to a button to toggle
function toggleDark(){
    if(document.body.className==='dark'){
        document.body.className = 'light'    
    } else if(document.body.className === 'light'){
        document.body.className = 'dark'
    }
}

function shortToggleDark(){
    document.body.classList.toggle("dark")
}

//3 add buttons to your page to increase and decreasse you counter button

let count = 0;

function reset(){
    count = 0
    document.getElementById("counter").value = count;
}

function addOne(){
    count++
    document.getElementById("coutner").value = count;
}

function addTen(){
    count+= 10
    document.getElementById("coutner").value = count;
}

//4a create an input field & button to allow users to submit text
//4b alter your function so each post has a backround colour

function newerElement(type,text){
    let newText = document.createElement(type);
    newText.textContent = text
    newText.backgroundColor = "yellow"
    document.body.appendChild(newText)
}