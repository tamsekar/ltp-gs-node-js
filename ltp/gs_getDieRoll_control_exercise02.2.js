var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var roll = getDieRoll(6);

// A great roll is 1, 3 or 5, A terrible role is a 2, An ok roll is 4 or 6
// if,else if, else

if (roll == 1 || roll == 3 || roll == 5){
    console.log("Great roll!");
} else if (roll == 4 || roll == 6){
    console.log("An OK roll")
} else{
    console.log("Terrible roll")
}

console.log("You rolled a " + roll)