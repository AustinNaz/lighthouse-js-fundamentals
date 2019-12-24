// for (let x = 100; x <= 200; x++) {
//   if (x % 3 === 0 && x % 4 ===0) {    // Check if the remainder from 3 or 4 is 0
//     console.log('LoopyLighthouse');
//   } else if (x % 3 === 0) {   // Check if the remainder of just 3 is 0
//     console.log('Loopy');
//   } else if (x % 4 === 0) {   // Check if the remainder of just 4 is 0
//     console.log('Lighthouse');
//   } else {    // If none are multiples of 3 or 4 then print number to console
//     console.log(x);
//   }
// }

function loopyLighthouse(range, multiples, words) {
  for (let x = range[0]; x <= range[1]; x++) {
    if (x % multiples[0] === 0 && x % multiples[1] ===0) {    // Check if the remainder from 3 or 4 is 0
      console.log(words[0] + words[1]);
    } else if (x % multiples[0] === 0) {   // Check if the remainder of just 3 is 0
      console.log(words[0]);
    } else if (x % multiples[1] === 0) {   // Check if the remainder of just 4 is 0
      console.log(words[1]);
    } else {    // If none are multiples of 3 or 4 then print number to console
      console.log(x);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);