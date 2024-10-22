var MyModule = require("./demo2.js");
MyModule.hello();
// console.log("id: " + StudentAverage.id);
// console.log("name: " + StudentAverage.name);
// console.log("grade: " + StudentAverage.grade);
// console.log("mark: " + StudentAverage.mark);
var studenavr = new MyModule.Student("113", "ABC", "12A");
    studenavr.showInfor();
    studenavr.averageMark(8);