// 1. Instructions: Write a program that declares a variable using the let keyword, assigns the string "Hello World" to it, and logs its value.
// ANSWER: 
let messages = "Hello World"; //message for let and console
console.log(messages);


// 2. Instructions: Write a program that prompts the user to enter their name and age, and then creates a template string that includes these values. Finally, log the resulting string to the console in tthe format - "My name is John and I am 25 years old."
// ANSWER:
let input_array = getProgramInputs();

//Write your code here.
let name = input_array[0];
let age = input_array[1];

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);


// 3. Instructions: Write a function called createTemplateString that takes two parameters: param1 and param2. The function should return a template string that includes the values of param1 and param2in the format - "The values are: param1 and param2".
// ANSWER: 
let inputArr = getProgramInputs();

//Write your code here.
function createTemplateString(param1, param2) {
  return `The values are: ${param1} and ${param2}`;
}

let result = createTemplateString(inputArr[0], inputArr[1]);
console.log(result);


// 4. Write a program that creates a multi-line template string to display the following poem:

// Roses are red,
// Violets are blue,
// Sugar is sweet,
// And so are you.

//ANSWER:
//Write your code here.
let poem = `Roses are red,\nViolets are blue,\nSugar is sweet,\nAnd so are you.`;
console.log(poem);


// 5. Instructions: Write a program that reads two numbers from command-line arguments, multiplies them, and displays the result using a template string.
// Note: Display the output in following format - "The product of 2 and 3 is: 6"

// ANSWER:
// Assuming inputArr is provided by the function getProgramInputs()
// let inputArr = getProgramInputs();
// let num1 = Number(inputArr[0]);
// let num2 = Number(inputArr[1]);

// Calculate the product
let product = num1 * num2;

// Display the result
console.log(`The product of ${num1} and ${num2} is: ${product}`);


// 6. Instructions: Write a function called multiplyNumber that takes a number and a multiplier as parameters. The multiplier should have a default value of 5. Inside the function, multiply the number by the multiplier and log the result to the console.
// ANSWER:
function multiplyNumber(number, multiplier = 2) {
    //Logic to multiply
    let result = number * multiplier;
    console.log(result);
  }
  
  let input = getProgramInputs();
  let number = Number(input[0]);
  let multiplier = Number(input[1]);
  
  multiplyNumber(number, multiplier);


// 7. Instructions: Write a program that defines a function called logObjectValues. This function should take an object as an argument, with a default value of { name: 'Guest', age: 18 }. The function should log the values of the object to the console.
function logObjectValues(obj = { name: 'Guest', age: 18 }) {
    console.log('Name:', obj.name);
    console.log('Age:', obj.age);
   
  }
  
  logObjectValues(); // Output: Name: Guest, Age: 18
  logObjectValues({ name: 'Guest', age: 18 }); // Output: Name: Guest, Age: 18


// 8. Instructions: Write a program that reads an array of numbers from command-line arguments and uses array destructuring to assign the values to three variables: num1, num2, and num3. Then, log the values of these variables to the console.
// let inputArr = getProgramInputs();

// let [num1, num2, num3] = inputArr;

// console.log('num1:', num1);
// console.log('num2:', num2);
// console.log('num3:', num3);


// 9. Instructions: Write a program that reads an array of numbers from command-line arguments and skips the second element using array destructuring. Log the resulting array to the console.

// Note: Console the output in following format - "Result: [ '1', '3', '4' ]"
inputArr = getProgramInputs();

//Write your code here
let [first, , third, ...rest] = inputArr;

console.log('Result:', [first, third, ...rest]);


// 10. Instructions: Write a program that reads two arrays from command-line arguments, merges them using the spread operator, and logs the result.
inputArr = getProgramInputs();

let array1 = inputArr[0].split(',');
let array2 = inputArr[1].split(',');

//Write your code here

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];
console.log(mergedArray);


