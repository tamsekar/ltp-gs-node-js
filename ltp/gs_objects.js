 //var getDieroll = function (dieSize){
 //   var result = Math.ceil(dieSize * Math.random());
 //   return result;
// };

var die = {
    size: 6,
    count: 1,
    roll: function (dieSize){
        var result = Math.ceil(dieSize * Math.random());
        return result;
    }
};

console.log(die)
console.log(die.roll(6));