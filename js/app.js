'use strict';

// QUESTION 1

let yourName = prompt('What is your name?');
let score = 0;

function helloThere() {
  score++;
  console.log(`Hello ${yourName} welcome to my portfolio!`);
  alert(`Hello ${yourName} welcome to my portfolio! Score: ${score}`);

}
helloThere();

// QUESTION 2

function myJob() {
  let yourOccupation = prompt('Are you looking to hire?').toLowerCase();

  if (yourOccupation === 'yes' || yourOccupation === 'y') {
    score++;
    console.log(`You are in the right place ${yourName}! Lets continue!`);
    alert(`You are in the right place ${yourName}! Lets continue! Score: ${score}`);

  } else if (yourOccupation === 'no' || yourOccupation === 'n') {
    console.log('You may not care to continue, but you are welcome to stay!');
    alert('You may not care to continue, but you are welcome to stay!');

  } else {
    console.log('Please answer with a yes or no');
    alert('Please answer with a yes or no');
  }
}
myJob();

// QUESTION 3

function hireMe() {
  let whatsYourStack = prompt('Are you looking for a JavaScript Developer?').toLowerCase();

  if (whatsYourStack === 'yes' || whatsYourStack === 'y') {
    score++;
    console.log(`I am really starting to think we are a great match for each other ${yourName}!`);
    alert(`I am really starting to think we are a great match for each other ${yourName}! Score: ${score}`);

  } else if (whatsYourStack === 'no' || whatsYourStack === 'n') {
    console.log('Wow, I think you are really missing out! Even more reason for you to keep following along.');
    alert('Wow, I think you are really missing out! Even more reason for you to keep following along.');
  } else {
    console.log('Please answer with a yes or no');
    alert('Please answer with a yes or no');
  }
}
hireMe();

// QUESTION 4

function yourMindset() {
  let yourMindset = prompt('Do you value a growth mindset?').toLowerCase();

  if (yourMindset === 'yes' || yourMindset === 'y') {
    score++;
    console.log('Wow. We are definitely connected now. Ok, one more question!');
    alert(`Wow. We are definitely connected now. Ok, one more question! Score: ${score}`);

  } else if (yourMindset === 'no' || yourMindset === 'n') {
    console.log('Hmm, are you sure about that answer?');
    alert('Hmm, are you sure about that answer?');

  } else {
    console.log('Please answer with a yes or no');
    alert('Please answer with a yes or no');
  }
}
yourMindset();

// QUESTION 5

function studentGraduate() {

  let graduates = prompt('Do you like software engineer graduates from Code Fellows?').toLowerCase();

  if (graduates === 'yes' || graduates === 'y') {
    score++;
    console.log(`You may continue on to my portfolio, ${yourName}. Enjoy!`);
    alert(`You may continue on to my portfolio, ${yourName}. Enjoy! Score: ${score}`);

  } else if (graduates === 'no' || graduates === 'n') {
    console.log('We made it this far, we may as well continue. You might be surprised!');
    alert('We made it this far, we may as well continue. You might be surprised!');

  } else {
    console.log('Please answer with a yes or no');
    alert('Please answer with a yes or no');
  }
}
studentGraduate();

// QUESTION 6

function howManyMeals() {
  let maxAttempts = 3;

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
}
howManyMeals();

// QUESTION 7

function thisManyDays() {

  let correctAnswer = [1, 2, 3];
  let maxAttempts = 6;
  let isCorrect = false;

  while (maxAttempts > 0 && isCorrect === false) {

    if (maxAttempts === 0) {
      alert('Out of attempts');
      break;
    }
    let howManyDays = parseInt(prompt('How many days does it take to drive to Seattle from Alaska?'));

    for (let i = 0; i < correctAnswer.length; i++ ) {

      if (howManyDays === correctAnswer[i]) {
        alert(`You are correct! Final score: ${score}`);
        isCorrect = true;
        score++;
        break;
      }
    }
    maxAttempts--;
    if (isCorrect === false) {
      alert(`You are wrong. Attempts left: ${maxAttempts}`);
    }
  }
  alert(`The correct answer is either of the following depending on weather and conditions: ${correctAnswer.toString()}`);
}
thisManyDays();

