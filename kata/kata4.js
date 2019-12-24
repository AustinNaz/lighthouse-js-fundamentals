const instructorWithLongestName = function(instructors) {
  let numOfLetters = 0;
  let indexOfArray;
  instructors.forEach(function(element, index) {
    if (element.name.length > numOfLetters) {
      numOfLetters = element.name.length;
      indexOfArray = index;
    }
  });
  return instructors[indexOfArray];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));