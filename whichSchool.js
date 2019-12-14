const whichSchool = function (age) {
if (age < 13) {   // If you're under 13 you go to elementary school
  return "Elementary School";
} else if (age >= 13 && age <= 18) {// 13-18 years old you enter secondary school
  return "Secondary School";
} else {    // Any age older than 18 you go to lighthouse labs
  return "Lighthouse Labs";
}
}