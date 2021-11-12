/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// LEVEL 1: Loops
//-------------------

// EXAMPLE: Write code that logs to the console "I love hedgehogs!" 9 times:
for (var i = 0; i < 9; i++) {
  console.log("I love hedgehogs!");
}

// EXAMPLE: Write code that logs to the console the value of `i`, 3 times:
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// What is logged to the console for this second example? Why?
// EXPLAIN:

/*

ANSWER: The values 0, 1, and 2 will be logged to the console. The value of "i" is set to 0, because our variable "i" is assigned to zero on line 21.
Then we add a condition that will run the loop until "i is equal to 3".
We then use the "increment operator" to add a value of 1 every time the loop runs through the code.
After the first code loop has been run, the "i" variable is increased by 1 until it has reached the value of "3".
This is because we instructed the code to stop before it reaches the value of 3.
So, the console will log "0, 1, 2".

 */

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
for (var i = 0; i < 7; i++) {
  console.log(2 +2);
}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (var i = 0; i < 10; i++) {
  console.log("She sells seashells down by the seashore");
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
console.log("This is loop numer " + i);

// YOU DO: Using a for loop, how could you get an output that looks like this:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

/*

To invert the loop output you simply need to change the conditions defined in your "for statement".
You need to change the first expression to `i = 10`.
You would then change the second expression to `i >= 1`.
Lastly, you would change the last expression to `i--`.
This will list your loop in descending order.

for (var i = 10; i >= 1; i--) {
  console.log(i);

*/

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
