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