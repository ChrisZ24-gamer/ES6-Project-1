// Parent class
class Shape {
    draw () {
        console.log('Drawing a shape');
    }
}

// Child class
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a Rectangle');
    }
}

// Child Class
let shape = new Shape();
let Rectangle = new Rectangle();

shape.draw()
rectangle.draw()