'use strict';
// WELCOME PROMPT
var userName = prompt('Welcome to my page! What is your name?');
console.log('My visitor\'s name is: ' + userName);

// QUESTION 0 "START HELLO"
var startQuiz = prompt('Hello, ' + userName + ', thank you for taking interest in my life.  Would you like to take a quiz about me? Enter Yes or No.');
var question2String = 'Excellent!  Here\'s the first question: Do I have a Biology Degree?';
if (startQuiz.toLowerCase() === 'yes' || startQuiz.toLowerCase() === 'y'){
  console.log(userName + ' wants to play!');
} else {
  console.log(userName + ' did not want to play, but I made him/her anyway.');
  question2String = 'Hmm, I think you\'ll enjoy it. Let\'s start anyway.  Here\'s the first question: Do I have a Biology Degree?';
}

// QUESTION 1 "DEGREE"
var question2Anwser = prompt(question2String);
if (question2Anwser.toLowerCase() === 'yes' || question2Anwser.toLowerCase() === 'y'){
  alert ('Yes, ' + userName + ', I do have a Biology Degree.');
  console.log(userName + ' was CORRECT. I do have a Biology Degree.');
} else {
  alert ('No, ' + userName + ', actually I do have a Biology Degree.');
  console.log(userName + ' was INCORRECT. I actually do have a Biology Degree.');
}

// QUESTION 2 "TRAVEL"
var travelQuiz = prompt ('Next question: Did I visit India this summer?');

if (travelQuiz.toLowerCase() === 'yes' || travelQuiz.toLowerCase() === 'y') {
  alert ('Great, ' + userName + '! You were paying attention. Click ok to try another question.');
  console.log(userName + ' was CORRECT. I traveled to India this summer.');
} else if (travelQuiz.toLowerCase() === 'no' || travelQuiz.toLowerCase() === 'n') {
  alert ('You are incorrect, ' + userName + '. I actually did travel to India this summer. Click ok to try another question.');
  console.log(userName, ' was INCORRECT.  I did travel to India this summer.');
} else {
  alert('I\'m not sure you were paying attention.  I asked for a Yes or No answer.  Let\'s move on to the next question.');
  console.log(userName + ' did not give a valid answer.');
}

// QUESTION 3 "BRO"A
var broQuiz = prompt ('Is it true that I have one brother?');

if (broQuiz.toLowerCase() === 'no' || broQuiz.toLowerCase() === 'n') {
  alert ('You are correct, ' + userName + '! I do not have a brother.');
  console.log(userName + ' was CORRECT.  I do not have a brother.');
} else if (broQuiz.toLowerCase() === 'yes' || broQuiz.toLowerCase() === 'y') {
  alert ('You are incorrect.  I do not have a brother.');
  console.log(userName + ' was INCORRECT.  I do not have a brother.');
} else {
  alert ('I\'m not sure you were paying attention.  I asked for a Yes or No answer.  Let\'s move on to the next question.');
  console.log(userName + ' did not give a valid answer.');
}

// QUESTION 3 "BRO"B
var broQuiz = prompt ('Is it true that I have one brother?');
if (broQuiz.toLowerCase() === 'no' || broQuiz.toLowerCase() === 'n'){
  alert ('Great, ' + userName + '! You are correct that I do not have a brother.  I am an only child.');
  console.log(userName + ' was CORRECT. I do not have a brother.');
} else {
  alert ('Nope, ' + userName + ', I do not have a brother.  I am an only child.');
  console.log(userName + ' was INCORRECT.  I do not have a brother.');
}

// QUESTION 4 "DOG"
var dogQuiz = prompt ('Is it false that I have three dogs?');
if (dogQuiz.toLowerCase() === 'yes' || dogQuiz.toLowerCase() === 'y'){
  alert ('You are correct, ' + userName + ', I do not have any dogs!');
  console.log(userName + ' was CORRECT. I do not have any dogs.');
} else {
  alert ('Sorry, ' + userName + ', I love dogs, but do not have one...nor do I have three!');
  console.log(userName + ' was INCORRECT.  I do not have any dogs.');
}

//  QUESTION 5 "YOGA"
var yogaQuiz = prompt ('Did I just get my yoga teaching certification?');
if (yogaQuiz.toLowerCase() === 'yes' || yogaQuiz.toLowerCase() === 'y'){
  alert ('You are correct, ' + userName + ', I just became a certified yoga instructor!');
  console.log(userName + ' was CORRECT. I just became a certified yoga instructor.');
} else {
  alert ('Sorry, ' + userName + ', I just became a certified yoga instructor.');
  console.log(userName + ' was INCORRECT.  I just became a certified yoga instructor.');
}
// QUESTION 6 "AGE"
var ageQuiz = prompt('How old am I?');

for (var numGuesses = 0; numGuesses < 3; numGuesses++){
  if (ageQuiz > 36 || numGuesses < 3) {
    prompt('Too high! Guess again.');
    continue;
  }
  if (ageQuiz < 36 || numGuesses < 3){
    prompt('Too low! Guess again.');
    continue;
  }
  if (ageQuiz = '36') {
    alert('You got it! I\'m 36. Let\'s try another question.');
  }
  alert('It took you too many guesses.  I\'m 36.  Let\'s try another question.');
}

if (ageQuiz > 36) {
  prompt ('Too high! Guess again.');
  console.log(userName + '\'s guess was too high.');
} else if (ageQuiz <36); {
  prompt ('Too low! Guess again.');
  console.log(userName + '\'s guess was too low.');
} else if (ageQuiz );
}

// QUESITON 7 "MULTIPLE ANSWERS"

alert('Thanks for taking my quiz. Bye.');
