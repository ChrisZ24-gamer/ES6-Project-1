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

// const name = john.name;
const {name, age : yearsOld, address : {city : residence}, emailids: [, seconadryEmailId]} = john;
console.log(name, yearsOld, residence, seconadryEmailId);



// Quiz A: Array Destructuring uses {} to define variable having reference to array elements  inside it and Object destructuring uses [] for the same - FALSE

// Array destructuring uses [] while Object destructuring uses {}.