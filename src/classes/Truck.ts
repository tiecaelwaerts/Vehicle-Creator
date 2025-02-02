// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
 
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
  super();
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  if (wheels.length !== 4) {
    this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }
  this.towingCapacity = towingCapacity;
  }
  
  tow(vehicle: Truck | Motorbike | Car): void {
    if (!vehicle) {
      console.log('No vehicle to tow');
      return;
    }
    const { make, model, weight } = vehicle;

    if (weight <= this.towingCapacity) {
      console.log(`Towing ${make} ${model}`);
    } else {
      console.log(`${make} ${model} is too heavy to tow`);
    }
  }
   
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels}`);
  }
}

// Export the Truck class as the default export
export default Truck;
