// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
// we should not use ternary operators for things as sensitive as gender :D

let isMale = true;
let gender = isMale ? "male" : "female"; 
console.log("Two gender test revealed ", gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let int1 = 13;
let int2 = 5;
let isSumEight = int1 + int2 == 8;
let isDiffEight = (int1 - int2 == 8) || (int2 - int1 == 8);
let anythingEight = ((int1 || int2) == 8) || isSumEight || isDiffEight; // || actually returns one of the values so it is welldefined for numbers and just a shorthand for int1 == 8 || int2 == 8
console.log("Did we manage to somehow get to eight?", anythingEight);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1 = "conc";
let string2 = "atenation"
let concatenatedString = string1 + string2;
console.log("concatenatedString = ", concatenatedString);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let num1 = -3;
let num2 = 17;
let num3 = 1;
let largest, middle, smallest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
    if (num2 >= num3) {
        middle = num2;
        smallest = num3;
    } else {
        middle = num3;
        smallest = num2;
    }
} else {
    if (num2 >= num3) {
        largest = num2;
        if (num1 >= num3) {
            middle = num1;
            smallest = num3;
        } else {
            middle = num3;
            smallest = num1;
        }
    } else {
        largest = num3;
        if (num1 >= num2) {
            middle = num1;
            smallest = num2;
        } else {
            middle = num2;
            smallest = num1;
        }
    }
}
console.log("Given the 3 numbers: ");
console.log("num1 =", num1);
console.log("num2 =", num2);
console.log("num3 =", num3);
console.log("Sorting them by descending order leaves us with:", largest, middle, smallest);

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let avgNum1 = 143;
let avgNum2 = 8;
let average = (avgNum1 + avgNum2) / 2;
console.log("Average of", avgNum1, "and", avgNum2, "is:", average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let longString1 = "Some string, pretty short all in all";
let longString2 = "Another string, this one has way more characters, mainly to fill up this page and have a clearly longer string";
let longerString = longString1.length > longString2.length ? longString1 : (longString2.length > longString1.length ? longString2 : null);
console.log("Gioven two strings");
console.log("longString1 =", longString1);
console.log("longString2 =", longString2);
if (longerString != null) {
    console.log("The longer string is:", longerString);
} else {
    console.log("Both strings are the same length.")
}


/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let maybeInt = 5.3;
let isInteger = Number.isInteger(maybeInt);
console.log("Is", maybeInt, "an integer?", isInteger);
/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let percentage = "35%";
let baseValue = 500;
let percentageOfBase = baseValue * (parseFloat(percentage) / 100);
console.log(`${percentage} of ${baseValue} is ${percentageOfBase}`); //Just to test how this works with ${}

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let maybeEven = 123;
let evenOrOdd = maybeEven % 2 == 0 ? "even" : "odd";
console.log(maybeEven, "is", evenOrOdd);