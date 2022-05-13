var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
}

var roll = getDieRoll(6);

/* for loop:
* for (initializer, condition, expression) {
*  // code block
* }
* initializer: (executes once);
* condition: (executes before every pass through the loop;
* final expression: (executes at the end of every pass through loop)
*/

for (var i = 0; i < 5; i += 1 ) {
    console.log("Value of initializer " + i)
    console.log("for loop roll " + roll);
    roll = getDieRoll(6)
}

if (roll >= 3 && roll <= 5) {
    console.log("Great roll!")
} else if (roll == 1) {
    console.log("Terrible roll")
} else {
    console.log("That was a OK roll")
}

console.log("You rolled a " + roll)