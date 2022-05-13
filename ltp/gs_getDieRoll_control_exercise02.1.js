var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var roll = getDieRoll(6);

// A great roll is a 6, A terrible roll is a 1, an OK roll is 2,3,4,5
// if, elseif, else

if (roll == 6) {
    console.log("Great roll!");
} else if (roll >= 2 && roll <=5) {
    console.log("That was an OK roll");
} else {
    console.log("Terrible roll");
}

console.log("You rolled a " + roll)