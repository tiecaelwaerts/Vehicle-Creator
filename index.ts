// import classes
import Truck from "./src/classes/Truck.ts";
import Car from "./src/classes/Car.ts";
import Motorbike from "./src/classes/Motorbike.ts";
import Wheel from "./src/classes/Wheel.ts";
import Cli from "./src/classes/Cli.ts";

// create an array of vehicles

const vehicles: (Truck | Car | Motorbike)[] = [];

// TODO: uncomment once trucks are implemented
const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// TODO: uncomment once motorbikes are implemented
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
