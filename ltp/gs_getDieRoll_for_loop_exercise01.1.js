var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var roll = getDieRoll(6);

for (var i = 0; i < 10; i += 1 ) {
    if (roll >= 4){
        console.log("*")
    } else {
        console.log("-")
    }

}

if (roll >= 3 && roll <= 5) {
    console.log("Great roll!")
} else if (roll == 1) {
    console.log("Terrible roll")
} else {
    console.log("That was a OK roll")
}

console.log("You rolled a " + roll)