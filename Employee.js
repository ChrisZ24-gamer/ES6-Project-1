class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }    

    celebrateBirthday() {
        this.age++;
    }
}

class Employee extends Person {
    constructor(name, age, role, dept) {
        super(name, age);

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = 'Senior ' + this.role;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log('Happy Birthday');
    }
}

const john = new Employee('John', 32, "Web Developer", "IT");
console.log(john);
john.promote();
console.log(john);

john.celebrateBirthday();
console.log(john);

// Quiz:
// We can call the parent class constructor or parent class version of a method  from the child class using the keyword-
// super() and super.methodName respectively
// super keyword is used to refer to parent.