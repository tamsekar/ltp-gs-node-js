var book = require("./lib/grades").book


var fetchAverage = function () {
    for (var i = 2; i < process.argv.length; i++) {
        book.addGrade(parseInt(process.argv[i]));
    }
    return book.getAverage();
}

console.log(Math.ceil(fetchAverage()));