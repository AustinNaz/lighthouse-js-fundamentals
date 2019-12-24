let repeatNumbers = function(data) {
  let rtnString = '';   // Set return string to empty
  let chgString = '';   // Set changing string to empty
  for (let x = 0; x < data.length; x++) {   // Iterate over first array
    for (let y = 0; y < data[x][1]; y++) {    // Iterate over second array
      chgString = chgString.concat(data[x][0].toString());    // Concat the changing  to itself for the amount of the second number
    }
    if (x === data.length - 1) {    // If its the last array concat without comma
      rtnString = rtnString.concat(chgString);
    } else {    // If its not then add a comma
      rtnString = rtnString.concat(chgString, ",");
      chgString = '';   // Reset changing string to empty for next array
    }
  }
  return rtnString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));