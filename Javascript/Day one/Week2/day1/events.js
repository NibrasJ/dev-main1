// Click Event Listener
const button = document.getElementById("clickButton");

button.addEventListener("click",() =>{
    console.log("Button was clicked");
});

// Mouse Over Event Listener
const hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", () =>{
    console.log("Mouse over hoverDiv");
    hoverDiv.style.backgroundColor = "hotpick"
})

hoverDiv.addEventListener("mouseout", () =>{
    console.log("Mouse has left the div");
    hoverDiv.style.backgroundColor = "limegreen";
});

// Input Focus Event Listener
const inputField = document.getElementById("textinput");

inputField.addEventListener("focus", () =>{
    console.log("input field in focus");
    inputField.style.backgroundColor = "orange"
})

inputField.addEventListener("blur", () =>{
    console.log("input field lost focus");
    inputField.style.backgroundColor = "";
})

// Form Submit Event Listener

const form = document.getElementById("myForm");
form.addEventListener("submit", (submission) =>{
    submission.preventDefault(); // Prevents form from actually submitting
    console.log("form submission successful")
})


/*
1: using an event listener, create an element that alternates between showing an image and hiding an image on hover

2: Create a text input field and a submit button. Using an event listener on the button, add an element to the DOM that contains the value of the text in the input field

3: Research different types of events, and see what information you have access to with the event obect. Think about how this could be used.
*/

//1
const hoverImg = document.getElementById("hoverImg");

hoverImg.addEventListener("mouseover", () => {
    hoverImg.style.opacity - 1;
    console.log("Troll Face")
})
hoverImg.addEventListener("mouseout", () =>{
    hoverImg.style.opacity = 0;
    console.log("")
})

//2
const formInput = document.getElementById("formInput")
const taskForm = document.getElementById("q2")

taskForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("Form submitted, text should appear on page")
    let newText = document.createElement("p");
    newText.textContent = formInput.value;
    document.body.appendChild(newtext);
})