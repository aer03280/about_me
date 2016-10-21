'use strict';
// WELCOME PROMPT testing
var userName = prompt('Welcome to my page! What is your name?');
console.log('My visitor\'s name is: ' + userName);

// QUESTION 0 "START HELLO"
// var startQuiz = prompt('Hello, ' + userName + ', thank you for taking interest in my life.  Would you like to take a quiz about me? Enter Yes or No.');
// var question2String = 'Excellent!  Here\'s the first question: Do I have a Biology Degree?';
// if (startQuiz.toLowerCase() === 'yes' || startQuiz.toLowerCase() === 'y'){
//   console.log(userName + ' wants to play!');
// } else {
//   console.log(userName + ' did not want to play, but I made him/her anyway.');
//   question2String = 'Hmm, I think you\'ll enjoy it. Let\'s start anyway.  Here\'s the first question: Do I have a Biology Degree?';
// }
//
// function yesNoQ(greetingQuestion, QuestionA, QuestionB, answerOne, answerTwo) {
//   var ans = prompt(greetingQuestion);
//   if (ans.toLowerCase() === answerOne || ans.toLowerCase() === answerTwo) {
//     console.log(QuestionA);
//     var ansA = prompt(QuestionA);
//   } else {
//     console.log(QuestionB);
//     var ansA = prompt(QuestionB);
//   }
// }
//
// yesNoQ('Hello, ' + userName + ', thank you for taking interest in my life.  Would you like to take a quiz about me? Enter Yes or No.' , 'Excellent!  Here\'s the first question: Do I have a Biology Degree?' , 'Hmm, I think you\'ll enjoy it. Let\'s start anyway.  Here\'s the first question: Do I have a Biology Degree?', 'yes' , 'y');
//
// function yesNoQ(greetingQuestion, QuestionA, QuestionB, answerOne, answerTwo, responseYes, responseNo) {
//   var ans = prompt(greetingQuestion);
//   if (ans.toLowerCase() === answerOne || ans.toLowerCase() === answerTwo) {
//     console.log(QuestionA);
//     var ansA = alert(QuestionA);
//   } else {
//     console.log(QuestionB);
//     var ansA = alert(QuestionB);
//   }
// }
//
//
// yesNoQ('Next question: Did I visit India this summer?' , userName + ' was CORRECT. I traveled to India this summer.', userName + ' was INCORRECT.  I did travel to India this summer.' , 'yes' , 'y', 'Great, ' + userName + '! You were paying attention. Click ok to try another question.' , 'You are incorrect, ' + userName + '. I actually did travel to India this summer. Click ok to try another question.');
//
// yesNoQ('Is it true that I have one brother?' , 'Great, ' + userName + '! You are correct that I do not have a brother.  I am an only child.' , 'Nope, ' + userName + ', I do not have a brother.  I am an only child.' , 'no' , 'n' , userName + ' was CORRECT. I do not have a brother.' , userName + ' was INCORRECT.  I do not have a brother.')
//
//
// // QUESTION 3 "BRO"B
// // var broQuiz = prompt ('Is it true that I have one brother?');
// // if (broQuiz.toLowerCase() === 'no' || broQuiz.toLowerCase() === 'n'){
// //   alert ('Great, ' + userName + '! You are correct that I do not have a brother.  I am an only child.');
// //   console.log(userName + ' was CORRECT. I do not have a brother.');
// // } else {
// //   alert ('Nope, ' + userName + ', I do not have a brother.  I am an only child.');
// //   console.log(userName + ' was INCORRECT.  I do not have a brother.');
// // }
//
// yesNoQ('Is it false that I have three dogs?' , 'You are correct, ' + userName + ', I do not have any dogs!' , 'Sorry, ' + userName + ', I love dogs, but do not have one...nor do I have three!' , 'yes' , 'y' , userName + ' was CORRECT. I do not have any dogs.' , userName + ' was INCORRECT.  I do not have any dogs.')
//
// // // QUESTION 4 "DOG"
// // var dogQuiz = prompt ('Is it false that I have three dogs?');
// // if (dogQuiz.toLowerCase() === 'yes' || dogQuiz.toLowerCase() === 'y'){
// //   alert ('You are correct, ' + userName + ', I do not have any dogs!');
// //   console.log(userName + ' was CORRECT. I do not have any dogs.');
// // } else {
// //   alert ('Sorry, ' + userName + ', I love dogs, but do not have one...nor do I have three!');
// //   console.log(userName + ' was INCORRECT.  I do not have any dogs.');
// // }
//
// yesNoQ('Did I just get my yoga teaching certification?' , 'You are correct, ' + userName + ', I just became a certified yoga instructor!' , 'Sorry, ' + userName + ', I just became a certified yoga instructor.' , 'yes' , 'y' , userName + ' was CORRECT. I just became a certified yoga instructor.' , userName + ' was INCORRECT.  I just became a certified yoga instructor.');
//
// //  QUESTION 5 "YOGA"
// // var yogaQuiz = prompt ('Did I just get my yoga teaching certification?');
// // if (yogaQuiz.toLowerCase() === 'yes' || yogaQuiz.toLowerCase() === 'y'){
// //   alert ('You are correct, ' + userName + ', I just became a certified yoga instructor!');
// //   console.log(userName + ' was CORRECT. I just became a certified yoga instructor.');
// // } else {
// //   alert ('Sorry, ' + userName + ', I just became a certified yoga instructor.');
// //   console.log(userName + ' was INCORRECT.  I just became a certified yoga instructor.');
// // }
//
function numberGuess(numQuestion, highResponse, lowResponse, correctResponse, noAttempts, maxAttempts, guess) {
  var ageQuiz = prompt(numQuestion);
  for (var numGuesses = 0; numGuesses < maxAttempts; numGuesses++) {
    if (numGuesses === maxAttempts - 1) {
      alert(noAttempts);
      console.log(noAttempts);
    } else if (ageQuiz > guess && numGuesses < maxAttempts) {
      prompt(highResponse);
      console.log(highResponse);
    } else if (ageQuiz < guess && numGuesses < maxAttempts) {
      prompt(lowResponse);
      console.log(lowResponse);
    }
  }
}



numberGuess('How old am I?' , 'Too high! Guess again.' , 'Too low! Guess again.' , 'You got it! I\'m 36. Let\'s try another question.' , 'It took you too many guesses.  I\'m 36.  Let\'s try another question.' , 4 , 36);

// QUESTION 6 "AGE"
// var ageQuiz = prompt('How old am I?');
//
// for (var numGuesses = 0; numGuesses < 3; numGuesses++){
//   if (ageQuiz > 36 || numGuesses < 3) {
//     prompt('Too high! Guess again.');
//     continue;
//   }
//   if (ageQuiz < 36 || numGuesses < 3){
//     prompt('Too low! Guess again.');
//     continue;
//   }
//   if (ageQuiz = '36') {
//     alert('You got it! I\'m 36. Let\'s try another question.');
//   }
//   alert('It took you too many guesses.  I\'m 36.  Let\'s try another question.');
// }
//
//  if (ageQuiz > 36) {
//   prompt ('Too high! Guess again.');
//   console.log(userName + '\'s guess was too high.');
// } else if (ageQuiz <36); {
//   prompt ('Too low! Guess again.');
//   console.log(userName + '\'s guess was too low.');
// } else if (ageQuiz );
// }

// QUESITON 7 "MULTIPLE ANSWERS"

alert('Thanks for taking my quiz. Bye.');
