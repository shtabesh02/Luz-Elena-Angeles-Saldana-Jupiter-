








//--------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!  








//---------- OVERVIEW AND INSTRUCTIONS ----------

//# JavaScript Basics
// This is the coding assigment for the first week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - The basic syntax of the JavaScript 
//     programming language
//   - Basic programming concepts like variables, 
//     data types, and conditional statements
//   - How to troubleshoot programming problems

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, the first few questions have console logs provided. The third question you'll need to complete the console log that was started for you. Use console logs for all the remaining questions to check your code output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".


// ---------- QUESTION 1. ----------
// Declaring and giving string values to variables.
// Create three variables.  First let's make sure we're using "camel case" where all letters are lowercase except for the first letter of words that are in the middle.  So, your first variable should be titled "firstName" with the value of your first name as a string.  Your second variable should be titled "lastName" with the value of your last name as a string.  The last variable should be titled "country" with the value of the name of the country where you were born as a string.

//PUT YOUR CODE HERE
let firstName = "Luz";
let lastName = "Saldana";
let country = "Mexico";

console.log("My first name is: ", firstName);
console.log("My last name is: ", lastName);
console.log("I was born in the country: ", country);


// ---------- QUESTION 2. ----------
// Declaring and giving numerical values to variables.
// Create four variables.  One titled "floatingPoint" with the value of any floating point number you choose.  One titled "integer" with the value of any integer number you choose.  One titled "negative" with the value of any negative number you choose.  One titled "notANumber" with the value of 4 multipled by a string of your choice.
//NOTE: Remember from your lessons that JavaScript can treat large numbers differently than you might expect.  
//STRETCH GOAL: You'll see "Stretch Goal"s throughout the course. Stretch Goals are optional, but are encouraged as they help you try your hand at something a little more advanced for the week/assignment/question. Create a fifth variable titled "bigNumber" that is 16 or more numbers long. Then write your console.log and see what happens as you play and practice working with large numbers.

// PUT YOUR CODE HERE
const floatingPoint = 3.7;
const integer = 17;
const negative = -9;
const notANumber = 4 * "Chocolate";
const bigNumber = 6302692940946212024;

console.log("This is a decimal, also called a floating point number: ", floatingPoint);
console.log("This is a whole number, also called an integer: ", integer);
console.log("This is a negative number: ", negative);
console.log("You can't mulitply 4 by a word! ", notANumber);
console.log("This is a big number through JS", bigNumber);


// ---------- Question 3. ----------
// Declaring and giving boolean values to variables.
// Create two variables.  Name the first variable anything you want and give it the value of true.  Name the second variable a different name than the first and give it the value of false.  

// PUT YOUR CODE HERE
const trueVar = true;
const falseVar = false;

console.log("The variable I made true is: ", trueVar);
//The output of the above should be true.
console.log("The variable I made false is: ", falseVar);
//The output of the above should be false.


// ---------- QUESTION 4. ----------
// String Concatenation
// Create a variable that makes a concatenated string out of the variables you made in Question 1. Be sure you're using your Q1 variables and not making new ones.
// Suggested text: Hello! My name is (your first name variable and last name variable concatenated here) and I was born in (your country variable here)
// You can also choose to make the text between the variables strings and concatenate all of them together.
// STRETCH GOAL: For this stretch goal, make a second variable that still concatenates your variable from Q1, but uses template literals.

// PUT YOUR CODE HERE
const messageQuestion1 = "Hello! My name is " + firstName + " " + lastName + " and I was born in " + country + ".";
const stretchGoal = `Hello! My name is ${firstName} ${lastName} and I was born in ${country}`;

console.log(messageQuestion1);
console.log(stretchGoal);
// Don't forget your console.logs!


// ---------- QUESTION 5. ----------
// Numerical "concatenation" also known as Addition
// Make two variables.  One will hold the addition of your your floating point and integer variables from Q2, the other should hold the addition of your integer and negative number from Q2.
//STRETCH GOAL Use an augmented assignment (also called compound assignment) operator to change the value of your floating point and integer numbers by the amount of your integer and/or negative number


