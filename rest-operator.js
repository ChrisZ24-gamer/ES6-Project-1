// 1. When declaring a function's arguments.
function foo(x, y, ...others) {
    console.log(x);
    console.log(y);
    console.log(others);
}

function sort(...numbers) {
    console.log(numbers);
    return numbers.sort();
}

const result = sort(14, 78, 45, 10, 67);
console.log(result);


// Quiz A: Select the correct statement regarding rest operator - It can be used while accepting function arguments, It can be used with array destructuring, It can be used with object destructuring.
// Rest operator can be used with function arguments, with array destructuring and object destructuring also.




// 2. When array destructuring.
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
const [first, second, ...restOfDays] = days;
console.log(first, second, restOfDays);


// Quiz B: What will be the output of the below code - It will throw an error
// const count=[1,2,3,4,5]

// const[first ,second,...allAfter,last]=count; // Rest operator element must be the last element.

// console.log(last)


// 3. When object destructuring.
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
const {name, address : {city}, ...otherDetailsOfJohn} = john;
console.log(name, city, ...otherDetailsOfJohn);
