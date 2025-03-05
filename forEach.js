forEach()
var days = [
    { day: 'Sunday', hours: 2 },
    { day: 'Monday', hours: 8 },
    { day: 'Tuesday', hours: 7 },
    { day: 'Wednesday', hours: 10}
];

days.forEach(function(item) {
    console.log(item);
});

// Q1: What will be the output of the below code snippet-

var objs=[

    {name: "One", val:1},

    {name: "Two", val:3},

    {name: "Three", val:5}

]

objs.forEach(function(item){

console.log(item.val);

}); // 1 3 5
// forEach method will get each element of objs array and it will print the val property of that element.So the answer will be 1 3 5.