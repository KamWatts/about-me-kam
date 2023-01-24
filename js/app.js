'use strict';

/*

&& - is the 'logical and'
One false and it will not run

|| - is the 'logical or'
One true and it will run

! - the 'logical not' operator

*/

// Question about the users name stored with a variable and prints a message/alert after the users input

let yourName = prompt('What is your name?');
console.log('Hello " + yourName + " welcome to my portfolio!');
alert('Hello ' + yourName + ', welcome to my portfolio!');

// Question asks the user if they are a recruiter or business owner looking for employees

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

