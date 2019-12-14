const raining = true;
const cold = false;

if (cold) {
  console.log('Make sure you pick up a scarf!');
} else {
  console.log('Short sleeves are fine');
}

const temprature = -1;

if (temprature < 0) {
  console.log('Make sure you pick up a scarf!');
} else if (temprature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine');
}

console.log('Now you\'re ready to go outside!');

const isCitizen = true;
const age = 26;

if (isCitizen && ae > 10) {
  console.log('You are eligible to vote.');
}

if (temprature < -40 || temprature > 40) {
  console.log('Maybe going outside isn\'t such a great idea..');
}

if (!raining) {
  console.log('Leave your umbrella at home!');
}