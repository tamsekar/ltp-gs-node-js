// Die roll program with function to replace repetitive code.

var getDieRoll = function () {
    console.log("Rolling a die...");
    return Math.ceil(6 * Math.random())
};

var firstDie = getDieRoll();
console.log(firstDie);
var secondDie = getDieRoll();
console.log(secondDie);

console.log("Total Roll..");
console.log(firstDie + secondDie);