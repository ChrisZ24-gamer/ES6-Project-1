// Description
// Create a class having one constructor and a method named age.

// The constructor accepts two arguments: one is the name of the car and second is the manufacturing year of that car.

// The age() method accepts an argument which is the year in which we want to find the age of that car.ie, if the argument is 2022 and the year of car manufacturing is 2014 so age() will return 2022-2014=8.

 

// Now create the object of the above class and set the name and manufacturing year of the car as “Ford”,2012 while object creation.

// Now get the current year from the date object in js and print the age of the car.

class Car {
    constructor(name, year) {
        console.log(this);
        this.name = name;
        this.year = year;
    }    

    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
var ageOfCar = "My car is " + myCar.age(year) + " years old."
console.log(ageOfCar)