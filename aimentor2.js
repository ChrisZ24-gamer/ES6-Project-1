// // Instructions: Write a program that defines a class called Person with properties for name and age. Create an instance of the class and log its properties.

// // Hints:

// // Make sure to define the Person class with the correct properties.
// // Use the constructor method to initialize the object's properties.
// // Create an instance of the class using the new keyword and pass the required arguments to the constructor.
// // Access the properties of the instance using the dot notation (instance.property).
// // 1.
// inputArr = getProgramInputs();

// //Define the class Person here
// class Person {
//   constructor(name, age) {
//     // constructor code
//     this.name = name;
//     this.age = age;
//   }

// }

// let person = new Person(inputArr[0], Number(inputArr[1]));
// console.log(person.name);
// console.log(person.age);


// // 2. Instructions: Extend the Person class to include a method called greet that logs a greeting using the person's name.

// // Hints:

// // Use the class keyword to define the Person class.
// // Inside the constructor method, assign the name and age arguments to the corresponding properties of the class.
// // Define the greet method inside the class to log a greeting using the person's name.
// // Create an instance of the Person class using the new keyword and call the greet method on the instance.
// inputArr = getProgramInputs();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //Write the greet menthod here
//  greet() {
//     console.log('Hello, ' + this.name + '!');
//   }
  
// }

// let persons = new Person(inputArr[0], inputArr[1]);
// persons.greet();


// // 3. Instructions: Define a class called Student that extends the Person class and adds a property for the student's grade. 

// // Hints:

// // Make sure to define the Person class with the name and age properties.
// // Use the extends keyword to create the Student class that inherits from the Person class.
// // In the Student class, use the super() method to call the constructor of the Person class and pass the name and age arguments.
// // Add a new property for the student's grade in the Student class.
// // Use the getProgramInputs() function to get input from the user and create an instance of the Student class with the provided values.
// inputArr = getProgramInputs();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// //Define the student class here
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);

//     this.grade = grade;
//   }
// }


// let name = inputArr[0];
// let age = Number(inputArr[1]);
// let grade = inputArr[2];

// let student = new Student(name, age, grade);
// console.log(student);


// // 4. Instructions: Modify the Person class to include a private property called _isAdult that represents whether the person is an adult. Add a getter and setter for this property. Use the getProgramInputs() function to get input from the user for the name and age of the person.

// // Hints:

// // Make sure to define the Person class with the correct properties and methods.
// // Use the constructor to initialize the name, age, and _isAdult properties.
// // Implement the getter and setter methods for the _isAdult property.
// // Use the getProgramInputs() function to get input from the user.
// inputArr = getProgramInputs();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this._isAdult = age >= 18;
//   }

//  //Write your code here
//   get isAdult() {
//     return this._isAdult;
//   }

//   set isAdult(value) {
//     this._isAdult = value;
//   }

// }

// let name = inputArr[0];
// let age = Number(inputArr[1]);

// let person = new Person(name, age);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isAdult);


// // 5. Instructions:  Write a program in which the Person class should include a method called displayDetails that logs the person's name and age using the format - "console.log('Name: ' + this.name);"

// // Next, create a new class called Employee that extends the Person class. The Employee class should override the displayDetails method to include additional details like the employee's job title. Use "console.log('Job Title: ' + this.jobTitle);" to display the Job Title.

// // Hints:

// // Make sure to define the Person class with the correct properties and method.
// // Use the extends keyword to create the Employee class that extends the Person class.
// // Override the displayDetails method in the Employee class to include the additional details.
// // Use the super keyword to access the properties and methods of the parent class.
// // Use the getProgramInputs() function to get input from the user and create an instance of the Employee class.
// // Call the displayDetails method on the instance to display the person's details.
// let input_array = getProgramInputs();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //Write the displayDetails function here 
//   displayDetails() {
//   console.log('Name: ' + this.name);
//   console.log('Age: ' + this.age);
// }
// }

// //Write the code here for Employee class
// class Employee extends Person {
//   constructor(name, age, jobTitle) {
//   super(name, age);
//   this.jobTitle = jobTitle;

// }
// //Override the displayDetails method in the Employee class to include the job title.
// displayDetails() {
//   super.displayDetails();
//   console.log('Job Title: ' + this.jobTitle);
// }
// }

// let name = input_array[0];
// let age = input_array[1];
// let jobTitle = input_array[2];

// let employee = new Employee(name, age, jobTitle);
// employee.displayDetails();


// // 6. Instructions: Implement method overloading in the MathOperations class to create methods for addition that can take two numbers and return their sum accordingly. 

// // Hints:

// // Define method with the name in the MathOperations class.
// // Convert the input values from strings to numbers using the Number() function.
// // Return the sum of the numbers from the method.
// // FUCK THIS QUESTION


