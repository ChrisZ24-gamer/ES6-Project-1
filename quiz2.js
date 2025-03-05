// 1. Why is super used? It’s used to call parent class constructor

// 2. Consider the following statement -

// const numbers = new Map([[1, 1], [2, 4], [3, 9], [4, 16]]);

// What will the following statement do - It will add a new key 5 with a value 25
// The set() method is used to add a new key-value pair.

// numbers.set(5,25);

// 3. Consider the following code snippet -

class User{

    constructor(name,age=9) {

        this.name  = name;

        this.age = age;

    }

    getData() {

        console.log(this.name + " is " + this.age + " years old !");

    }

}

var user =new User("foo",7);

user.getData();

 

// What will be the output of the above code snippet-foo is 7 years old !


// 4. What will be the output of the following code snippet - 3

let set = new Set();

set.add(1);

set.add('1');

set.add({ key: 'value' });

console.log(set.size);

// 5. Getters and setters enable us to get and set properties via methods. - True

// 6. Which of the following statements are not true about a Map object? Maps are unordered key-value pairs. Maps and Objects are the same in JavaScript.

// 7. A constructor method is defined inside: A class

// 8. What is the output of the following code? Class A Class B

class A {

    display () {

        console.log ('Class A');

    }

}

class B extends A {

    display () {

        super.display();

        console.log('Class B')

    }

}

var ob = new B();

var output = ob.display();


// 9. In the syntax of filter() function given below, what do we mean by callback? Callback is a function

//arrayItems.filter(callback(element, index, arr), this)

// 10. Which of the following JavaScript features helps enforce encapsulation in classes? Private methods and properties

// 11. What is the output of the following code snippet? "Hello, John! You are majoring in Computer Science."

class Person {

    constructor(name) {
  
      this.name = name;
  
    }
  
    greet() {
  
      console.log(`Hello, ${this.name}!`);
  
    }
  
  }
  
  class Student extends Person {
  
    constructor(name, major) {
  
      super(name);
  
      this.major = major;
  
    }
  
    greet() {
  
      console.log(`Hello, ${this.name}! You are majoring in ${this.major}.`);
  
    }
  
  }
  
  const student = new Student('John', 'Computer Science');
  
  student.greet();

// 12. Which of the following is NOT a benefit of using classes in JavaScript? Improved performance

// 13. What is the output of the following code snippet? 
// "The animal Max makes a sound."

// "The animal Buddy makes a sound."

// "The dog Buddy barks." 

class Animal {

    constructor(name) {
  
      this.name = name;
  
    }
  
    speak() {
  
      console.log(`The animal ${this.name} makes a sound.`);
  
    }
  
  }
  
  class Dog extends Animal {
  
    speak() {
  
      super.speak();
  
      console.log(`The dog ${this.name} barks.`);
  
    }
  
  }
  
  const animal = new Animal('Max');
  
  const dog = new Dog('Buddy');
  
  animal.speak();
  
  dog.speak();


// 14. What is the output of the following code - [2, 4]

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

// 15. Which method is used to check if a specific element exists in a Set? has()