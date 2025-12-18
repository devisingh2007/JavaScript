
// Q121. Multiple of 10
// Given a number, check if it is a multiple of 10.
function isMultipleOfTen(num) {
    return num % 10 === 0;
}
console.log(isMultipleOfTen(20)); // true


// Q122. Minimum of Two Numbers
// Given two numbers, return the smaller one.

function minOfTwo(a, b) {
    return a < b ? a : b;
}
console.log(minOfTwo(5, 10)); // 5

// Q123. Minimum of Three Numbers
// Given three numbers, return the smallest.
function minOfThree(a, b, c) {
    return Math.min(a, b, c);
}
console.log(minOfThree(5, 10, 3)); // 3

// Q124. Print from n Down to 1
// Given n, print numbers from n down to 1.
function printDownToOne(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}
printDownToOne(5); // 5 4 3 2 1

// Q125. Sum of All Even Numbers from 1 to n
// Given n, find sum of all even numbers from 1 to n.
function sumOfEvens(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEvens(6)); // 12 (2 + 4 + 6)

// Q126. Sum of All Odd Numbers from 1 to n
// Given n, find sum of all odd numbers from 1 to n.
function sumOfOdds(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(5)); // 9 (1 + 3 + 5)

// Q127. Count Numbers Divisible by 2 or 3 (1 to n)
// Given n, count how many numbers between 1 and n are divisible by 2 or 3.

function countDivisibleBy2Or3(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 || i % 3 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countDivisibleBy2Or3(6));

// Q128. Count Numbers Divisible by Both 2 and 5 (1 to n)
// Effectively numbers divisible by 10.

function countDivisibleBy2And5(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 10 === 0) {
            count++;
        }
    }
    return count;
}

//Q129. Perfect Number
//A perfect number equals the sum of its proper divisors (excluding itself).

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfectNumber(28));

//Q130. Co-prime Numbers
//Two numbers are co-prime if their GCD is 1.

function areCoPrime(num1, num2) {
    let range = Math.min(num1, num2);
    let gcd = 1;
    for (let i = range; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
            break;
        }
    }
    return gcd === 1;
}
console.log(areCoPrime(15, 17)); // true

// Q131. Largest Digit in a Number
// Given a number, return the largest digit.

function largestDigit(num) {
    let numarr = String(num).split('');
    let max = 0;

    for (let i = 0; i < numarr.length; i++) {
        if (numarr[i] > max)
            max = numarr[i]
    }
    return max;
}
console.log(largestDigit(57329));


// Q132. Smallest Digit in a Number
// Given a number, return the smallest digit.
function smallestDigit(num) {
    let numarr = String(num).split('');
    let min = 9;
    for (let i = 0; i < numarr.length; i++) {
        if (numarr[i] < min)
            min = numarr[i]
    }
    return min;
}
console.log(smallestDigit(57329));


// Q133. Count Even Digits in a Number
// Given a number, count how many digits are even.

function countEven(num) {
    let count = 0;
    let numarr = String(num).split('');
    for (let i = 0; i < numarr.length; i++) {
        if (numarr[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}
console.log(countEven(7452963))

// Q134. Count Odd Digits in a Number
// Given a number, count how many digits are odd.


function countodd(num) {
    let count = 0;
    let numarr = String(num).split('');
    for (let i = 0; i < numarr.length; i++) {
        if (numarr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
console.log(countodd(7452963))

// Q135. Absolute Difference of Two Numbers
// Return |a - b|.

function absoluteDifference(a, b) {

    return Math.abs(a - b);
}
console.log(absoluteDifference(5, 10));
function absoluteDifference2(a, b) {
    let num = a - b;
    return num > 0 ? num : num * -1;
}

console.log(absoluteDifference2(5, -10));

// Q136. Is 3-digit Number
// Return true if number is between 100 and 999 (inclusive).

function IS3DIGIT(num) {
    return num >= 100 && num <= 999 ? true : false;
}
console.log(IS3DIGIT(123));

function IS3DIGIT2(num) {
    let str = String(num);
    return str.length === 3 ? true : false;
}
console.log(IS3DIGIT2(99));

function IS3DIGIT3(num) {
    return Math.floor(num / 100) >= 1 && Math.floor(num / 100) <= 9 ? true : false;
}
console.log(IS3DIGIT3(456));

// Q137. Sum of Squares 1² + 2² + … + n²
// Given n, compute sum of squares.
function sumOfSquares(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i ** 2;
    }
    return sum;
}
console.log(sumOfSquares(4))

// Q138. Sum of Cubes 1³ + 2³ + … + n³
// Given n, compute sum of cubes.
function sumOfCubes(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i ** 3;
    }
    return sum;
}
console.log(sumOfCubes(2))

// Q139. Harshad Number (Niven Number)
// A number is Harshad if it’s divisible by sum of its digits.

function HarshadNum(num) {
    let numarr = String(num).split('');
    let sum = 0;
    //console.log(numarr)
    for (let i = 0; i < numarr.length; i++) {
        sum += Number(numarr[i]);

    }
    // console.log(sum)
    return num % sum === 0;
}
console.log(HarshadNum(19))


// Q140. Automorphic Number
// A number is automorphic if its square ends with the same digits as the number.

function AutomorphicNum(num) {
    let Squares = num ** 2;
    let numarr = String(Squares).split('');
    return num == numarr[numarr.length - 1];
}
console.log(AutomorphicNum(6))
