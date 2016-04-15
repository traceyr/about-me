// var name = prompt('What is your name?');
// console.log('Welcome ' + name + ' to my little quiz.');
// alert('Hello, ' + name + ' lets play this quiz to see how well you know me!');
// alert('For all of your answers, please answer with a simple Y or N');
//
// var answer1 = prompt('Do I have a cat named Minerva?').toUpperCase();
// if (answer1 === 'Y'){
//   console.log(answer1 + ' is correct.');
//   alert('You are correct. Minerva is my cat.');
// } else {
//   console.log(answer1 + ' is not correct.');
//   alert('Nope. I do have a cat.');
// }
//
// var answer2 = prompt('Do I have a Corgi named Sherwood?').toUpperCase();
// if (answer2 === 'N') {
//   console.log(answer2 + ' is correct.');
//   alert('You are correct. I do not have a Corgi....yet.');
// } else {
//   console.log(answer1 + ' is not correct.');
//   alert('Nope. No Corgie Sadly.');
// }
//
// var answer3 = prompt('Do I have a little brother?').toUpperCase();
// if (answer3 === 'Y') {
//   console.log(answer2 + ' is correct');
//   alert('You are correct. I have a brother.');
// } else {
//   console.log(answer1 + ' is not correct.');
//   alert('Nope. I do have a little brother.');
// }
//
// var answer4 = prompt('Is this my first class at CodeFellows?').toUpperCase();
// if (answer4 === 'N') {
//   console.log(answer2 + ' is correct.');
//   alert('You are correct. I Have taken classes with CodeFellows.');
// } else {
//   console.log(answer1 + ' is not correct.');
//   alert('Nope. I have.');
// }
//
// var answer5 = prompt('Do I like to ski/snowboard?').toUpperCase();
// if (answer5 === 'N') {
//   console.log(answer2 + ' is correct. Snow is evil. ');
//   alert('You are correct. I do not like snow sports.');
// } else {
//   console.log(answer1 + ' is not correct. Snow is evil.');
//   alert('Nope. I don\'t do snow.');
// }
//
// var answer6 = prompt('Did I train to be a Dietitian in college?').toUpperCase();
// if (answer6 === 'Y') {
//   console.log(answer2 + ' is correct.');
//   alert('You are correct. I am a Registered Dietitian.');
// } else {
//   console.log(answer1 + ' is not correct.');
//   alert('Nope. That is my degree.');
// }
// alert('A different format for the next question. The rules here change a bit. For this next question, I will present the question and you will have four guesses to get it right. Please enter a numerical value between 1 - 20 Good Luck!');
//
// var qSevenCounter = 1;
// var max = 4;
// while (qSevenCounter <= max) {
//   var answer7 = prompt('How many jobs have I had?');
//   if (parseInt(answer7) === 4) {
//     alert('Correct, I have had four jobs! You got it right on your attempt # ' + qSevenCounter + '!' );
//     console.log('Yah it only too you ' + qSevenCounter + ' tries!');
//     qSevenCounter = max + 1;
//   } else {
//     alert('Incorrect, please try again.');
//     console.log('That was attempt # ' + qSevenCounter + '. You have ' + (max - qSevenCounter) + ' tries left.' );
//     if (qSevenCounter === max) {
//       alert('Sorry, you did not quess correctly. I have had 4 jobs.');
//       console.log('FAILLLLLLLLLLL');
//     }
//     qSevenCounter++;
//   }
// }
// var endOfQuiz = alert(name + ' thanks for playing. Hope you enjoy my page!');
// console.log('Hello ' + name + ', thanks for visiting and playing around with my basic JavaScript program! Improvements coming soon!!');

// Putting everything in one funciton
//
// questions = ['Do I have a cat named Minerva?',
// 'Do I have a Corgi named Sherwood?',
// 'Do I have a little brother?',
// 'Is this my first class at CodeFellows?',
// 'Did I train to be a Dietitian in college?'
// ]
//
// correctAnswer = ['Y', 'N', 'Y', 'N', 'Y']
//
// var numQuestions = 5;
// for (var 1 = 0; i < numQuestions.length; i++) {
//   var answer = prompt(questions[i]);
//   if (answer.toUpperCase() === correctAnswer[i]) {
//     alert(response[i][0]);
//     console.log(response[i][0]);
//   } else {
//     alert(respnce[i][1]);
// //   }
// // }
