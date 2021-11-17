// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

// Creating a finction with five parameters
function buildABear(name, age, fur, clothes, specialPower) {
// declaring variables
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  var demographics = [name, age];
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// Declaring object literal with key-value pairs
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// Logging the result of builtBear
  return builtBear
}
// Method logs the following buildABear values to terminal
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

// Declaring function with three parameters
function fizzBuzz(num1, num2, range) {
 // Instructing the computer how many times to run iteration
  for (var i = 0; i <= range; i++) {
// Instructs code to run different lines depending on the conditions
    // condition 1
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    //condition 2
    } else if (i % num1 === 0) {
      console.log('fizz');
    //condition 3
    } else if (i % num2 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
// Arguments for the function fixxBuzz
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
