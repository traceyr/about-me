var answerY = function(answer, sentence) {
  'use strict';
  if (answer.toUpperCase() === 'Y') {
    alert('You are correct, ' + sentence);
    console.log(sentence);
  } else {
    alert('That is incorrect, ' + sentence);
    console.log(sentence);
  }
};

var answerN = function(answer, sentence) {
  'use strict';
  if (answer.toUpperCase() === 'N') {
    alert('You are correct, ' + sentence);
    console.log(sentence);
  } else {
    alert('That is incorrect, ' + sentence);
    console.log(sentence);
  }
};

var name = prompt('What is your name?');
console.log('Welcome ' + name + ' to my little quiz.');
alert('Hello, ' + name + ' lets play this quiz to see how well you know me!');
alert('For all of your answers, please answer with a simple Y or N');

var answer1 = prompt('Do I have a cat named Minerva?');
var q1 = answerY(answer1, 'I have a cat named Minerva.');

var answer2 = prompt('Do I have a Corgi named Sherwood?');
var q2 = answerN(answer2, 'I do not have a Corgie...YET!!!!');

var answer3 = prompt('Do I have a little brother?');
var q3 = answerY(answer3, 'Skyler is my little bro.');

var answer4 = prompt('Is this my first class at CodeFellows?');
var q4 = answerN(answer4, 'I took classes last year!');

var answer5 = prompt('Do I like to ski/snowboard?');
var q5 = answerN(answer5, 'I dislike all sports that involve snow. Snow is cold. I dislike snow.');

var answer6 = prompt('Did I train to be a Dietitian in college?');
var q6 = answerY(answer6, 'I am a Registered Dietitian.');

var endOfQuiz = alert(name + ' thanks for playing. Hope you enjoy my page!');
console.log('Hello ' + name + ', thanks for visiting and playing around with my basic JavaScript program! Improvements coming soon!!');