// // 7. Instructions: Write a program that reads an array of numbers from "inputArr" and logs each element using the forEach method.
// inputArr = getProgramInputs();

// //Write your code here
// let numbers = [2,4,6,1,9];

// inputArr.forEach(function(element) {
//   console.log(element);
// });


// // 8. Instructions: Write a program that reads an array of numbers from "inputArr" and uses the forEach method to iterate over the array. For each element, log the element along with its index in the array using following format - "console.log('Element at index ' + index + ': ' + element);"

// // Hints:

// // Make sure to use the correct syntax to access command-line arguments.
// // Use the forEach method on the array of numbers.
// // Define a callback function that takes two arguments: the current element and its index.
// // Within the callback function, log the element along with its index.
// inputArr = getProgramInputs();

// //Write your code here
// let numbers = [2,4,6,1,9];

// inputArr.forEach(function(element, index) {
//   console.log('Element at index ' + index + ': ' + element);
// });



// // 9. Instructions: Write a program that reads an object "inputObj" and uses the forEach method to iterate over its properties. For each property, log the key-value pair to the console using "console.log(inputObj[key]);".

// // Hints:

// // Make sure to use the correct syntax for the forEach method.
// // Remember to access the value of each property using the key.
// // You can use template literals to concatenate the key and value into a single string.
// inputObj = getProgramInputs();

// //Write your code here
// Object.keys(inputObj).forEach(function(key) {
//   console.log(inputObj[key]);
// });



// // 10. Instructions: Write a function called logSquared that takes an array of numbers as an argument. The function should square each element of the array and log the result using the console.log(squared) method and the forEach method.

// //Hints:

// //Use the forEach method to iterate over the array.
// //Inside the callback function, calculate the square of each element using the multiplication operator (*).
// //Use the console.log method to log the squared result.
// inputArr = getProgramInputs();

// //Write the code for logSquared function here
// function logSquared(numbers) {
//   // code for squaring each element and logging the result
//   numbers.forEach(function(number) {
//   let squared = number * number;
//   let numbers = inputArr.map(Number);
//   console.log(squared);
// }); 
// }

// let numbers = inputArr.map(Number);
// logSquared(numbers);


// // 11. Instructions: Write a program that creates a Map called myMap and adds key-value pairs to it.  After adding the key-value pairs, use the get() method to retrieve and log the values associated with the keys.

// // Note: The default inputArr is an array having six elements in this case.

// // Hints:

// // Make sure to use the correct syntax to create a Map and add key-value pairs.
// // Remember to convert the input values from strings to the appropriate data types if necessary.
// // Use the get() method to retrieve the values associated with the keys.
// inputArr = getProgramInputs();

// // Define the myMap here
// let myMap = new Map();

// myMap.set(inputArr[0], inputArr[1]);
// // Set values for rest of the array elements 
// myMap.set(inputArr[2], inputArr[3]);
// myMap.set(inputArr[4], inputArr[5]);

// console.log(myMap.get(inputArr[0]));
// console.log(myMap.get(inputArr[2]));
// console.log(myMap.get(inputArr[4]));


// // 12. Instructions: Write a program that reads an array of numbers from command-line arguments and filters the array to create a new array that only contains even numbers. Print the new array.

// // Hints:

// // Make sure to use the correct syntax to access command-line arguments.
// // Remember to convert the input values from strings to numbers using the Number() function.
// // Use the filter() method along with a callback function to create a new array that contains only even numbers.
// // The callback function should return true if the element is even (i.e., divisible by 2) and false otherwise.
// inputArr = getProgramInputs();

// // Write your code here
// let numbers = inputArr.map(Number);
// // Note: inputArr is the required input array here
// // Define a variable to store the filtered even numbers array
// let evenNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });

// console.log('Even numbers: ' + evenNumbers);


// // 13. Instructions: Write a program that iterates over the entries of a Map called bookPrices and logs each book with its price.

// // Note: Set the values as following - 
// // bookPrices.set('Harry Potter', 10);
// // bookPrices.set('Lord of the Rings', 15);
// // bookPrices.set('The Hobbit', 12);

// // Print the output using - "console.log(book + ': $' + price);"

// // Hints:

// // Make sure to create a Map called bookPrices and add some books with their prices using the set() method.
// // Use the entries() method to get an iterator object that contains the key-value pairs of the Map.
// // Use a loop, such as a for...of loop, to iterate over the entries and access the key and value of each pair.
// // Log each book with its price using the console.log() function.
// // Write your code here
// let bookPrices = new Map();
// // You need to create a new Map object named bookPrices to store the books and their prices. The correct syntax for creating a new Map object is new Map().
// bookPrices.set('Harry Potter', 10);
// bookPrices.set('Lord of the Rings', 15);
// bookPrices.set('The Hobbit', 12);

// for (let [book, price] of bookPrices.entries()) {
//   console.log(book + ': $' + price);
// }


