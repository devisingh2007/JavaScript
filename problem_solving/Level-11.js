// Q101. Square of a Number
// Write a function that takes a number and returns its square.

function square(num)
{
    return num*num;
}
console.log(square(2));


// Q102. Sum of Two Numbers
// Write a function that takes two numbers and returns their sum.

function sumoftwonum(num,num2)
{
    return num+num2;

}
console.log(sumoftwonum(12,13));

// Q103. Greet by Name
// Write a function that takes a name and returns "Hello, <name>!".

function GreetByName(name)
{
   if(name)
    return "Hello,"+name+"!"
else
    return  "Hello,"+" !"
}
console.log(GreetByName("Alice"));
// Q104. Check Even (true/false)
// Write a function that returns true if number is even, false otherwise.

function CheckEven(num)
{
    return num%2==0?true:false;
}
console.log(CheckEven(7));

// Q105. Check Odd (true/false)
// Write a function that returns true if number is odd, false otherwise.

function CheckOdd(num)
{
    return num%2!=0?true:false;
}
console.log(CheckOdd(7));

// Q106. Is Between 1 and 100
// Write a function that returns true if n is between 1 and 100 (inclusive).

function CheckNumBetween1to100(num)
{
    return num>0&&num<100?true:false;
}
console.log(CheckNumBetween1to100(-7));


// Q107. Is First Number Greater Than Second
// Write a function that takes two numbers and returns true if first > second.
function CheckfirstIsGreter(num1,num2)
{
    return num1>num2?true:false;
}
console.log(CheckfirstIsGreter(7,10));

// Q108. Is String Length > 5
// Write a function that returns true if string length is greater than 5.
function StringLen(str)
{
    let count=0;
    while(str)
    {
        count++;
        str=str.slice(1);
    }
    return count>5?true:false
}
console.log(StringLen("DERFGTH"));

// Q109. First Character of String
// Write a function that returns the first character of a string.

function StringFirst(str)
{
    return str[0];
}
console.log(StringFirst("DERFGTH"));


// Q110. Last Character of String
// Write a function that returns the last character of a string.
function StringLast(str)
{
    return str[str.length-1];
}
console.log(StringLast("DERFGTH"));


// Q111. Longer of Two Strings
// Write a function that returns the longer string. If equal, you can return the first.

function CheckfirstIsGreterINstring(str1,str2)
{
    return str1.length>str2.length?true:false;
}
console.log(CheckfirstIsGreterINstring("SDFGHJjj","hello"));

// Q112. Average of Three Numbers
// Write a function that returns the average of three numbers.

function AverageOfthree(num1,num2,num3)
{
    return (num1+num2+num3)/3;
}
console.log(AverageOfthree(5,5,5));

// Q113. Sign of Number as Text
// Write a function that returns "positive", "negative", or "zero".

function positivenegativezero(num)
{
    return num!=0?(num>0?"positive":"negative"):"zero"
}
console.log(positivenegativezero(-5))

//Q114. Eligible to Vote
//Write a function that returns true if age ≥ 18.

function EligibletoVote(age)
{
    return age>18?true:false;
}
console.log(EligibletoVote(20))

//Q115. Hours to Minutes
//Write a function that converts hours to minutes

function HoursTominutes(hours)
{
    return hours*60;
}
console.log(HoursTominutes(2.5))

//Q116. Minutes to Seconds

function MinutesTosecond(minutes)
{
    return minutes*60;

}
console.log(MinutesTosecond(2.5))

//Q117. Celsius to Fahrenheit
//Formula: F = (C * 9/5) + 32

function CelsiustoFahrenheit(Celsius)
{
    let Fahrenheit=(Celsius*(9/5)+32);
    return Fahrenheit;
}
console.log(CelsiustoFahrenheit(25))

// Q119. Area of a Triangle
// Formula: area = 0.5 * base * height

function AreaOfTriangle(base,height)
{
    let Area=0.5* base * height;
    return Area;
}
console.log(AreaOfTriangle(10,5))


// Q120. Area of a Circle
// Formula: area = π * r² (you can use 3.14 or Math.PI)

function AreaOfCircle(redius)
{
    let Area=Math.PI*redius*redius;
    return Area;
}
console.log(AreaOfCircle(3))