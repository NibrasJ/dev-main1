const Car ={
    topSpeed: 140,
    mileage: 0,
    fourwheeldrive: true,
    drive: function(){
        console.log("Vroom Vroom")
        return "Vroom Vroom";
    }

}

console.log(Car.topSpeed)

const Me={
    name: "Nibras",
    age: 21
}

const You={
    name: "Elliot",
    age: 28
}

const Him={
    name: "Matt",
    age: 25
}

// finding the oldest person in the group

const people = [Me, You, Him]

let oldest = {age:0};

for(const person of people){
    if (person.age > oldest.age)
        {oldest = person}
}

console.log(oldest);
Car.drive();

//1.

const Vehicle1={
    type: 'Car',
    topSpeed:120,
    wheels:4
}

const Vehicle2={
    type: 'bike',
    topSpeed: 140,
    wheels: 2
}

const Vehicle3={
    type: 'boat',
    topSpeed: 130,
    wheels: false
}

//2.

const garage = [Vehicle1, Vehicle2, Vehicle3]

//3 

let fastest = {topSpeed:0}

for(const vehicle of garage){
    if(vehicle.topSpeed > fastest.topSpeed){
        fastest=vehicle
    }
}

console.log(fastest.type)