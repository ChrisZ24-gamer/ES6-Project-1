const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday'
];

// for..of
for(let item of days) {
    console.log(item);
}

const greeting = 'Good morning';
for(let char of greeting) {
    console.log(char);
}

// Q1: Which of the following can be classified as an iterable- Array, String, Map
// By default Objects are not iterable in JS, but we can make them too using some custom implementation. Rest are all the iterables.