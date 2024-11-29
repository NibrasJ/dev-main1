// Up to this point, we've been creating objects manually, but this is not always efficient
// We can create functions to create new objects for us
// we call these functions 'constructors'


function Car (topSpeed, electric, colour, doors){
    this.topspeed = topSpeed;
    this.electric = electric;
    this.colour = colour;
    this.doors = doors;
}

const myNewCar = new Car(130, false, "Terqouise", 5)
const dalesNewCar = new Car(140, true, "Grey", 5)

console.log(myNewCar.topSpeed)
console.log(dalesNewCar)


