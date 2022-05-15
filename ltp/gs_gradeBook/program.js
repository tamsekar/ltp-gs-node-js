var book = require("./lib/grades").book


var fetchAverage = function () {
    book.reset();
    for (var i = 2; i < process.argv.length; i++) {
        book.addGrade(parseInt(process.argv[i]));
    }
    return book.getAverage();
}

var fetchSum = function () {
    book.reset();
    for (var i = 2; i < process.argv.length; i++) {
        book.addGrade(parseInt(process.argv[i]));
    }
    return book.getSumOfGrades();
}

console.log(Math.floor(fetchAverage()));
console.log(fetchSum());