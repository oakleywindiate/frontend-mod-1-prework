/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog

class Dog {

  }

var labrador = "labrador";
var husky = "husy";

console.log(labrador);
console.log(husky);

// Prompt 2: Snack

class Snack {

  }

var popcorn = "popcorn";
var chips = "chips";

console.log(popcorn);
console.log(chips);

// Prompt 3: Shirt

class Shirt {

  }

var polo = "polo";
var turtleNeck = "turtle neck";

console.log(polo);
console.log(turtleNeck);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class NewDog {
  constructor() {
    this.age = "fur-ever young";
    this.feet = 4;
    this.cute = true;
  }
}

var labrador = new NewDog();
var husky = new NewDog();

console.log(labrador);
console.log(husky);

// Prompt 2: Snack

class NewSnack {
  constructor() {
    this.taste = "good";
    this.calories = 250
    this.eaten = false;
  }
}

var popcorn = new NewSnack();
var chips = new NewSnack();

console.log(popcorn);
console.log(chips);

// Prompt 3: Shirt

class NewShirt {
  constructor(){
    this.material = "spandex";
    this.fit = "relaxed";
    this.sleeve = "short";
  }
}

var polo = new NewShirt();
var turtleNeck = new NewShirt();

console.log(polo);
console.log(turtleNeck);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class NewestDog {
  constructor(age, coat, cute) {
    this.age = age;
    this.coat = coat;
    this.cute = cute;
  }
}

var labrador = new NewestDog(8, "long hair", "Yes");
var husky = new NewestDog(2, "short hair", "Fur-sure");

console.log(labrador);
console.log(husky);

// Prompt 2: Snack

class NewestSnack {
  constructor(taste, calories, texture) {
    this.taste = taste;
    this.calories = calories;
    this.texture = texture;
  }
}

var popcorn = new NewestSnack("savory", 80, "crunchy");
var chips = new NewestSnack("cheesy", 250, "ruffles");

console.log(popcorn);
console.log(chips);

// Prompt 3: Shirt

class NewestShirt {
  constructor(material, fit, sleeve) {
    this.material = material;
    this.fit = fit;
    this.sleeve = sleeve;
  }
}

var polo = new NewestShirt("spandex", "relaxed", "short");
var turtleNeck = new NewestShirt("blend", "tight", "long");

console.log(polo);
console.log(turtleNeck);
