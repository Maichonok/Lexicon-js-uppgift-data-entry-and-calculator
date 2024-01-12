// Exercise #1
const nameOfUser = prompt("Please enter your name: ");
console.log("Welcome " + nameOfUser + "!");

// Exercise #2
const ageOfUser = prompt("Please enter your age: ");
console.log(ageOfUser);

// Exercise #3
const currentYear = new Date().getFullYear();
console.log(currentYear); //2024
const yearOfBirthOfUser = prompt("Please enter your year of birth: ");
console.log(yearOfBirthOfUser); //1985
const currentAgeOfUser = currentYear - yearOfBirthOfUser;
console.log(currentAgeOfUser); //39

// Exercise #4
const number1 = parseInt(windows.prompt("Please enter your number1: "));
console.log(number1);
const number2 = parseInt(windows.prompt("Please enter your number2: "));
console.log(number2);

// Exercise #5
const result = number1 + number2;
const result1 = number1 - number2;
const result2 = number1 * number2;
const result3 = number1 / number2;
console.log(result, result1, result2, result3);

// Exercise #6
alert("Awesome! " + nameOfUser + ", " + "you can check your results in console!");