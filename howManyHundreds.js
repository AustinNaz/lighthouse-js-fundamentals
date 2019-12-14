function howManyHundreds(num) {
  let numContainers = Math.floor(num/100) * 100 // Round a number down to nearest 100
  return numContainers / 100;   // divide rounded down number to show number of boxes
}

console.log(howManyHundreds(520));