// PUT YOUR CODE HERE
let addingFloatingInterger = floatingPoint + integer;
let addingIntergerNegative = integer + negative;
addingFloatingInterger /= negative;

console.log(addingFloatingInterger);
console.log(addingIntergerNegative);

// Don't forget your console.logs!


// ---------- QUESTION 6. ----------
// String Methods
// Create four variables named "length", "firstInitial", "lastInitial", and "capitalize".  Using string methods, assign the length of your first name (use your variable from Q1) to the "length" variable. Assign the first letter of your first name (use your variable from Q1) to the "firstInitial" variable.  Assign the LAST letter of your first name (use your variable from Q1) to the "lastInitial" variable.  Change your first name to all capital letters and assign it to the "capitalize" variable.
//STRETCH GOAL: Create a variable called "weirdInitials". Using string methods, have weirdInitials result in the value of the LAST letters of any first and last names and should be capitalized.  Example: "Sally Smith"'s weird initials should be "YH" and "Jose Rodriguez"'s inititals should be "EZ"

// PUT YOUR CODE HERE
let length = firstName.length;
let firstInitial = firstName.charAt(0);
let lastInitial = firstName.charAt(2);
let capitalize = firstName.toUpperCase();
let weirdInitials = firstName.at(-1) + lastName.at(-1);

console.log(length);
console.log(firstInitial);
console.log(lastInitial);
console.log(capitalize);
console.log(weirdInitials);
// Don't forget your console.logs!


// ---------- QUESTION 7. ----------
// Conditional Statements - part 1 of 3
// Declare a variable named "answer7".  Then create a conditional if else statement that will assign the value of true to the answer7 variable if your integer from Q2 is greater than 10 and assign it false if it is not.
// STRETCH GOAL: Make an if elseif else statement that assigns answer7 the value of "less than" if your integer from Q2 is less than 10, "equal to" if it's equal, and "greater than" if it's greater.

// PUT YOUR CODE HERE
let answer7;
if (integer > 10) {
  answer7 = "greater than";
} else if (integer < 10) {
  answer7 = 'less than';
} else {
  answer7 = 'equal to';
}

console.log(answer7);



// Don't forget your console.logs!


// ---------- QUESTION 8. ----------
// Conditional Statements - part 2 of 3
// Declare a variable called "age" and assign it that value of your age in years.  Create a conditional statement that will console.log the phrase "Age is just a number!" if your age is less than or equal to 30 and "Young at heart!" if your age is greater than 30.
//STRETCH GOAL: Combine your skills!  Use template literals to console.log your name in the phrase as in "Sally, age is just a number!" or "Jose, you're young at heart!"

// PUT YOUR CODE HERE
let age = 22;

if (age <= 30) {
  console.log(`${firstName}, age is just a number!`)
} else {
  console.log(`${firstName}, you're young at heart!`)
}

// Don't forget your console.logs!


// ---------- QUESTION 9. ----------
// Conditional Statements part 3 of 3
// Create a variable "randomNum" to be a random number generator that randomly returns either the number 1, 2, or 3 (you can use this resource to help you solve how to do this part: https://www.w3schools.com/js/js_random.asp). Now let's make a "Magic 8 Ball" using if elseif else that returns a different phrase for each of the three possible numbers. 
// If your random number is 1, console.log the phrase "It is certain.".  
// If it is 2, console.log "Perhaps.".  
// If it is 3, console.log "Absolutely not.".
// STRETCH GOAL: Complete Q9 using a switch statement instead of if elseif else.

// PUT YOUR CODE HERE

let randomNum = Math.floor(Math.random() * 4) + 1; 

switch (randomNum) {
  case 1:
    console.log(`It is certain.`);
    break;
  case 2:
    console.log('Perhaps.');
    break;
  case 3:
    console.log('Absolutely not.');
    break;
}


// Don't forget your console.logs!


