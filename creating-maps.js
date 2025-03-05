// Description
// Create a map containing the details of a person as a key value pair in it.

// Map have firstname,lastname,city,mobilenumber as the key and take some demo data as their value to insert that in the map.

// Now print all keys once and  values once separately present  in the map without using any loop statement.

var map = new Map([["firstname", "John"], ["lastname", "Cooper"], ["city", "New York"], ["mobilenumber", "123456789"]]);

console.log(map.keys());
console.log(map.values());
