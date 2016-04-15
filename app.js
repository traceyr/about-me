var numCorrect = 0;

var questions = ['Do I have a cat named Minerva?',
'Do I have a Corgi named Sherwood?',
'Do I have a little brother?',
'Is this my first class at CodeFellows?',
'Did I train to be a Dietitian in college?'];

var correctAnswer = ['Y', 'N', 'Y', 'N', 'Y'];

var response = [['Correct! I have a cat named Minerva.', 'Incorrect! I have a cat named Minerva.'],
['Correct! I do not have a Corgie...YET!!!!', 'Incorrect! I do not have a Corgie...YET!!!!'],
['Correct! Skyler is my little bro.', 'Incorrect! Skyler is my little bro.'],
['Correct! I took classes last year!', 'Incorrect! I took classes last year!'],
['Correct! I am a Registered Dietitian.', 'Incorrect! I am a Registered Dietitian.']];

function oneToFive(question, solution, userSees) {
  for (var i = 0; i < question.length; i++) {
    var answer = prompt(question[i]);
    if (answer.toUpperCase() === solution[i]) {
      alert(userSees[i][0]);
      numCorrect++;
      console.log(userSees[i][0]);
    } else {
      alert(userSees[i][1]);
      console.log(userSees[i][1]);
    }
  }
}

var name = prompt('What is your name?');
console.log('Welcome ' + name + ' to my little quiz.');
alert('Hello, ' + name + ' lets play this quiz to see how well you know me!');
alert('For the first five questions, please answer with a simple Y or N');

oneToFive(questions, correctAnswer, response);

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
