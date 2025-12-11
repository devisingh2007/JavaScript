
// Q51. Print All Elements of an Array
//Given an array, print each element.
function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArrayElements([1, 2, 3, 4, 5]);

function printArrayElements2(arr) {

    console.log(...arr)
}
printArrayElements2([1, 2, 3, 4, 5]);


function printArrayElements3(arr) {
    console.log(arr.join(" "));
}

printArrayElements3([1, 2, 3, 4, 5]);
//Q52. Sum of Array Elements
//Given an array of numbers, find the sum.
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
}
arraySum([1, 2, 3, 4, 5]);

// Q53. Maximum in Array
//Given an array, find the maximum element.

function arrayMax(arr) {
    let max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}
arrayMax([-1, -2, -3, -4, -5])

function arrayMax2(arr) {
    let max = Math.max(...arr);
    console.log(max);
}

arrayMax2([-1, -2, -3, -4, -5])

function arrayMax3(arr) {
    arr.sort()
    let max = arr[arr.length - 1];
    console.log(max);
}

arrayMax3([-1, -2, -3, -4, 5])

// Q54. Minimum in Array
// Given an array, find the minimum element.

function minArray(arr) {
    let min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
}
minArray([-1, -2, -3, -4, 5])

function minArray2(arr) {
    arr.sort((a, b) => a - b)

    console.log(arr[0]);
    console.log(arr)
}
minArray2([1, 2, -3, -4, 5])
function minArray3(arr) {
    let min = Math.min(...arr);
    console.log(min);
}

minArray3([-1, -2, -3, -4, -5])

//Q55. Count Even Numbers in Array
// Given an array of integers, count even numbers.

function countEven(arr) {
    let even = arr.filter(arr => arr % 2 === 0);
    console.log(even.length);
}
countEven([-1, -2, -3, -4, -5])

function countEven2(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    console.log(count);
}
countEven2([-1, -2, -3, -4, -5])


//Q56. Count odd Numbers in Array
// Given an array of integers, count odd numbers.

function countOdd(arr) {
    let odd = arr.filter(num => num % 2 !== 0);
    console.log(odd.length);
}

countOdd([-1, -2, -3, -4, -5])

function countOdd2(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    console.log(count);
}
countOdd2([-1, -2, -3, -4, -5])

//Q57. Print Only Positive Numbers
//Given an array, print only positive numbers.

function PositiveNum(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(arr[i]);
        }
    }
}
PositiveNum([-1, 2, -3, 4, -5])

function PositiveNum2(arr) {
    let positive = arr.filter(arr => arr > 0);
    console.log(...positive);
}
PositiveNum2([-1, 2, -3, 4, -5])

function PositiveNum3(arr) {
    let positive = arr.filter(arr => arr > 0);
    console.log(positive.join(" "));
}
PositiveNum3([-1, 2, -3, 4, -5])
//Q58. Print Only Negative Numbers
//Given an array, print only negative numbers.
function NegativeNum(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log(arr[i]);
        }
    }
}
NegativeNum([-1, 2, -3, 4, -5])

function NegativeNum2(arr) {
    let negative = arr.filter(arr => arr < 0);
    console.log(...negative);
}
NegativeNum2([-1, 2, -3, 4, -5])
function NegativeNum3(arr) {
    let negative = arr.filter(arr => arr < 0);
    console.log(negative.join(" "));
}
NegativeNum3([-1, 2, -3, 4, -5])
//Q59. Print Elements Greater than 10
//Given an array, print elements greater than 10.
function greaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}
greaterThanTen([5, 12, 8, 20, 3]);

function greaterThanTen2(arr) {
    let greaterThan10 = arr.filter(num => num > 10);
    console.log(...greaterThan10);
}
greaterThanTen2([5, 12, 8, 20, 3]);
function greaterThanTen3(arr) {
    let greaterThan10 = arr.filter(num => num > 10);
    console.log(greaterThan10.join(" "));
}
greaterThanTen3([5, 12, 8, 20, 3]);


//Q60. Find the Average of Array Elements
//Given an array of numbers, find the average.
function arrayAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(average)
}
arrayAverage([1, 2, 3, 4, 5]);
function arrayAverage2(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let average = sum / arr.length;
    console.log(average)
}


