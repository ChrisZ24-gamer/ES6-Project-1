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

var resultDays = days.filter(function(item) {
    // The filter() method returns a new array which is a subset of the array it is called on. It does so only if the condition in the function defined in the filter method is satisfied.

    // return true;
    // return false;
    return item.hours >= 8;
});
console.log(resultDays);