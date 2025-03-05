// Poly - Many & Morph - Forms
// Means the ability to behave in different forms.
// Operating systems can be Windows, IOS, or Unix.
// In OOP, polymorphism refers to the ability of an object or a function to behave in different forms.
// In a code, there can be multiple functions named area(). Each function will compute area differently for different shapes, like a circle or a rectangle.


// let a = 1 * 2
//let a = 'Harry' + 'Potter'
let a = 'Harry' + 123

console.log(typeof(a), a);


// Method overloading refers to multiple functions with the same name with different no. of arguments and behaviour.
function add(a, b) {
    return a + b
}

function add(a) {
    return a + 5
}

console.log(add(1, 2));
console.log(add(5));



// Polymorphiam with Functions & Objects
// Is also achieved by implementing functions with the same names and arguments in different objects.

//rectangle object
const rectangle = {
    length: 12,
    width: 14,
    area() {
        console.log('area of rectangle: ' + this.length * this.width);
    }
}

// square object
const square = {
    side: 10,
    area() {
        console.log('area of square: ' + this.side ** 2);
    }
}

rectangle.area()
square.area()

