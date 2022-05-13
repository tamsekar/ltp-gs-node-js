// var things = [1, 2, 4, "pizza" ];
var genArray = function () {                // generating an array using function
    var argsGen = process.argv.slice(2);             // argGen stores all arguments in an array
    return argsGen;                         // return the array
}
var things = genArray()                     // things will call the function to generate an array
console.log(things.length);                 // logs array length

for (var i = 0; i < things.length; i++) {   // loops until length value is matched
    console.log("Value of i " + i);         // logs the initializer value on every loop
    console.log(things[i]);                 // logs things subscript i
}
