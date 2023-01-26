'use strict';

/*

&& - is the 'logical and'
One false and it will not run

|| - is the 'logical or'
One true and it will run

! - the 'logical not' operator

*/

// Question about the users name stored with a variable and prints a message/alert after the users input
// QUESTION 1

function helloThere() {
  let yourName = prompt('What is your name?');
  console.log('Hello " + yourName + " welcome to my portfolio!');
  alert('Hello ' + yourName + ', welcome to my portfolio!');
}
helloThere();

// Question asks the user if they are a recruiter or business owner looking for employees

// QUESTION 2
let yourOccupation = prompt('Are you looking to hire?').toLowerCase();

if (yourOccupation === 'yes' || yourOccupation === 'y') {
  console.log('You are in the right place ' + yourName + '!' + ' Lets continue!');
  alert('You are in the right place ' + yourName + '!' + ' Lets continue!');
} else if (yourOccupation === 'no' || yourOccupation === 'n') {
  console.log('You may not care to continue, but you are welcome to stay!');
  alert('You may not care to continue, but you are welcome to stay!');
} else {
  console.log('Please answer with a yes or no');
  alert('Please answer with a yes or no');
}

// Question asks if the user specifically wants a JavaScript Developer
// QUESTION 3
let whatsYourStack = prompt('Are you looking for a JavaScript Developer?').toLowerCase();

if (whatsYourStack === 'yes' || whatsYourStack === 'y') {
  console.log('I am really starting to think we are a great match for each other, ' + yourName + '!');
  alert('I am really starting to think we are a great match for each other ' + yourName + '!');
} else if (whatsYourStack === 'no' || whatsYourStack === 'n') {
  console.log('Wow, I think you are really missing out! Even more reason for you to keep following along.');
  alert('Wow, I think you are really missing out! Even more reason for you to keep following along.');
} else {
  console.log('Please answer with a yes or no');
  alert('Please answer with a yes or no');
}

// Question asks if the user values a growth mindset
// QUESTION 4
let yourMindset = prompt('Do you value a growth mindset?').toLowerCase();

if (yourMindset === 'yes' || yourMindset === 'y') {
  console.log('Wow. We are definitely connected now. Ok, one more question!');
  alert('Wow. We are definitely connected now. Ok, one more question!');
} else if (yourMindset === 'no' || yourMindset === 'n') {
  console.log('Hmm, are you sure about that answer?');
  alert('Hmm, are you sure about that answer?');
} else {
  console.log('Please answer with a yes or no');
  alert('Please answer with a yes or no');
}

// Question asks if the user like Code Fellows program graduates
// QUESTION 5
let graduates = prompt('Do you like software engineer graduates from Code Fellows?').toLowerCase();

if (graduates === 'yes' || graduates === 'y') {
  console.log('You may continue on to my portfolio, ' + yourName + '. Enjoy!');
  alert('You may continue on to my portfolio, ' + yourName + '. Enjoy!');
} else if (graduates === 'no' || graduates === 'n') {
  console.log('We made it this far, we may as well continue. You might be surprised!');
  alert('We made it this far, we may as well continue. You might be surprised!');
} else {
  console.log('Please answer with a yes or no');
  alert('Please answer with a yes or no');
}

// QUESTION 6
/*

Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

user is prompted to guess

compare that variable

- too high
- too low
- corrrect answer
- not a num
- not a valid number in the range
- if out of guesses, give the answer

*/

let maxAttempts = 3;
let score = 0;

for (let i = 0; i <= maxAttempts; i++) {

  console.log(maxAttempts);
  console.log(i);

  let myFavMeal = prompt('How many meals do I eat in one day?').toLowerCase();

  if (myFavMeal === 'three' || myFavMeal === '3') {
    score++;
    console.log(`You are correct ${yourName} and here is your score: ${score}`);
    alert(`You are correct ${yourName} and here is your score: ${score}`);
    break;

  } else if (myFavMeal > 'three' || myFavMeal > 3) {
    console.log(`Try again, that is too high! You have ${maxAttempts - i} tries remaining!`);
    alert(`Try again, that is too high! You have ${maxAttempts - i} tries remaining!`);

  } else if (myFavMeal < 'three' || myFavMeal < 3) {
    console.log(`Try again, that is too low! You have ${maxAttempts - i} tries remaining!`);
    alert(`Try again, that is too low! You have ${maxAttempts - i} tries remaining!`);

  } else
    console.log('Please enter a number value and resubmit');
  alert('Please enter a number value and resubmit');
}
// QUESTION 7

/*

Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.

*/

let howManyDays = prompt('How many days does it take to drive to Seattle from Alaska?').toLowerCase();
let correctAnswers = ['1', '2', '3'];
let mostAttempts = 5;

for (let i = 0; i <= mostAttempts; i++) {

  if (howManyDays === correctAnswers[1]) {
    console.log(`Good job ${yourName} you are on fire!`);
    alert(`Good job ${yourName} you are on fire!`);
    break;
  } else {
    console.log(`Oh no, ${yourName}, you have to try again with ${mostAttempts - i} left.`);
    alert(`Oh no, ${yourName}, you have to try again with ${mostAttempts - i} tries left.`);
  }
}
