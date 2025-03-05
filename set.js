let primes = new Set([2, 3, 5, 7, 11, 13]);

console.log(primes.size);
primes.add(17);
console.log(primes);

primes.add(7);
console.log(primes);

primes.delete(5);
console.log(primes);

console.log(primes.has(11));


// Q1: Select the valid methods and properties of a set object - size, add(), delete(), has()
// All are either valid property or method of a set object.
