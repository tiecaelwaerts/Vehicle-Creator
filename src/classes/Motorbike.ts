// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class -DONE
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 2 elements
    // If not, create 2 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  
    // TODO: Implement the wheelie method
  wheelie(): void {
    return console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Motorbike class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Wheels: ${this.wheels.length}`);

  } 
  
}

// Export the Motorbike class as the default export
export default Motorbike;
