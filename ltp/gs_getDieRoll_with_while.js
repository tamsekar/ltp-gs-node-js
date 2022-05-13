var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var roll = getDieRoll(6);

// A great roll is 1, 3 or 5, A terrible role is a 2, An ok roll is 4 or 6
// if,else if, else

while ( roll < 4) {                 //executes while when the roll is less than 4, while will execute 0 or more times.
    console.log("While loop roll " + roll);              // logs roll
    roll = getDieRoll(6);   // re-roll, if less than 4, log and re-roll, exits while if roll >= 4
}

do {                                                // do-while always executes at least once.
    roll = getDieRoll(6);                    // roll die
    console.log("do..while loop roll " + roll);     // log roll
} while (roll > 4);                          // if condition true, re-roll. If false exists do-while.


if (roll == 1 || roll == 3 || roll == 5){
    console.log("Great roll!");
} else if (roll == 4 || roll == 6){
    console.log("An OK roll")
} else{
    console.log("Terrible roll")
}

console.log("You rolled a " + roll)