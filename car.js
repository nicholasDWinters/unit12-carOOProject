class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        const { make, model, year } = this;
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!';
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newV) {
        const { vehicles, capacity } = this;
        if (newV instanceof Vehicle && vehicles.length < capacity) {
            this.vehicles.push(newV);
            return 'Vehicle added!';
        } else if (newV instanceof Vehicle && vehicles.length >= capacity) {
            return "Sorry, we're full!";
        } else {
            return 'Only vehicles are allowed in here!';
        }
    }
}



let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
let myFirstCar = new Car("Toyota", "Corolla", 2005);
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
let myGarage = new Garage(3);