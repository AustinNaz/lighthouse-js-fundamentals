const conditionalSum = function(values, condition) {
  let addedNum = 0;
  if (condition === "even") {
    values.forEach(element => {
      if(element % 2 === 0) {
        addedNum += element;
      }
    });
  } else {
    values.forEach(element => {
      if(element % 2 !== 0) {
        addedNum += element;
      }
    });
  }
  return addedNum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));