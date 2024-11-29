// Aynchronous functions are functions that run in parallel with other functions

// The keyword 'async' makes the function return a promise


// setInterval allows you to specify a callback for your function
// Intervals are calculated in miliseconds, so this callback happens every second
setInterval(clock, 1000);

function clock(){
    let displayTime = new Date();
    document.getElementById("clock").innerHTML =
    displayTime.getHours() + ":" +
    displayTime.getMinutes() + ":" +
    displayTime.getSeconds() 
}

// setTimeout allows us to specify that a function is executed on a timer
setTimeout(sneakAttack, 10000)

function sneakAttack(){
    document.getElementById("timeout").innerHTML = "Surprise!";
}


// Promises allow us to combine what we call 'producing code' & 'consuming code'
// This way, we can have separate callbacks for success & failure

function myDisplayer(content){
    document.getElementById("promiseDisplay").innerHTML = content;
}

let PromiseDemo = new Promise(
    function(myResolve, myReject){
        let x = document.getElementById("testBar").value;
        // Producing code
        // Takes time to execute (not always a long time)
        if (x == 1){
            myResolve("OK");        
        }else{
            myReject("Error")
    }
});


// Consuming Code
// Waits for the promise to resolve before running
PromiseDemo.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
)

// ASYNC
// We can use the keyword 'async' to make the function return a promise

// New displayer

function asyncDisplayer(content){
    document.getElementById("asyncDisplay").innerHTML = content;
}

// Async function

async function asyncDemo(){
    return "Howdy";
}

asyncDemo().then()(
    function(value) {asyncDisplayer(value);}
);

// Await can only be used in an async function
// Await delays the function execution until the promise is resolved

async function awaitDisplayer(){
    let thisPromise = new Promise(function(resolve,reject){
        resolve("What's up gang?");
        reject("Everything's on fire!!!")
    });
    document.getElementById("awaitDisplay").innerHTML = await thisPromise;
}