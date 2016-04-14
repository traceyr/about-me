'use strict';
var numCorrect = 0;
var answerY = function(answer, sentence) {
  if (answer.toUpperCase() === 'Y') {
    alert('You are correct, ' + sentence);
    numCorrect++;
    console.log(sentence);
  } else {
    alert('That is incorrect, ' + sentence);
    console.log(sentence);
  }
};

var answerN = function(answer, sentence) {
  if (answer.toUpperCase() === 'N') {
    alert('You are correct, ' + sentence);
    numCorrect++;
    console.log(sentence);
  } else {
    alert('That is incorrect, ' + sentence);
    console.log(sentence);
  }
};

var name = prompt('What is your name?');
console.log('Welcome ' + name + ' to my little quiz.');
alert('Hello, ' + name + ' lets play this quiz to see how well you know me!');
alert('For the first five questions, please answer with a simple Y or N');

var answer1 = prompt('Do I have a cat named Minerva?');
var q1 = answerY(answer1, 'I have a cat named Minerva.');

var answer2 = prompt('Do I have a Corgi named Sherwood?');
var q2 = answerN(answer2, 'I do not have a Corgie...YET!!!!');

var answer3 = prompt('Do I have a little brother?');
var q3 = answerY(answer3, 'Skyler is my little bro.');

var answer4 = prompt('Is this my first class at CodeFellows?');
var q4 = answerN(answer4, 'I took classes last year!');

var answer5 = prompt('Did I train to be a Dietitian in college?');
var q5 = answerY(answer5, 'I am a Registered Dietitian.');

alert('A different format for the next question. The rules here change a bit. For this next question, I will present the question and you will have four guesses to get it right. Please enter a numerical value between 1 - 20 Good Luck!');

var qSixCounter = 1;
var max = 4;
var answer6;
var numJobs = 4;
while (qSixCounter <= max) {
  answer6 = prompt('How many jobs have I had?');
  if (isNaN(answer6) === false) {
    if (parseInt(answer6) === numJobs) {
      alert('Correct, I have had four jobs! You got it right on your attempt # ' + qSixCounter + '!' );
      console.log('Yah it only too you ' + qSixCounter + ' tries!');
      numCorrect++;
      qSixCounter = max + 1;
    } else {
      if (parseInt(answer6) >= numJobs){
        alert('Incorrect. That was too high.');
      } else if (parseInt(answer6) <= numJobs) {
        alert('Incorrect. Too low.');
      }
      console.log('That was attempt # ' + qSixCounter + '. You have ' + (max - qSixCounter) + ' tries left.' );
      if (qSixCounter === max) {
        alert('Sorry, you did not quess correctly. I have had 4 jobs.');
        console.log('FAILLLLLLLLLLL');
      }
      qSixCounter++;
    }
  } else {
    alert('That is not a valid number. Please try again.');
    answer6;
  }
}

var countries = ['belize', 'france', 'germany', 'hungary', 'liechtenstein', 'italy', 'switzerland', 'poland'];
var countriesCombined = countries.join(', ');
var tries = 6;
var qSevenCounter = 1;
var isCorrect = false;

alert('For this last question, please type in a word for your answer.');

while (qSevenCounter <= tries) {
  var answer7 = prompt('Name a country I have visited.').toLowerCase();
  for (var i = 0; i < countries.length; i++) {
    console.log(countries[i]);
    if (answer7 === countries[i]) {
      alert('Correct. I have been to ' + answer7 + '. Here is a partial list of countries I have visited: ' + countriesCombined);
      console.log(countriesCombined);
      numCorrect++;
      isCorrect = true;
      break;
    } else {
      console.log('current guess is not at ' + i + ' continuing to check');
    }
  }
  if (isCorrect === false) {
    alert('Incorrect. Please try again.');
    console.log('Nope, you have ' + (tries - qSevenCounter) + ' left.');
    qSevenCounter++;
    if (qSevenCounter === (tries + 1)) {
      alert('Nope. Here is a partial list of countries I have visited: ' + countriesCombined);
      console.log('FAILL');
      break;
    }
  } else {
    break;
  }
}

alert('You got ' + numCorrect + ' answers right ' + name + '. Congrats!');

var endOfQuiz = alert(name + ' thanks for playing. Hope you enjoy my page!');
console.log('Hello ' + name + ', thanks for visiting and playing around with my basic JavaScript program! Improvements coming soon!!');