// ---------- QUESTION 10. ----------
// Math calculations part 1 of 5
// Declare a variable named "exampleNum".  Give it the value of a floating point number with 4 decimal places.  Using a Number method round it to the nearest two decimal place. Example if the number is 21.4572, exampleNum should become 21.46.
// STRETCH GOAL: Achieve the same results as Q10 using Math methods instead of Number methods. HINT: you may need to alter the variable over a series of calculations/method uses.

// PUT YOUR CODE HERE
let exampleNum = 7.6294;
console.log(exampleNum.toFixed(2));

// Don't forget your console.logs!


// ---------- QUESTION 11. ----------
// Math calculations part 2 of 5
// Declare two variables named "stringNum" and "mathNum".  Assign stringNum a STRING of numbers and mathNUM numbers.  Create a third variable named "answer11" and have it multiply stringNum and mathNum.  Remember to convert your string in order for it to properly calculate!

// PUT YOUR CODE HERE
let stringNum = '1234';
let mathNum = 5678;
let answer11 = parseInt(stringNum) * mathNum;

console.log(answer11);

// Don't forget your console.logs!


// ---------- QUESTION 12. ----------
// Math calculations part 3 of 5
// Declare a variable named "diameter" and assign it an integer value. Through a series of math calculations and variables, calculate the "radius" (which is half the diameter), the "circumference" (which is 2 multiplied by the Math value pi, multiplied by the radius) and the "area" (which is the Math value pi, multiplied by the radius squared).

// PUT YOUR CODE HERE
const diameter = 14;
let radius = diameter/2;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius*radius;

console.log(`This is the diameter of a circle: ${diameter}`);
console.log(`This is its radius: ${radius}`);
console.log(`This is its circumference: ${circumference}`);
console.log(`This is its area: ${area}`);



// Don't forget your console.logs!


// ---------- QUESTION 13. ----------
// Math calculations part 4 of 5
// Let's make a useful math problem - create a tip calculator! Declare two variables called "billTotal" and "tipPercentage". Assign billTotal a floating point number with two decimal places. Assign tipPercentage a floating point number between 0.1 and 0.9. Create a third variable called "tip" that will multiply tipPercentage and billTotal then use the addition assignment operator to add that amount back to billTotal. Example: if our bill 35.75 and we want to leave a 20% tip (0.2) our new billTotal should come out to 42.90.

// PUT YOUR CODE HERE
let billTotal = 26.99;
let tipPercentage = 0.2;
let tip = billTotal * tipPercentage;
billTotal += tip;

console.log(billTotal);

// Don't forget your console.logs!


// ---------- QUESTION 14. ----------
// Math calculations part 5 of 5
// We don't always deal with measurements (like in question 12) or currency (like in the last question).  Let's work with time now.  Days are 24 hour increments, so we want to see how many hours beyond an even number of days it is until vacation!  Declare a variable called "totalHourstoWait" and assign it any integer number greater than 24 that you want. Then declare a variable called "days" and divide totalHourstoWait by 24. Don't forget to round down or exclude any decimals from this total.  Next, declare a variable "extraHours" and use the modulo operator to find out how many hours beyond the number of days you'll still need to wait until vacation.  Finally, console.log a template literal phrase that lets you know how many days and hours you have to wait.  Example: if totalHourstoWait is 54, days should be 2, and extraHours should be 6 (because 2 days and 6 hours is 54 hours) so your console log should result in something like "2 days and 6 hours until vacation!".

// PUT YOUR CODE HERE
let totalHourstoWait = 60;
let days = Math.floor(totalHourstoWait/24);
let extraHours = totalHourstoWait % 24;

console.log(`${days} days and ${extraHours} hours until vacation!!`);



// Don't forget your console.logs!


// ---------- QUESTION 15. ----------
// Student's choice! 
// Look back at the past 14 questions.  Which one did you have the hardest time with? Now create a question of your own based on the same principle. Include in your comments why you made this question for yourself and how you solved it.

// PUT YOUR CODE HERE



// Don't forget your console.logs!

//----------------------------------------

