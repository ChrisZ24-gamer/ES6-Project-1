const x = 1;
// x = 2; // Cannot the value once given

const obj = {
    y: 1
};
obj.y++;
console.log(obj); //Properties in obj can be changed, obj is still referring the same object but we cannot reassign it

// Defining a const variable also requires assignment of a value to it at the time of declaration, else it will throw an error.
// const variable can't be declared without any value assign to it.

// Const variables are mostly similar to let variables, except that they must be assigned a value at the time of declaration and cannot be reassigned a new value after that.
// Const variable should always and can only be assigned a value at its declaration.