const urlEncode = function(text) {
  const replacement = '%20';
  let newText = text;

  for (let x = 0; x < text.length; x++) {
      newText = text.replace(/ /g, replacement);
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));