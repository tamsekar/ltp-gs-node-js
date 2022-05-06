/* Variables */

var x, y;

x = parseInt(process.argv[2]);
y = parseInt(process.argv[3]);
add = (x + y);
sub = x - y;
str = "Hello";
boo = x > y;
flt = 14.99
type = typeof str;

console.log("addition: ", add);
console.log("substraction: ", sub);
console.log(typeof x);
console.log(typeof y);
console.log(type);
console.log(typeof boo);
console.log(typeof flt)