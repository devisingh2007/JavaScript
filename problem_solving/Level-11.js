// Q101. Square of a Number
// Write a function that takes a number and returns its square.

function square(num)
{
    console.log(num*num);
}
square(2)


// Q102. Sum of Two Numbers
// Write a function that takes two numbers and returns their sum.

function sumoftwonum(num,num2)
{
    console.log(num+num2)

}
sumoftwonum(12,13)

// Q103. Greet by Name
// Write a function that takes a name and returns "Hello, <name>!".

function GreetByName(name)
{
   if(name)
    console.log("Hello,"+name+"!")
else
    console.log("Hello,"+" !")
}
GreetByName()

// Q104. Check Even (true/false)
// Write a function that returns true if number is even, false otherwise.

function CheckEven(num)
{
    console.log(num%2==0?true:false)
}
CheckEven(7)

// Q105. Check Odd (true/false)
// Write a function that returns true if number is odd, false otherwise.

function CheckOdd(num)
{
    console.log(num%2!=0?true:false)
}
CheckOdd(7)

// Q106. Is Between 1 and 100
// Write a function that returns true if n is between 1 and 100 (inclusive).

function CheckNumBetween1to100(num)
{
    console.log(num>0&&num<100?true:false)
}
CheckNumBetween1to100(-7)


// Q107. Is First Number Greater Than Second
// Write a function that takes two numbers and returns true if first > second.
function CheckfirstIsGreter(num1,num2)
{
    console.log(num1>num2?true:false)
}
CheckfirstIsGreter(7,10)

// Q108. Is String Length > 5
// Write a function that returns true if string length is greater than 5.
function StringLen(str)
{
    console.log(str.length>5?true:false)
}
StringLen("DERFGTH")

// Q109. First Character of String
// Write a function that returns the first character of a string.

function StringFirst(str)
{
    console.log(str[0])
}
StringFirst("DERFGTH")


// Q110. Last Character of String
// Write a function that returns the last character of a string.
function StringLast(str)
{
    console.log(str[str.length-1])
}
StringLast("DERFGTH")


// Q111. Longer of Two Strings
// Write a function that returns the longer string. If equal, you can return the first.

function CheckfirstIsGreterINstring(str1,str2)
{
    console.log(str1.length>str2.length?true:false)
}
CheckfirstIsGreterINstring("SDFGHJjj","hello")

// Q112. Average of Three Numbers
// Write a function that returns the average of three numbers.

function AverageOfthree(num1,num2,num3)
{
    console.log((num1+num2+num3)/3)
}
AverageOfthree(5,5,5)

// Q113. Sign of Number as Text
// Write a function that returns "positive", "negative", or "zero".

function positivenegativezero(num)
{
    console.log(num!=0?(num>0?"Position":"Nagative"):"zero")
}
positivenegativezero(-5)

//Q114. Eligible to Vote
//Write a function that returns true if age ≥ 18.

function EligibletoVote(age)
{
    console.log(age>18?true:false)
}
EligibletoVote(20)

//Q115. Hours to Minutes
//Write a function that converts hours to minutes

function HoursTominutes(hours)
{
    console.log(hours+" hours is in minutes "+hours*60+" minutes");
}
HoursTominutes(2.5)

//Q116. Minutes to Seconds

function MinutesTosecond(minutes)
{
    console.log(minutes+" minutes is in Seconds "+minutes*60+" Seconds");

}
MinutesTosecond(2.5)

//Q117. Celsius to Fahrenheit
//Formula: F = (C * 9/5) + 32

function CelsiustoFahrenheit(Celsius)
{
    let Fahrenheit=(Celsius*(9/5)+32);
    console.log(Fahrenheit);
}
CelsiustoFahrenheit(25)

// Q119. Area of a Triangle
// Formula: area = 0.5 * base * height

function AreaOfTriangle(base,height)
{
    let Area=0.5* base * height;
    console.log(Area)
}
AreaOfTriangle(10,5)


// Q120. Area of a Circle
// Formula: area = π * r² (you can use 3.14 or Math.PI)

function AreaOfCircle(redius)
{
    let Area=Math.PI*redius*redius;
    console.log(Area)
}
AreaOfCircle(3)