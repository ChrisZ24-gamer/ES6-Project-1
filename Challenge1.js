// Write a function called displayName() that takes an object as an argument and prints the person's first and last name. Use object destructuring in the function argument. And also, use template strings when printing the first and last name.

// Ex object is-

function displayName({first, last}) {
    console.log(`${first} ${last}`);
}

const person = {

    first: 'Virat',

    last: 'Kohli',

    twitter: '@vkohli',

    company: 'Cricketer'

}

displayName(person);

// OUTPUT: Virat Kohli