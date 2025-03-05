// 1. Consider the following code - 
 

class Vehicle{

    constructor(regNum, color){

        this.regNum = regNum;

        this.color = color

        this.speed = 30

    }

    increaseSpeed(){

        this.speed += 10

    }

}

 

class Car extends Vehicle{

    constructor(regNum, color, type, model){

        super(regNum, color)

        this.type = type

        this.model = model

    }

 

}

 

let car = new Car()

car.increaseSpeed()

console.log(car.speed)

// What will be the output of the given code? 40



// 2. Consider the following code - 

let numss = new Map ([ [1, 1], [2, 4], [3, 9], [4, 16] ])

let sum = 0

numss.forEach(num => {

    sum += num

});

console.log(sum)

// What will be the output of the above program? 30


// 3. What will be the output of the following code snippet - 16

let nums = new Map ([ [1, 1], [2, 4], [3, 9], [4, 16] ])

console.log(nums.get(4))


// 4. Which of the following keywords is used to refer to an instance of the class? this

// 5. Which of the following is not a loop? forEach is an array iterator method. Rest all are different types of loops in JavaScript.

// 6. Which of the following statements are not true about the filter () method? It returns no element if we put a “return true” statement inside the function.

// 7.  JavaScript Maps are objects that store key-value pairs where keys can be of any datatype. True

// 8. A JavaScript set can hold duplicate values. false

// 9. Which method in JavaScript is used to create a new array with all elements that pass a test provided by a function? filter()

// 10. Which of the following statements best describes encapsulation in JavaScript? Encapsulation is a way to hide the internal implementation details of an object and only expose a public interface.