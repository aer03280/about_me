// 'use strict';
// // WELCOME PROMPT testing
var userName = prompt('Welcome to my page! What is your name?');
console.log('My visitor\'s name is: ' + userName);
// ///////////////////////////////////////
// // DEFINE SCORE VARIABLE
var score = 0;
// // ///////////////////////////////////////
// // // BEGIN WITH FUNCTION yesNoQ
// // function yesNoQ(greetingQuestion, answerCorrect, answerWrong, answerA, answerB) {
// //   var ans = prompt(greetingQuestion);
// //   if (ans.toLowerCase() === answerA || ans.toLowerCase() === answerB) {
// //     console.log(answerCorrect);
// //     var ansA = alert(answerCorrect);
// //     score += 1;
// //   } else {
// //     console.log(answerWrong);
// //     var ansA = alert(answerWrong);
// //   }
// // }
// // // QUESTION 0 "PLAY"
// // yesNoQ('Yes or No: Would you like to play a game about ME?' , 'Great ' + userName + ', let\'s get started!' , 'That\'s too bad, ' + userName + '. I think you\'ll enjoy it.  Let\'s get started anyway.' , 'Yes' , 'yes');
// // // QUESTION 1 "DEGREE"
// // yesNoQ('Yes or No: Do I have a Biology Degree?' ,'You are CORRECT, ' + userName + '. I do have a Biology Degree.', 'You are INCORRECT, ' + userName + '. I have a Biology Degree.' , 'yes' ,'y');
// // ///////////////////////////////////////
// // // QUESTION 2 "INDIA"
// // yesNoQ('Yes or No: Did I visit India this summer?' ,'You are CORRECT, ' + userName + '. I traveled to India this summer.', 'You are INCORRECT, ' + userName + '. I did travel to India this summer.' , 'yes' ,'y');
// // ///////////////////////////////////////
// // // QUESTION 3 "BRO"
// // yesNoQ('Yes or No: Is it true that I have one brother?' , 'You are CORRECT, ' + userName + '. I do not have a brother!' , 'You are INCORRECT, ' + userName + '. I do not have a brother.' , 'no' , 'n');
// // // ///////////////////////////////////////
// // // QUESTION 4 "DOG"
// // yesNoQ('Yes or No: Is it false that I have three dogs?' , 'You are CORRECT, ' + userName + '. I do not have any dogs!' , 'You are INCORRECT, ' + userName + '. I love dogs, but I do not have one...nor do I have three!' , 'yes' , 'y');
// // // ///////////////////////////////////////
// // // QUESTION 5 "YOGA"
// // yesNoQ('Yes or No: Did I just get my yoga teaching certification?' , 'You are CORRECT, ' + userName + '. I just became a certified yoga instructor!' , 'You are INCORRECT, ' + userName + '. I just became a certified yoga instructor.' , 'yes' , 'y');
// // // ///////////////////////////////////////
// // QUESTION 6 "AGE"
// function numberGuess(numQuestion, highResponse, lowResponse, correctResponse, noAttempts, maxAttempts, guess) {
//   var ageQuiz = prompt(numQuestion);
//   for (var numGuesses = 0; numGuesses < maxAttempts; numGuesses++) {
//     if (numGuesses === maxAttempts - 1) {
//       alert(noAttempts);
//       console.log(noAttempts);
//       break;
//     } else if (ageQuiz > guess && numGuesses < maxAttempts) {
//       prompt(highResponse);
//       console.log(highResponse);
//       // continue;
//     } else if (ageQuiz < guess && numGuesses < maxAttempts) {
//       prompt(lowResponse);
//       console.log(lowResponse);
//       // continue;
//     } else {
//       prompt(correctResponse);
//       console.log(correctResponse);
//       score += 1;
//       break;
//     }
//   }
// }
// numberGuess('How old am I? \(You get four chances to guess correctly!\)' , 'Too high! Guess again.' , 'Too low! Guess again.' , 'You got it! I\'m 36. Let\'s try another question.' , 'It took you too many guesses.  I\'m 36.  Let\'s try another question.' , 4 , 36);
// // ///////////////////////////////////////
// // ///////////////////////////////////////
// // QUESITON 7 "MULTIPLE ANSWERS"
// // ///////////////////////////////////////
var correctStates = ['Vermont' , 'Ohio' , 'Washington' , 'Massachusetts', 'Colorado'];
function stateLive(noAttempts, maxAttempts) {
  var stateGuess = prompt('Guess a state I\'ve lived in? \(You get six chances to guess correctly\)');
  for (var numGuess = 0; numGuess < maxAttempts; numGuess++) {
    if (numGuess === maxAttempts - 1) {
      alert(noAttempts);
      console.log(noAttempts);
    } else if (stateGuess = correctStates && numGuess < maxAttempts); {
      alert('Yes, ' + userName + 'I have lived in ' + stateGuess + '. Click ok to see a list of all the states I\'ve lived in.');
      console.log('Yes, ' + userName + 'I have lived in ' + 'correctStates(string.split)' + '.');
      score += 1;
      break;
    }
    alert('I have lived in ' + correctStates + '.');
  }
}
stateLive('Wow, ' + userName + ', you used up all your guesses.  The states I\'ve lived in are: ' + correctStates + '. Click ok to see your score.' , 6);

// // ///////////////////////////////////////
// function giveScore(){
//   if (score >= 8) {
//     alert('You scored ' + score + '/8. Good job ' + userName + '.');
//     console.log('You scored ' + score + '/8. Good job ' + userName + '.');
//   } else {
//     alert('You scored ' + score + '/8. You should spend a little time getting to know me, ' + userName + '.');
//     console.log('You scored ' + score + '/8. You should spend a little time getting to know me, ' + userName + '.');
//   }
// }
// giveScore();
//
// // alert('Thanks for taking my quiz . Bye.');
