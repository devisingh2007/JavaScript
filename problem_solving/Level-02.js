// Q 11 Print 1 to 10
// (No input, or you can just assume no parameter.)
function print1to10() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}
print1to10();
// Q 12 Print 1 to N
// Given N, print numbers from 1 to N.
function print1toN(num) {
    let row = "";
    for (var i = 1; i <= num; i++) {
        row += i;
    }
    console.log(row);
}
print1toN(5);

// Q 13 Even Numbers 1 to N
// Print all even numbers from 1 to N.
function print1tonEven(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(` ${i} is even`);
        }
    }
}
print1tonEven(5);

// Q 14 Odd Numbers 1 to N
//  Print all odd numbers from 1 to N.
function print1tonOdd(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            console.log(` ${i} is odd`);
        }
    }
}
print1tonOdd(5);

// Q 15 Sum 1 to N
// Given N, find sum of numbers from 1 to N.
function sum1toN(num) {
    let sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum)
}
sum1toN(10);

// Q 16 Product 1 to N
// Given N, find product of numbers from 1 to N.
function Product1toN(num) {
    let product = 1;
    for (var i = num; i >= 1; i--) {
        product = i * product;
    }
    console.log(product);
}
Product1toN(10);

// Q 17 Multiplication Table of a Number
// Print multiplication table of a given number up to 10.
function multiplication(num) {
    let row = ""
    for (var i = 1; i <= 10; i++) {
        row += num * i + " ";
    }
    console.log(row);
}
multiplication(5);

//Q 18 Count Numbers Divisible by 3 (1 to N)
// Count how many numbers between 1 and N are divisible by 3.
function DivisibleBy3(num) {
    let row = "";
    let count = 0;
    for (var i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            row += i + " ";
            count++;
        }
    }
    console.log(row);
    console.log(count);
}

DivisibleBy3(55)

//Q 19 Factorial (Iterative)
// Compute N! using a loop.
function fectorial(num) {
    let fec = 1;
    for (var i = num; i >= 1; i--) {
        fec = i * fec;
    }
    console.log(fec);
}
fectorial(5);


//Q 20 First N Multiples of 7
//  Print first N multiples of 7
function multiplesof7(num) {
    let mult = "";
    for (var i = 1; i <= num; i++) {
        mult += i * 7 + " ";
    }
    console.log(mult);
}
multiplesof7(7);
