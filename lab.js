class Cat {
    constructor(name, eyes, hair){
        this.name = name;
        this.eyes = eyes;
        this.hair = hair;
        this.legs = 4;
    }
    meow (string){
        console.log(string);
    }
    climb (){
        console.log("Cat climbs the tree");
    }
    stares (thing){
        console.log(`${this.name}` + " stares at " + "the " + thing + ".")
    }
}

const orangeCat = new Cat("Orange", "red", "blonde");
console.log(orangeCat);
orangeCat.meow("meows..");
orangeCat.climb();
orangeCat.stares("sky");

const blackCat = new Cat("Toby", "blue", "black");
console.log(blackCat);
blackCat.meow("I'm so lonely");
blackCat.climb();
blackCat.stares("abyss");
///////////////////////////////////////////////////////////////////////////////////
class Pirate {
    constructor(name, hair, age){
        this.name=name;
        this.hair=hair;
        this.age=age;
        this.legs = 1;
        this.eyes = 1;
    }
    curses(){
        console.log ("!@%&$#!%");
    }
    drinks(drink){
        console.log(`${this.name}` + " chugs down a large pint of " + drink + ".")
    }
    pirateStuff(){
        console.log(`${this.name}` + " is looking for their parrot.")
    }
}
const jollyRoger = [];
const blackPearl = [];

const capSparrow = new Pirate("Captain Sparrow", "black", 34);
const capEagle = new Pirate("Captain Eagle", "red", 51);
const capPigeon = new Pirate("Captain Pigeon", "brown", 41);

jollyRoger.push(capSparrow,capEagle,capPigeon);

const capTurtle = new Pirate("Captain Turtle", "green", 139);
const capFish = new Pirate("Captain Fish", "no hair", 20);
const capWhale = new Pirate("Captain Whale", "black", 57);

blackPearl.push(capTurtle,capFish,capWhale);
console.log(blackPearl);
console.log(jollyRoger);

// class Boat {
//   constructor(name, shipCapacity, color, speed) {
//     this.name = name;
//     this.shipCapacity = shipCapacity;
//     this.color = color;
//     this.speed = speed;
//   }
//   attacking (target) {
//     console.log(`${this.name}` + " is attacking " + target + "!")
//   }
//   docking (location){
//     console.log(`${this.name}` + " is docking at " + location + ".")
//   }
// }
// const meanBoat = new Boat("The Mean Boat", 100, "red", "fast as heck");
// console.log(meanBoat);
// meanBoat.attacking("The Black Pearl");
// meanBoat.docking("the Harbor");