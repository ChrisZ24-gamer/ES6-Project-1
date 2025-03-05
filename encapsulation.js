// A way of data hiding.
// Refers to wrapping data with methods that act on the data. This restricts direct access to data from outside the class.

// Wihtout Ecanp. - violated the encap. principle
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person1 = new Person("Harry", 12);
console.log(person1.name);
console.log(person1.age);

person1.name = 'Voldemort';
console.log(person1.name);



// With Encap.
class Person {
    constructor(name, age) {
        let_name = name;
        let_age = age;
    }
}
let person1 = new Person("Harry", 12);
console.log(person1._name);
console.log(person1._age);

person1._name = 'Voldemort';
console.log(person1._name);



// Getters & Setters methods are used to retrieve and update the restricted attributes of the objects. These methods will provide security on the restricted attributes when tried to access outside the class. These methods help with encapsulation. Getter methods read the attribute value. Setter methods update the attribute value.

class Person {
    constructor(name, age) {
        let_name = name;
        let_age = age;
        this.getName = function() {
            return _name
        }

        this.setName = function(newName) {
            if(typeof(newName) === 'string') {
                _name = newName;
            }
        }

    }
    get name() {
        return this.getName()
    }
    set name(newName) {
        return this.setName(newName)
    }
}

let person1 = new Person("Harry", 12);

person1.name = 'Ron'


// person1.setName('Ron')
// console.log(person1._name);
//console.log(person1.getname());
console.log(person1.name);
// console.log(person1._age);

// person1._name = 'Voldemort';
// console.log(person1._name);