//# JavaScript Functions
// This is the coding assigment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Encapsulate code with Functions
//   - Pass Information Into Functions
//   - Arrow Functions

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. You can output the return value of a function in a similar way to how you output variable values last week.  To use a function in a console.log you invoke/call the function as part of the console log like this:

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".

// ---------- QUESTION 16. ----------
//Create a function titled 'messageString'.  Inside the function,  declare a variable named 'message' and assign it the string "Welcome to Code the Dream".  Return the 'message' variable.

// EXAMPLE LOG:
//    console.log("Q1: ", messageString());
// EXAMPLE OUTPUT:
//    Q1: Welcome to Code the Dream!

//PUT YOUR CODE HERE
function messageString() {
  let message = 'Welcome to Code the Dream';
  return message;
}

console.log(messageString());

// ---------- QUESTION 17. ----------
// Create a function called 'month'.  Inside the function, declare a variable named 'today' that uses the Date object.  Your function should then return only the month of the 'today' variable.  You can return the month as a number or, if you'd like to stretch your skills, convert it to the word form.

// EXAMPLE LOG:
//    console.log("Q2: ", month());
// EXAMPLE OUTPUT: (Will be different for each class but should be the current month.  For example if you're doing this assignment in January...)
//    Q2: 01
//    stretch goal should result in:
//    Q2: January

//PUT YOUR CODE HERE

function month() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let today = new Date();
  return months[today.getMonth()];
}

console.log('Q17:', month());


// ---------- QUESTION 18. ----------
// Create a function called 'combineStrings'.  Inside the function, declare two variables named 'string1' and 'string2'.  Assign them the strings 'Good' and 'Evening' respecitvely.  Return the two strings concatenated with a space in between.

// EXAMPLE LOG:
//    console.log("Q3: ", combineStrings());
// EXAMPLE OUTPUT:
//    Q3: Good Evening

//PUT YOUR CODE HERE
function combineStrings() {
  const string1 = 'Good';
  const string2 = 'Evening';
  return `${string1} ${string2}`;
}

console.log('Q18:', combineStrings());

// ---------- QUESTION 19. ----------
// Let's start working with parameters.  Create a function called 'useParams' that takes one parameter and returns that parameter with the all letters capitalized.

// EXAMPLE LOG:
//    console.log("Q4: ", useParams("hello"));
// EXAMPLE OUTPUT:
//    Q4: HELLO

//PUT YOUR CODE HERE
function useParams(x) {
  return x.toUpperCase();
}

console.log('Q19:', useParams('Welcome!'));

// ---------- QUESTION 20. ----------
// Let's consider how variable can be changed by a function. Create a variable named 'string3' and assign it the string "What I started with".  Create a function called 'changeWords' that takes one parameter, change the parameter to the string value "I changed this" and return the parameter.  This is NOT best practice (changing variable values inside functions).  This question demonstrates how console logging the same variable can give you two different values for that variable.  Be sure you discuss this concept with mentors!

// EXAMPLE LOGS:
//    console.log("Q5: ", changeWords(string3));
//    console.log("Q5 variable alone: ", string3);
// EXAMPLE OUTPUTS:
//    Q5: I changed this
//    Q5 variable alone: What I started with

// PUT YOUR CODE HERE
const string3 = "What I started with";

function changeWords(a) {
  a = "I changed this";
  return a;
}

console.log('Q20:', changeWords(string3));
console.log('Q20 variable alone:', string3);

// ---------- QUESTION 21. ----------
// Let's use two parameters now and work with both. Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//    console.log("Q6: ", multiplyThese(num1, num2));
// EXAMPLE OUTPUT: (if num1 and num2 are 2 and 5 respectively))
//    Q6: 10

// PUT YOUR CODE HERE
let num1 = 30;
let num2 = 7;

function multiplyThese(b, c) {
  return b * c;
}

console.log('Q21:', multiplyThese(num1, num2));

// ---------- QUESTION 22. ----------
// Building on the last question, create a function called 'getAverage' that takes 2 parameters and returns their average (hint: there is no built-in average operator in JavaScript).  Use the variables (num1 and num2) you created in Question 6 to test your function.  NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//    console.log("Q7: ", getAverage(num1, num2));
// EXAMPLE OUTPUT: (based on num1 and num2 above)
//    Q7: 3.5

