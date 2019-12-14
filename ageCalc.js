function ageCalculator (name, yearOfBirth, currentYear) {
  let currentAge = yearOfBirth - currentYear;

  return name + ' is ' + currentAge + ' years old.' 
}

console.log(ageCalculator('John', 2019, 2000));