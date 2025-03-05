// 1. pass items of an array as arguments when calling a function
const numbers = [10, 45, 32, 78, 33, 19];
const result = Math.max(...numbers);
console.log(result);

const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // spread out items in arrays into comma-separated values


// 2. Object spread 
const john = {
    name: 'John',
    age: 32,
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address: {
        city: 'Bangalore',
        pinCode: 560100
    }
};

const johnCopy = { // a shallow copy - any primitive values such as name, age, emailids are primitive data types.
    ...john
};


// primitive value change
johnCopy.name = 'Johnathan';

// non-primitive value change
johnCopy.emailids.push('john@xyz.com');

console.log(john);
console.log(johnCopy);


// Quiz A: Select the valid statements regarding the spread operator in js - 
// It can be used to pass the elements of an array as the separate arguments to a function
// It can be used to concatenate two or more arrays
// It can be used to create a shallow copy of an object(only primitive values rest will be deep copied) into another.