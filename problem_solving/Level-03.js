
// Q 21 Count Digits in a Number
//  Given a number, count how many digits it has. (Ignore sign.)
function countDigit(num) {
    num = Math.abs(num);
    let i = 0;
    if (num == 0) {
        i = 1;
    }
    while (num != 0) {
        num = Math.floor(num / 10);
        i++;
    }
    console.log(i);
}
countDigit(20);


//Q22. Sum of Digits
// Given a number, find sum of its digits.
function sumofDigit(num) {
    let digit = 0;
    while (num != 0) {
        digit += num % 10;
        num = Math.floor(num / 10);

    }
    console.log(digit);
}
sumofDigit(12333);

// Q 23 Product of Digits
// Given a number, find product of its digits.
function productofDIgit(num) {
    let digit = 1;
    while (num != 0) {
        digit *= num % 10;
        num = Math.floor(num / 10);

    }
    console.log(digit);
}
productofDIgit(1525);

// Q 24  Reverse a Number
// Given a number, print its reverse.
function reverseAnumber(num) {

    let digit = 0;
    let rev = 0;
    let sing = Math.sign(num);
    num = Math.abs(num);
    while (num != 0) {
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);

    }
    rev = rev * sing;
    console.log(rev);
}
reverseAnumber(-2222225500);

// secund method
function reverseAnumber2(num) {
    let check = 1;
    if (num < 0) {
        check = -1;
        num = Math.abs(num);
    }
    num = Number(String(num).split("").reverse().join("")) * check;
    console.log(num);
}
reverseAnumber2()

// Q25. Palindrome Number
//  Check if a number reads same forwards and backwards.
function PalindromeNumber(num) {
    let num2 = num;
    let digit = 0;
    let rev = 0;
    let sing = Math.sign(num);
    num = Math.abs(num);
    while (num != 0) {
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);

    }
    rev = rev * sing;
    if (num2 === rev) {
        console.log("palindrome")
    }
    else {
        console.log("not palindrome")

    }
}
PalindromeNumber(121);


// Q26. Prime Number (Simple Check)
// Given a number, check if it is prime.
function primeNumber(num) {
    let prime = false;
    for (var i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            prime = true;
            break;
        }
    }
    if (prime) {
        console.log("not prime");
    }
    else {

        console.log(" prime");
    }
}
primeNumber(17)


// Q27. All Primes from 1 to N
// Given a number N, print all prime numbers from 1 to N.
function allPrimeNumber(num) {
    for (var j = 2; j <= num; j++) {
        var forPrime = false;
        for (var i = 2; i < j; i++) {
            if (j % i == 0) {
                forPrime = true;
                break;
            }

        }
        if (!forPrime) {
            console.log(j + " is prime");
            forPrime = false;
        }
    }
}

allPrimeNumber(17);

//Q28. First N Fibonacci Numbers
//Print first N Fibonacci numbers. (Start: 0, 1, 1, 2, 3, …)
function fibonacciNumber(num) {
    let a = 0;
    let b = 1;
    let c;
    if (num > 0)
        for (var i = 0; i < num; i++) {
            c = a + b;
            console.log(a);
            a = b;
            b = c;
        }
    else {
        console.log("invalid input");
    }
}
fibonacciNumber(10);


//Q29. GCD of Two Numbers (Simple Loop)
//Given two numbers, find their greatest common divisor
function gcdOfTwoNumber(num1, num2) {
    let div;
    if (num1 > num2) {

        for (var i = 1; i <= num1; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                div = i;
            }
        }
        console.log(div);
    }
    else {
        for (var i = 1; i <= num2; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                div = i;
            }
        }
        console.log(div);
    }
}
gcdOfTwoNumber(9, 5);
//Q29. GCD of Two Numbers (Simple Loop)
//Given two numbers, find their greatest common divisor
function gcdOfTwoNumber(num1, num2) {
    while (num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    console.log(num1);
}
gcdOfTwoNumber(12, 18);


// Q30. LCM of Two Numbers
// Given two numbers, find their least common multiple.
function lcmOfTwoNumber(num1, num2) {
    let div = 1;
    let max = Math.max(num1, num2)

    for (var i = 1; i <= max; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            div = i;
        }
    }


    console.log(num1 * num2 / div);

}
lcmOfTwoNumber(5, 7)