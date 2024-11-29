// an api (application programming interface) allows us to pass information
// from 1 application to another
const demoElement = document.getElementById("demo1")

function Findme(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showMe)
    } else{
        demoElement.innerHTML = "Geolocation is not available"
    }
}

function showMe(position){
    demoElement.innerHTML = ("Latitude: " + position.coords.latitude
    + "<br>Longitude" + position.coords.longitude)
}

function login(){
    const inputObject = document.getElementById("loginBar");
    if (!inputObject.checkValidity()){
        document.getElementById("loginDemo").innerHTML = inputObject.validationMessage;
    } else {
        document.getElementById("loginDemo").innerHTML = "thank you for following instructions"
    }
}

// fetch allows us to make a request to a web server

// api call to PokeApi, logging all results up to 151
// Not currently being called
function listKantoPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon))
}

// Finding results for all poemon, using the fetchpokemon function

function fetchKantoPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon)
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url // Saving pokemon url to a variable to use in a fetch
    fetch(url)
    .then(response => response.json()) // formatting the response into a json file
    .then(function(pokeData){
        console.log(pokeData)
    })
}

// 'try' & 'catch'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151`'
try {
    fetch(baseUrl)
    .then(response => {
        const responseJson = response.json()
        return responseJson
        })
    .then(data => {
        const pokemons = data.results
        pokemons.forEach(pokemon => {
            document.getElementById('pokemons')
            .insertAdjacentHTML('beforeend', `<li onclick='detail("${pokemon.url}")'><button>${pokemon.name}</button></li>`)
            })
        })
    .catch(error => {
        console.error(error)
        })
} catch (error) {
    console.error(error)
}

const detail = (url) => {
    try {
        fetch(url)
            .then(response => response.json())
            .then(pokemon => {
             // Condition to check if mono or dual type
                document.getElementById('detail').innerHTML = ''
                document.getElementById('detail')
                // Inserts element in specified position, in this case, we're inserting it at the end of the current element
                    .insertAdjacentHTML('beforeend', // Template literal for pokemon information
                    `
                       <h1>${pokemon.name}</h1>
                       <img class=pokeImage" src="${pokemon.sprites.front_default}"/>
                    `
                    // Can add controls attribute to audio tag for playback controls
    
            
                                  )}
                )
            .catch(error => {
                console.error(error)
                })
        } catch (error) {
            console.error(error)
            }
    }

    //1. Display a pokemons shiny sprite

    //2. have a pokemons cry play as an audio file when you click their button

    //3. Display a pokemons type
    //3b. account for pokemon that have 2 type


function myFunction(){
var element = document.body;
element.classList.toggle("dark-mode");
}
