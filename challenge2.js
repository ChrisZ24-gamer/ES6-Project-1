// Write a function which accepts only one argument . But you want to pass a variable  number of  arguments to this function and want the function to return the sum of those provided arguments.

// Design a function in such a way using the rest operator that it accepts all provided arguments into a single variable and then add those elements and return their sum.


function add(...arg) {
    let result = 0;

    for (let a of arg) result += a;

    return result
}

console.log(add(1)) // returns 1
console.log(add(1, 2)) // returns 3
console.log(add(1, 2, 3, 4, 5)) // returns 15