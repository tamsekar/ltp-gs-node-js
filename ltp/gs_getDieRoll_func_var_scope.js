// Program to demo variable scopes
// local and global
// Local variables are declared inside a function
// Global variables are any variables not declared inside a function.

var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
};

var showResult = function () {
    console.log(firstDie);
    console.log(secondDie);
    console.log(firstDie + secondDie);
};

var firstDie = getDieRoll(6);
var secondDie = getDieRoll(6);
showResult();

// console.log(result); // fails with error: "result is undefined" since it's not global variable, it's scope is limited to the function block.