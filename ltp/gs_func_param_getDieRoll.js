// Roll die program with function accepting parameters
var getDieRoll = function (dieSize) {
    console.log(dieSize);
    return Math.ceil(dieSize * Math.random());
};

var firstDie = getDieRoll(6);
var secondDie = getDieRoll(6);

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);