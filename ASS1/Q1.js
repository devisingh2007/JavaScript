var maths = 80;
var english = 55;
var hindi = 95;
var gujrati = 85;
var science = 89;

var total = maths + english + hindi + gujrati + science;
var percentage = total / 5;

if (percentage >= 90) {
    grade = "Grade A";
} else if (percentage >= 80) {
    grade = "Grade B";
} else if (percentage >= 70) {
    grade = "Grade C";
} else if (percentage >= 60) {
    grade = "Grade D";
} else {
    grade = "Fail";
}
 

console.log(grade);