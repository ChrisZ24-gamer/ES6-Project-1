// Map objects are a collection of key-value pairs, where the key can be of any datatype. The key in a Map object can only occur once, thereby making it a useful construct in accessing the uniqueness of elements.

// {
//     "123456789": {
//         name: 'Ram',
//         age: 67
//     }
// }


// {
//     "www.google.com": "173.13.23.67",
// }


// Q1: Select the valid statement for the Map and Object-

// In a map keys are stored and accessed in an order.
// A map can have a key of any datatype while object only have of type string

// Maps and objects are not identical, they may have some common methods or functionalities but are different entities.

// Creating maps
const numbers = new Map([[1, "one"], [2, "two"], [3, "three"]]);

console.log(numbers.size);
console.log(numbers.entries());
console.log(numbers.keys());
console.log(numbers.values());

numbers.set(40, 'Forty');
console.log(numbers);

console.log(numbers.get(3));

numbers.delete(2);
console.log(numbers);

// numbers.clear()

for(let[key, value] of numbers) {
    console.log(`${key} = ${value}`);
}