'use strict';

var userName = prompt('Welcome to my page! What is your name?');
console.log('My visitor\'s name is: ' + userName);

var startQuiz = confirm ('Hello, ' + userName + ', thank you for taking interest in my life.  Would you like to take a quiz about me?');
if (startQuiz === true){
  console.log(userName + ' wants to play!');
  var yesPlay = confirm ('Excellent!  Here\'s the first question: Do I have a Biology Degree?');
  alert ('Yes, ' + userName + ', I do have a Biology Degree.');
  console.log('Do I have a Biology Degree? ' + yesPlay);
} else {
  console.log('Visitor did not want to play, but I made them anyway.');
  var noPlay = confirm ('Hmm, I think you\'ll enjoy it. Let\'s start anyway.  Here\'s the first question: Do I have a Biology Degree?');
  console.log('Do I have a Biology Degree? ' + noPlay);
  alert ('No, ' + userName + ', actually I do have a Biology Degree.');
}

var travelQuiz = prompt ('Did I visit India this summer?');
if (travelQuiz.toLowerCase() === 'yes' && 'y'){
  alert ('Great, ' + userName + '! You were paying attention. Click ok to try another question.');
  console.log(userName + ' was correct that I traveled to India');
} else {
  alert ('Nope, ' + userName + ', I actually did travel to India this summer. Click ok to try another question.');
  console.log(userName, ' was incorrect.  I did travel to India');
}
