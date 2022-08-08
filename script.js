class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        console.log("beep")
    }

    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk();
// myFirstVehicle.toString();
/////////////////////////


class Car extends Vehicle {   
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }   
}
/////////////////

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return `VROOM!!!`
    }
}

////////////////

class Garage{
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if(!newVehicle instanceof Vehicle) {
            return `Only vehicles allowed in here!` 
        } 
        else if(this.vehicles.length >= this.capacity){
            return `Sorry we're full!`
        }
        else {
            this.vehicles.push(newVehicle);
            return `Vehicle added`
        }
    }
}


let garage = new Garage(2);

garage.add(new Car("Hyundai", "Elantra", 2015));
