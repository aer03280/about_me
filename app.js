'use strict';
// WELCOME PROMPT testing
var userName = prompt('Welcome to my page! What is your name?');
console.log('My visitor\'s name is: ' + userName);
///////////////////////////////////////
// DEFINE SCORE VARIABLE
var score = 0;
///////////////////////////////////////
// BEGIN WITH FUNCTION yesNoQ
function yesNoQ(greetingQuestion, answerCorrect, answerWrong, answerA, answerB) {
  var ans = prompt(greetingQuestion);
  if (ans.toLowerCase() === answerA || ans.toLowerCase() === answerB) {
    console.log(answerCorrect);
    var ansA = alert(answerCorrect);
    score += 1;
  } else {
    console.log(answerWrong);
    var ansA = alert(answerWrong);
  }
}
// QUESTION 0 "PLAY"
yesNoQ('Would you like to play a game about ME?' , 'Great ' + userName + ', let\'s get started!' , 'That\'s too bad, ' + userName + '. I think you\'ll enjoy it.  Let\'s get started anyway.' , 'Yes' , 'yes');
// QUESTION 1 "DEGREE"
yesNoQ('Here\'s the first question: Do I have a Biology Degree?' ,'You are CORRECT, ' + userName + '. I do have a Biology Degree.', 'You are INCORRECT, ' + userName + '. I have a Biology Degree.' , 'yes' ,'y');
///////////////////////////////////////
// QUESTION 2 "INDIA"
yesNoQ('Did I visit India this summer?' ,'You are CORRECT, ' + userName + '. I traveled to India this summer.', 'You are INCORRECT, ' + userName + '. I did travel to India this summer.' , 'yes' ,'y');
///////////////////////////////////////
// QUESTION 3 "BRO"
yesNoQ('Is it true that I have one brother?' , 'You are CORRECT, ' + userName + '. I do not have a brother!' , 'You are INCORRECT, ' + userName + '. I do not have a brother.' , 'no' , 'n');
// ///////////////////////////////////////
// QUESTION 4 "DOG"
yesNoQ('Is it false that I have three dogs?' , 'You are CORRECT, ' + userName + '. I do not have any dogs!' , 'You are INCORRECT, ' + userName + '. I love dogs, but I do not have one...nor do I have three!' , 'yes' , 'y');
// ///////////////////////////////////////
// QUESTION 5 "YOGA"
yesNoQ('Did I just get my yoga teaching certification?' , 'You are CORRECT, ' + userName + '. I just became a certified yoga instructor!' , 'You are INCORRECT, ' + userName + '. I just became a certified yoga instructor.' , 'yes' , 'y');
// ///////////////////////////////////////
// function numberGuess(numQuestion, highResponse, lowResponse, correctResponse, noAttempts, maxAttempts, guess) {
//   var ageQuiz = prompt(numQuestion);
//   for (var numGuesses = 0; numGuesses < maxAttempts; numGuesses++) {
//     if (numGuesses === maxAttempts - 1) {
//       alert(noAttempts);
//       console.log(noAttempts);
//     } else if (ageQuiz > guess && numGuesses < maxAttempts) {
//       prompt(highResponse);
//       console.log(highResponse);
//     } else if (ageQuiz < guess && numGuesses < maxAttempts) {
//       prompt(lowResponse);
//       console.log(lowResponse);
//     }
//   }
// }
//
//
// ///////////////////////////////////////
// numberGuess('How old am I?' , 'Too high! Guess again.' , 'Too low! Guess again.' , 'You got it! I\'m 36. Let\'s try another question.' , 'It took you too many guesses.  I\'m 36.  Let\'s try another question.' , 4 , 36);
//
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
// ///////////////////////////////////////
// QUESITON 7 "MULTIPLE ANSWERS"
// ///////////////////////////////////////
function giveScore(){
  if (score >= 8) {
    alert('You scored ' + score + '/8. Good job ' + userName + '.');
    console.log('You scored ' + score + '/8. Good job ' + userName + '.');
  } else {
    alert('You scored ' + score + '/8. You should spend a little time getting to know me, ' + userName + '.');
    console.log('You scored ' + score + '/8. You should spend a little time getting to know me, ' + userName + '.');
  }
}
giveScore();

// alert('Thanks for taking my quiz . Bye.');