// PUT YOUR CODE HERE
function getAverage(x, y) {
  return (x + y)/2.0;
}

console.log('Q22:',getAverage(num1, num2));

// ---------- QUESTION 23. ----------
// Create a function called 'absDiff' that takes 2 parameters and returns the absolute difference between them. For example, if the first parameter is smaller than the second, the first parameter will be subtracted from the second. If the first parameter is larger than the second, the second parameter will be subtracted from the first. If they are both equal, return the first parameter subtracted by the second.  It's important to consider boundary cases - situations that may change how you expect your code to behave.  For this reason, work with same numbers and negative numbers as well to see if you get your absDiff function to calculate the absolute difference regardless of number type.

// EXAMPLE LOG 1:
//    console.log("Q8 first larger: ", absDiff(29, 5));
// EXAMPLE OUTPUT: (if using the numbers 29 and 5 as in the example log)
//    Q8 first larger: 24
// EXAMPLE LOG 2:
//    console.log("Q8 second larger: ", absDiff(3, 16));
// EXAMPLE OUTPUT: (if using the numbers 3 and 16 as in the example log)
//    Q8 second larger: 13
// EXAMPLE LOG 3:
//    console.log("Q8 same nums: ", absDiff(5, 5));
// EXAMPLE OUTPUT 3: (if using the numbers 5 and 5 as in the example log)
//    Q8 same nums: 0
// EXAMPLE LOG 4:
//    console.log("Q8 neg num: ", absDiff(-6, 5));
// EXAMPLE OUTPUT 4: (if using the numbers -6 and 5 as in the example log)
//    Q8 neg num: 11

// PUT YOUR CODE HERE
function absDiff(a, b) {
  return Math.abs(a - b);
}

console.log('Q23 first larger:', absDiff(27, 13));
console.log('Second larger:', absDiff(24, 78));
console.log('Same numbers:', absDiff(11, 11));
console.log('Negative number:', absDiff(-13, 40));

// ---------- QUESTION 24. ----------
// That was a lot of math! Now let's work with strings... Create two variables named 'word1' and 'word2' and assign them any strings you want.  Then create a function called 'biggestStringLength' that takes word1 and word2 as parameters and returns the length of the longer string. If they are of equal length, just return that length.  Stretch your skills by making an empty string and seeing what happens in that situation.

// EXAMPLE LOG:
//    console.log("Q9: ", biggestStringLength(word1, word2));
// EXAMPLE OUTPUT: (if your word1 was 'Code' and word2 was 'Dream')
//    Q9: 5

// PUT YOUR CODE HERE
let word1 = 'Chocolate';
let word2 = 'Acapulco';

function biggestStringLength(w1, w2) {
  let length1 = w1.length;
  let length2 = w2.length;
  if (length1 > length2) {
    return length1;
  } else {
    return length2;
  } 
}

console.log('Q24:', biggestStringLength(word1, word2));

// NOTE: ONCE YOU START WORKING ON THE NEXT TWO QUESTIONS, WHEN YOU HIT RUN, YOU'LL HAVE SEVERAL POP-UP BOXES THAT APPEAR BEFORE ALL YOUR CODE WILL COMPLETE RUNNING IN THE CONSOLE.  IF YOU HAVE POP UP BLOCKERS YOU MAY RUN INTO ISSUES.

// ---------- QUESTION 25. ----------
// Let's explore dates now.  Create a variable named 'birthday' and assign it a prompt that will allow you to enter the date of your next birthday into an pop-up box.  Then create a function called 'birthdayCountdown' that takes birthday as a parameter and returns the number of days until your next birthday.  Remember that you may need to instruct the user in the prompt on what format they should use when entering their birthday so you can properly convert the data to something you can use in the function.  CAUTION: 2024 is a leap year!  STRETCH GOAL: As we mentioned in Question 8, you should consider boundary cases. What if the user didn't follow your instructions and put in invalid data? Include in your function a way to verify the data is valid, and handle it (ex. through an error or Alert, etc) if it is invlaid.
// NOTE: If you have pop-up blockers on your web browser, you may run into problems with your prompt/alert.  Be sure you allow pop-ups from replit.com to avoid this.  ALSO you'll need to use this line of code to allow prompts to work:
// const prompt = require('prompt-sync')();
// so be sure to include that when writing your code.

