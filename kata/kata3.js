let numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let numOfVowels = 0;
  
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < vowels.length; y++) {
      if (data[x] === vowels[y]) {
        numOfVowels += 1;
      }
    }
  }
    return numOfVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));