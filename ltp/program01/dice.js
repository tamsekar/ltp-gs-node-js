var dice = {
    size: 6,
    totalRolls: 0,
    roll: function (){
        var result = Math.ceil(this.size * Math.random());
        this.totalRolls += 1
        console.log(this)
        return result;
    }
};

exports.die = dice;
