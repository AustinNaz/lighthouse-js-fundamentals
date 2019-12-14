for (let x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 ===0) {    // Check if the remainder from 3 or 4 is 0
    console.log('LoopyLighthouse');
  } else if (x % 3 === 0) {   // Check if the remainder of just 3 is 0
    console.log('Loopy');
  } else if (x % 4 === 0) {   // Check if the remainder of just 4 is 0
    console.log('Lighthouse');
  } else {    // If none are multiples of 3 or 4 then print number to console
    console.log(x);
  }
}