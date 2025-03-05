// 1. Select the correct output of the following code snippet - 

let num1 = [40,50,60];  

let num2 = [10,20,30,...num1,70,80,90,100];  

console.log(num2); //Output: [10,20,30,40,50,60,70,80,90,100]


// 2. Select the correct output of the following code snippet - 

function add(a, b =200){

    console.log(a+b);

}

add(100); // Output: 300


// 3. To use the value of a data variable inside a template string literal, we enclose the variable inside: ${} 


// 4. Select the valid statements from the following options- 
//The const keyword is used to create an immutable variable

//The let keyword is used to create a mutable variable


// 5. State whether True or False - FALSE 
// Explanation : Let keyword is used to declare a block scoped variable.
// The statement “let” declares a function scoped variable.


// 6. Consider the following code snippet - 
let name = 'Harry Potter';

let school = 'Hogwarts';
// Choose all the valid statements which display the following output -

// The famous wizard Harry Potter from Hogwarts school.

// Output: console.log(`The famous wizard ${name} from ${school} school.`);
//console.log("The famous wizard",name,"from",school,"school.");
// Explanation : Both 1st and 2nd options are correct. The 1st way uses template strings.



// 7. Select the correct use of const keyword- 
// It is used to make a variable constant so that it can’t be updated


// 8.  Which of the following statements is false about the rest parameter in JavaScript?
// The Rest parameter can not be used for object destructuring.
// Explanation: We can pass an indefinite number of arguments to a function using the rest parameter. It can be used both for object and array destructuring.

// 9. What will be the output of the following code?

function func(n) {

    if (n == 6) {

        let number = 2;

    }

    console.log(number);

}

 

var n1 = 6;

func(n1); // Output: Reference Error


// 10. Which of the following is not an example of a spread operator? 
// const ar1 = [1, 2, 3, 4, 5, 6];
// const [one, two, ...remaining] = ar1;


// Correct Option
// function demo (a, b, ...restOfArgs) {  

// // statements  

// }  

// Explanation: In the second option, we are using the rest operator to contain the rest of the values of the array ar1 in array remaining. In the third option, we are using the rest operator to combine the rest of the arguments into a single array restOfArgs. All the other options are examples of spread operators