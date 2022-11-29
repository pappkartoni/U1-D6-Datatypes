/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* There are 7 so called primitive datatypes in JS. Of those only 5 are frequently used. They are number, string, boolean, null and undefined. The other two, bigint and symbol won't be discussed here as was the case in the lecture
    number actually just represents any number whether it's an integer or or decimal number. This includes the abstract concepts of (infinity and -infinity)
    strings are a series of characters in a row. This includes all letters and numbers but may also include emojis and other special characters
    boolean is a type representing the two values of truth logic, namely true and false
    null and unudefined both kinda stand for the absence of values. The difference is that null is an actual object which some thing has to be set to while undefined is the default value JS sets for variables etc that have not yet gotten any value
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Variables are placeholders for values so that one can target this value by any kind be it just getting the value or applying it to a function etc. The value of a variable has to be set and can usually be changed  */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log("12+20 equals ", 12 + 20);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log("12 - x equals (with x=12)", 12 - x);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log("name1 ==== name2", name1 === name2);
let name2lowerCase = name2.toLowerCase();
console.log("name1 ==== name2lowerCase", name1 === name2lowerCase);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

// using 'let' we can't just redeclare a variable that has already been set in the same block so i lazily renamed this one to x1
// also let's hope you meant natural numbers < 10 and did not actually want me to include negative numbers or any other real numbers < 10, that would be and excuse my english, a shitton of work :D
let x1 = 5;
let digits = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine");
if (x1 < digits.length) {
    console.log("You typed in", x1, ", this digit would be written as", digits[x1]);
} else {
    console.log("I don't know this number.");
}

// also I assume you meant for me to use a big ol if statement so here goes
if(x1===0) {
    console.log("zero");
} else if(x1===1) {
    console.log("one");
} else if(x1===2) {
    console.log("two");
} else if(x1===3) {
    console.log("three");
} else if(x1===4) {
    console.log("four");
} else if(x1===5) {
    console.log("five");
} else if(x1===6) {
    console.log("six");
} else if(x1===7) {
    console.log("seven");
} else if(x1===8) {
    console.log("eight");
} else if(x1===9) {
    console.log("nine");
} else if(x1===9) {
    console.log("zero");
} else {
    console.log("don't know that number");
} 


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let nameySamey = name1 === name2;
let ternaryTest = nameySamey ? "Cases don't matter yay" : "Cases do matter apparently";
console.log("On the state of whether cases matter: ", ternaryTest);