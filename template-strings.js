const name = 'John', message = 'Good morning';
// const greeting = message + ' ' + name + '!';
const greeting = `${message} 


${name}!`;
console.log(greeting);

const john = {
    name: 'John',
    email: 'john@gmail.com',
    age: 32
};

// const strTr = '<tr><td>' +
//     '<td>' + john.name + '</td>' +
//     '<td>' + john.email + '</td>' +
//     '<td>' + john.age + '</td>' +
//     '</tr>';

const strTr = `
    <tr>
        <td>${john.name}</td>
        <td>${john.email}</td>
        <td>${john.age}</td>
    </tr>    
    
`;

console.log(strTr);

// To access the value of a variable say obj inside the back-Tics string template,which of the following is a correct way-
// ${variable} is the correct way to insert the value of variable in a string template literal.