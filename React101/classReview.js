// the pre-ES6 way

// function Car (make, model){
//     this.make = make;
//     this.model = model;
// }

// Car.prototype.updateModel = function(newModel){
//     this.model = newModel
// }

// let myCar = new Car('Honda', 'Accord');
// console.log(myCar)

// myCar.updateModel('Civic');
// console.log(myCar)

//ES-6

class Car{
    // if you want to use the word 'this' inside of a class,
    // you MUST call the constructor function
    constructor(make, model, mpg, tankSize){
        this.make = make;
        this.model = model;
        this.mpg = mpg;
        this.tankSize = tankSize;

    }
    // intead of having to use 'prototype', just put the methods in the class
    updatModel(newModel){
        this.model = newModel;
    }
    distanceToEmpty(){
        console.log(this.mpg * this.tankSize + "miles left")
    }
    turnOn(){
        console.log("Car is on!")
    }
}

let gregsCar = new Car("Toyota", "Camry", 36, 15)
gregsCar.distanceToEmpty();

// extends allows for inheritance to subclasses
class ElectricCar extends Car{
    constructor(make, model, batteryLife){
        super(make, model)
        this.batteryLife = batteryLife 
        
    }
    // because this method name is the same, this is called 'over-riding'; 
    // it will replace the parent method
    distanceToEmpty(){
        console.log(this.batteryLife * 10)
    }
}

let davidCummingsCar = new ElectricCar('Tesla', 'X', 100)
davidCummingsCar.distanceToEmpty();