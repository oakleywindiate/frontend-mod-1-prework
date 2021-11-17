// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Plant Person";
var specialAbility = "give plants life";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello! I am " + heroName + "!";
<<<<<<< HEAD
var catchPhrase = "I can " + specialAbility + " no matter what!";
=======
var catchPhrase = "I can " + specialAbility + " no matter what!"

>>>>>>> d6dac1bd09426b52c2d9749b97f5e4186e0b7d8a

// Declare two variables - power AND energy - set to integers

var power = 5;
var energy = 10;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Desert Guy", "Goat Boy", "Chemical Nightmare"];
var sidekicks = ["Fertilizer Fairy", "Green Mean Man", "Fungi"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Ice Entity");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
 if (dangerLevel > 50) {
      console.log(badExcuse);
    } else if ((dangerLevel >= 10) && (dangerLevel <= 50)) {
      console.log(saveTheDay);
    } else if (dangerLevel <= 9) {
      console.log("Meh. Hard pass.");
    }
};

var badExcuse = "I'm low on fertilizer!";
var dangerLevel = 5
var saveTheDay = "I love the Sun!";

assessSituation(99, saveTheDay, badExcuse);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Greg",
  smell: "feet",
  weight: 220,
  citiesDestroyed: ["Greenwood", "Frankfurt", "Smallville"],
  luckyNumbers: [4, 79, 21],
  address: {
    number: 2879,
    street: 'Love Lane',
    state: 'Georgia',
    zip: 37849
  }
};


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor(name, superpower, age, archNemesis, powerLevel, energyLevel) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;

  }

  sayName(name) {
    this.name = name;
  }

  maximizeEnergy(energyLevel) {
   this.energyLevel = 1000;

  }

  gainPower(powerLevel) {
    this.powerLevel *= this.powerLevel;

  }

  sayName(name) {
    this.name = name;

  }

  maximizeEnergy(energyLevel) {
   this.energyLevel = 1000;

  }

  gainPower(powerLevel) {
    this.powerLevel *= this.powerLevel
  }
};

var firstClass = new SuperHero("Greg", "Flight", 45);
firstClass.maximizeEnergy();
firstClass.gainPower();
console.log(firstClass);

var secondClass = new SuperHero("Tina", "Radioactive", 9);
firstClass.maximizeEnergy();
firstClass.gainPower();
console.log(secondClass);


// Reflection
// What parts were most difficult about this exerise?

// ANSWER: Sometimes when you've done "more complex" exercises it's difficult to remember the basics.

// What parts felt most comfortable to you?

// ANSWER: Objects felt the most comfortable.

// What skills do you need to continue to practice before starting Mod 1?

// ANSWER: I definitely need to work on getting my classes figured out.
// I am having trouble with wrapping my head around the concept at times.
