// Die roll program01 with function to replace repetitive code.

var getDieRoll = function () {
    console.log("Rolling a dice...");
    return Math.ceil(6 * Math.random())
};

var firstDie = getDieRoll();
console.log(firstDie);
var secondDie = getDieRoll();
console.log(secondDie);

console.log("Total Roll..");
console.log(firstDie + secondDie);