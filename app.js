'use strict';

var userName = prompt('Welcome to my page! What is your name?');
console.log('My visitor\'s name is: ' + userName);

var startQuiz = confirm ('Hello, ' + userName + ', thank you for your interest in my life.  Would you like to take a quiz about me?');
if (startQuiz === true){
  console.log('Visitor wants to play!');
  var yesPlay = confirm ('Excellent!  Here\'s the first question: Do I have a Biology Degree?');
  console.log('Do I have a Biology Degree? ' + yesPlay);
} else {
  console.log('Visitor did not want to play, but I made them anyway.');
  var noPlay = confirm ('Hmm, I think you\'ll enjoy it. Let\'s start anyway.  Here\'s the first question: Do I have a Biology Degree?');
  console.log('Do I have a Biology Degree? ' + noPlay);
}

var travelQuiz = confirm ('');
