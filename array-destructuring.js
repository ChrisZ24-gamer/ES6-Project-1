const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
// const first = days[0], second = days[1], third = days[2], fifth = days[4], sixth = days[5];
const [first, second, third, , fifth = 'Holiday', sixth = 'Holiday'] = days;
console.log(first, second, third, fifth, sixth);

// Quiz A:
// Select the correct output of the following code snippet - 30 40 60
// a, b and c are variables declared with let keyword so that means these variables values can be changed. So on the 1st array destructuring a is 10 and b is 20. Then on the 2nd array destructuring a is 30 b is 40 and then we are skipping one element of the array so then c is the next element of array i.e., 60.
// let c;

// let [a, b] = [10, 20];

// [a, b, ,c] = [30, 40, 50, 60, 70];

// console.log(a,b,c)




// // Quiz B: a, b are variables declared with const keyword. So the values of a and b cannot be updated later. For the 1st time a is 10 and b is 20. Then we are again trying to destructure the 2nd array in a and b variables. So we will get a TypeError.  

//     let c;

// const [a, b] = [10, 20];

// [a, b, ,c] = [30, 40, 50, 60, 70];

// console.log(a,b,c) // Error




// // Quiz C: 30 40 60 70 80 undefined
// // 1st item of nums array (30) is destructured to a, 2nd item(40) to b, 3rd item(50) is skipped, 4th item(60) to c, 5th item(70) to d, 6th item(8) to e, 7th item(undefined) is skipped and 8th item(undefined) to f.

// const nums = [30, 40, 50, 60, 70, 80];

// const [a, b, , c, d, e, , f] = nums;

// console.log(a,b,c,d,e,f)