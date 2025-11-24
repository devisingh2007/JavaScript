

// Q 01_even_odd_number
//  Given a number, print whether it is "even" or "odd".
function checkEvenodd(num) {
    if (num % 2 == 0) {
        console.log("number is even");
    }
    else {
        console.log("number is odd");
    }
}
checkEvenodd(50);



// Q 02_maximum_number_of_two
//  Given two numbers, print the larger one.
function max(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is maximum ");
    }
    else {
        console.log("num2 is maximum ");
    }
}
max(25, 50);


//  Q 03_maximum_number_of_three
//  Given three numbers, print the largest.
function maxOfthree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("num1 is maximum ");
    }
    else if (num2 > num3 && num2 > num1) {
        console.log("num2 is maximum ");
    }
    else {
        console.log("num3 is maximum ");
    }
}
maxOfthree(50, 20, 0)


//  Q 04_Positive_Negative_Zero
// Given a number, print "positive", "negative", or "zero".
function positiveNegativeorzero(num) {
    if (num > 0) {
        console.log("number is positive ");
    }
    else if (num < 0) {
        console.log("number is nagative ");
    }
    else {
        console.log("number is Zero");
    }
}
positiveNegativeorzero(50);


//  Q 05_Age_Group
//  Given an age, print whether the person is "child", "teenager", or "adult" (you can assume: 0–12 child, 13–19 teenager, 20+ adult).
function ageGroup(age) {
    if (age <= 12 && age > 0) {
        console.log("child");
    }
    else if (age > 12 && age < 19) {
        console.log("teenager");
    }
    else if (age > 19) {
        console.log("adult");
    }
    else {
        console.log("wrong input");
    }
}
ageGroup(20);


// Q 06_Grade_Calculator
// Given marks 0–100, print grade.
// using if else

function gradeCalculator(mark) {
    if (mark >= 0 && mark <= 100) {
        if (mark >= 90) {
            console.log("your Grade is 'A'");
        }
        else if (mark >= 80 && mark <= 89) {
            console.log("your Grade is 'B'");
        }
        else if (mark >= 70 && mark <= 79) {
            console.log("your Grade is 'C'");
        }
        else if (mark >= 60 && mark <= 69) {
            console.log("your Grade is 'D'");
        }
        else if (mark >= 0 && mark <= 59) {
            console.log("your Grade is 'F'");
        }
    }
    else {
        console.log("wrong marks input")
    }
}

gradeCalculator(85)

// using swich case;

function gradeCalculatorusingswich(marks) {
    if (marks >= 0 && marks <= 100) {
        switch (true) {
            case (marks >= 100 && marks <= 90):
                console.log("your Grade is 'A'");
                break;
            case (marks >= 80 && marks <= 89):
                console.log("your Grade is 'B'");
                break;
            case (marks >= 70 && marks <= 79):
                console.log("your Grade is 'C'");
                break;
            case (marks >= 60 && marks <= 69):
                 console.log("your Grade is 'D'");
                break;
            case (marks >= 0 && marks <= 59):
                 console.log("your Grade is 'F'");
                break;
        }
    }
    else {
        console.log("wrong marks input")
    }
}
 gradeCalculatorusingswich(55);

// using diffrent way

function gradeCalculator3(marks)
{
     if (marks >= 0 && marks <= 100) {
     var mark=Math.floor(marks/10);

        switch (mark) {
            case 10:
            case 9:
                console.log("your Grade is 'A'");
                break;
            case 8:
                console.log("your Grade is 'B'");
                break;
            case 7:
                console.log("your Grade is 'C'");
                break;
            case 6:
                 console.log("your Grade is 'D'");
                break;
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
            case 0:
                 console.log("your Grade is 'F'");
                break;
        }
    }
    else {
        console.log("wrong marks input")
    }
}
gradeCalculator3(55)

// Q 07_Divisible by 5
//  Given a number, print whether it is divisible by 5.

function divisibleBy5(num)
 {
    if(num%5==0)
    {
    console.log("divisible by 5");
    }
    else{
         console.log("not divisible by 5");
    }
}
divisibleBy5(56)
// type-->2
function divisible5(num){{
    console.log(num%5==0? "Number is divisinle by 5": "Number is not divisinle by 5");
}}

divisible5(52)
// Q 08 Divisible by 3 and 5
//  Given a number, print if it is divisible by both 3 and 5.
function divisibleBy5and3(num)
{
    console.log(num%5==0&&num%3==0?"Number is divisinle by 5 and 3": "Number is not divisinle by 5 and 3");
}
divisibleBy5and3(15);


// Q 09  Leap Year (Simple Rule)
// Given a year, check if it is a leap year. (Simple version: divisible by 4 → leap; you can refine later.)
function leapYear(year) {
    if (year % 400 === 0) {
        console.log("leap year");
    } else if (year % 100 === 0) {
        console.log("not a leap year");
    } else if (year % 4 === 0) {
        console.log("leap year");
    } else {
        console.log("not a leap year");
    }
}

leapYear(2000);



// Q 10 In Range 10–50
// Given a number, check if it lies between 10 and 50 (inclusive).

function range(num)
{
    if(range>=10&&range<=50)
    {
        console.log("In range");
    }
    else{
        
        console.log("not of range");
    }
}