// EXAMPLE LOG:
//    console.log("Q10: ", birthdayCountdown(birthday));
// EXAMPLE OUTPUT: (if your next birthday was March 15, 2024 and today was February 3, 2024)
//    Q10: 41

// PUT YOUR CODE HERE
const prompt = require('prompt-sync')();
let birthday = prompt('Enter your next birthday as follows: YYYY-MM-DD'); 

function birthdayCountdown(hbd) {
  const oneDay = 24 * 60 * 60 * 1000; 
  //oneDay is 24 days, 60 min (1 hour), 60 seconds (1 min) and 1000 milliseconds (1 sec)
  let now = new Date();
  let newHbd = new Date(hbd);
  const differenceInDays = Math.round(Math.abs((now - newHbd)/ oneDay));
  return differenceInDays;
}

console.log('Q25:', birthdayCountdown(birthday));
//

// ---------- QUESTION 26. ----------
// If we work with dates, we should work with time also.  Create a variable named 'startTime' and assign it a prompt that will allow the user to enter a start time.  Create a variable named 'endTime' and assign it a prompt that will allow the user to enter an end time.  Then create a function called 'timeDifference' that takes startTime and endTime as parameters and returns the number of hours and minutes between the start and end times.  Remember that you may need to instruct the user in the prompt on what format they should use when entering their times so you can properly convert the data to something you can use in the function.  STRETCH GOAL: As we mentioned in Question 8 and 10, you should consider boundary cases. What if the user didn't follow your instructions and put in invalid data? Include in your function a way to verify the data is valid, and handle it (ex. through an error or alert, etc) if it is invlaid.
// NOTE: If you have pop-up blockers on your web browser, you may run into problems with your alerts.  Be sure you allow pop-ups from replit.com to avoid this.

// EXAMPLE LOG:
//    console.log("Q11: ", timeDifference(startTime, endTime));
// EXAMPLE OUTPUT: (if startTime was 12:37pm and endTime was 3:19pm)
//    Q11: 2 hours and 42 minutes

// PUT YOUR CODE HERE
let startTime = prompt('Enter a start time like so: 00:00pm/am');
let endTime = prompt('Enter an end time like so: 00:00am/pm');


function timeDifference(startT, endT) {
  //the .split() helps remove the colon and creates an array with the hour and minutes pm/am
  const noColon1 = startT.split(':');
  const noColon2 = endT.split(':');
  //the Number() changes the str into a number, so it can be used later in the code mathematically
  let startHour = Number(noColon1[0]);
  let endHour = Number(noColon2[0]);
  

  //checks if the time is in pm by checking the character in the string
  if (startT.charAt(startT.length -2 === 'p'))
  {
    //this sets the hour to military time if the time is pm by using modulo operator. It gets the remainder of whatever hour and adds it to 12. This is important because if the hour is 12 pm, then the use of the modulo operator allows it to stay as 12, since there is no need to make it 24. 
    startHour = 12 + (startHour%12);
  }
  
  if(endT.charAt(endT.length -2 === 'p')) {
    endHour = 12 + (endHour%12); 
  }
  return Math.abs(startHour - endHour);

  //this problem was super hard, and I wasn't able to finish all of it. I was only able to show the hour difference.  
} 

console.log('Q26, The hour difference from start time to end time is:', timeDifference(startTime, endTime));



// ---------- QUESTION 27. ----------
// Student's choice!
// Look back at the past 11 questions.  Which one did you have the hardest time with? Now create a question of your own based on the same principle. Include in your comments why you made this question for yourself and how you solved it.

// PUT YOUR CODE HERE

// Don't forget your console.logs!
