// // 1. Constants are functions scoped variables. - FALSE
// // Constants (const) and block-scoped variables (let) are scoped to the nearest enclosing block, which means they are only accessible within the {} where they are defined. This block could be a function, loop, or even an if statement.


// //2. What will be the output of the following code snippet - {name: 'Harry', age: 12}

// const person = { name: "Harry" };

// person.age = 12;

//  console.log(person);


// // 3. What will be the output of the following code snippet - [10, 20, 30]
// function show(...values) {

//     return values;

//     }

// //let a = show(10,20,30);

// console.log(a);

// // 4. What will be the output of the following code - Product = 6000

//  function show(...args) {

//     let product = 1;

//     for (let i of args) {

//         product *= i;

//     }

//     console.log("Product = "+product);

// }

// show(10, 20, 30);


// // 5. Consider the following code snippet -

 

// // let c=[100,200,330,400];

// // let [a,,...b]=c;

// // console.log(a,b);

 

// // What will be the output of the above given code-100 [330,400]


// // 6. Consider the following code snippet - 

 

// function product (a=1, b=1){

//     console.log(a*b);

// }

 

// product(10, 2);

// product(10);

// product(undefined,2);

// product();

// What will be the output of each of the product method calls in the above given code? 20 10 2 1


// 7. What is the output of the following code? Sunday evening

function defaultArg (weekday='Sunday', daytime='morning'){

    return weekday + ' ' + daytime;
  
  }
  
  console.log (defaultArg (undefined, 'evening'));


// 8. To create a multiline string using a template literal, we enclose the string in: Back ticks

//9. What is the output of the following code? 7 [11,13,15]

let arrayItems = [3,5,7,9,11,13,15];

let [x, ,y, ,...z] = arrayItems;

console.log(y); 

console.log(z);


// 10. All the arguments in a function can not be given a default value. False
// All the arguments in a function can be given default values if required.


// 11. Template literals are used for printing multiline strings and embedded expressions. True


// 12. What is the purpose of using the let keyword in JavaScript? 
// The correct answer is:

// To declare a variable with block scope

// Explanation:
// let is used to declare variables that are block-scoped, meaning they are only accessible within the block, statement, or expression in which they are defined (such as within a loop or an if statement). This is in contrast to the var keyword, which has function scope and can be accessed outside the block.


// 13. Which of the following is an example of object destructuring in JavaScript?
// const { name, age } = person;


// 14. Which of the following is a feature introduced in ES6? Template Strings

// 15. Which of the following statements about let and const keywords is true? Variables declared with const cannot be reassigned