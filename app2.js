var name = prompt('What is your name?');
console.log('Welcome ' + name + ' to my little quiz.');
alert('Hello, ' + name + ' lets play this quiz to see how well you know me!');
alert('For all of your answers, please answer with a simple Y or N');

var answer1 = prompt('Do I have a cat named Minerva?').toUpperCase();
if (answer1 === 'Y'){
  console.log(answer1 + ' is correct.');
  alert('You are correct. Minerva is my cat.');
} else {
  console.log(answer1 + ' is not correct.');
  alert('Nope. I do have a cat.');
}

var answer2 = prompt('Do I have a Corgi named Sherwood?').toUpperCase();
if (answer2 === 'N') {
  console.log(answer2 + ' is correct.');
  alert('You are correct. I do not have a Corgi....yet.');
} else {
  console.log(answer1 + ' is not correct.');
  alert('Nope. No Corgie Sadly.');
}

var answer3 = prompt('Do I have a little brother?').toUpperCase();
if (answer3 === 'Y') {
  console.log(answer2 + ' is correct');
  alert('You are correct. I have a brother.');
} else {
  console.log(answer1 + ' is not correct.');
  alert('Nope. I do have a little brother.');
}

var answer4 = prompt('Is this my first class at CodeFellows?').toUpperCase();
if (answer4 === 'N') {
  console.log(answer2 + ' is correct.');
  alert('You are correct. I Have taken classes with CodeFellows.');
} else {
  console.log(answer1 + ' is not correct.');
  alert('Nope. I have.');
}

var answer5 = prompt('Do I like to ski/snowboard?').toUpperCase();
if (answer5 === 'N') {
  console.log(answer2 + ' is correct. Snow is evil. ');
  alert('You are correct. I do not like snow sports.');
} else {
  console.log(answer1 + ' is not correct. Snow is evil.');
  alert('Nope. I don\'t do snow.');
}

var answer6 = prompt('Did I train to be a Dietitian in college?').toUpperCase();
if (answer6 === 'Y') {
  console.log(answer2 + ' is correct.');
  alert('You are correct. I am a Registered Dietitian.');
} else {
  console.log(answer1 + ' is not correct.');
  alert('Nope. That is my degree.');
}

var endOfQuiz = alert(name + ' thanks for playing. Hope you enjoy my page!');
console.log('Hello ' + name + ', thanks for visiting and playing around with my basic JavaScript program! Improvements coming soon!!');
