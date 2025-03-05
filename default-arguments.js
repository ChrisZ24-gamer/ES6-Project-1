function greeting(message = 'Hello', name = 'World') {
    retrun `${message} ${name}!`;
}

console.log(greeting('Good morning', 'John'));
console.log(greeting('Good morning'));
console.log(greeting());
console.log(greeting(undefined, 'John'));


// Quiz: 
function func(one="Hi", two){

    console.log(`${one} ${two}`);
    
    }
    
    func(undefined, "world");
// Consider the above code snippet,what will be the output on console- “Hi world”

// If a input parameter is passed a undefined value, and if that parameter also have a default value ,then that default value will be used.