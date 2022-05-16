var book = require("./lib/grades").book;
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("hello world!");
})

app.get("/grade", function(req, res) {
    // "1,2,3".split(",") => [1,2,3];
    var grades = req.query.grades.split(",");
    for (var i = 0; i < grades.length; i++) {
        book.addGrade(parseInt(grades[i]));
    }
    var average = book.getAverage();
    var letter = book.getLetterGrade();

    res.send("Your average is " + average + " grade is " + letter);
})

app.listen(3000);
console.log("Server ready..")