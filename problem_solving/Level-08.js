
console.log("---------------------------------------------------------------------------------------------------------------------------------------")
// Q71. Remove Even Numbers (Keep Only Odd)
//Return a new array with only odd numbers.
function removeEven(arr) {
    var arr2 = arr.filter((data) => data % 2 !== 0);
    console.log(arr2);
}
removeEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

function removeEven2(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            continue;
        }
        else {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
removeEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
function removeEven3(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr.splice(i, 1);
            i--;
        }

    }
    console.log(arr);
}
removeEven3([1, 2, 3, 4, 4, 5, 6, 6, 6, 6, 6, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log("---------------------------------------------------------------------------------------------------------------------------------------")
// Q72. Remove Duplicates
// Return a new array with unique elements (order can be original order).

function RemoveDuplicate(arr) {
    var arr2 = []
    arr = arr.sort((a, b) => a - b)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {

        }
        else {
            arr2.push(arr[i])
        }
    }
    console.log(arr2);
}
RemoveDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 5, 6, 8, 5, 10, 1, 2, 3, 58, 5, 5, 12, 12])

function RemoveDuplicate2(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
RemoveDuplicate2([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 7, 8, 5, 6, 8, 5, 10, 1, 2, 3, 58, 5, 5, 12, 12]);


function RemoveDuplicate3(arr) {


    let res = [];

    let obj = {};
    
    for (let i = 0; i < arr.length; i++) {

        if (obj[arr[i]]) {

            obj[arr[i]]++;

        }

        else {

            obj[arr[i]] = 1;

        }
    }
    for (let char in obj) {

        res.push(Number(char));
    }
    console.log(res)
}
console.log("---------------------------------------------------------------------------------------------------------------------------------------")
RemoveDuplicate3([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 7, 8, 5, 6, 8, 5, 10, 1, 2, 3, 58, 5, 5, 12, 12]);
//Q73. Concatenate Two Arrays
// Given two arrays, merge them into one.

function connect(arr1, arr2) {
    var len = arr1.length + arr2.length;
    var new1 = arr1.concat(arr2);
    console.log(new1);
}
connect([1, 2, 3], [4, 5, 6]);

function spread(arr1, arr2) {
    let newarr = [...arr1, ...arr2];
    console.log(newarr);
}
spread([1, 2, 3], [4, 5, 6]);

function useforLoop(arr1, arr2) {
    let newarr = []
    for (let index = 0; index < arr1.length; index++) {
        newarr.push(arr1[index]);

    }
    for (let index = 0; index < arr2.length; index++) {
        newarr.push(arr2[index]);

    }
    console.log(newarr)
}
useforLoop([1, 2, 3], [4, 5, 6])

//Q73. Concatenate Two Arrays
//Given two arrays, merge them into one.
function concatenate(arr1, arr2) {
    let arr3 = [...arr1, ...arr2];
    arr3 = arr3.sort((a, b) => a - b)
    let lastArry = [];
    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i] !== arr3[i + 1]) {
            lastArry.push(arr3[i])
        }
    }
    console.log(lastArry)
}
concatenate([1, 2, 3], [4, 5, 6, 6, 6, 5, 8, 4, 3, 2, 1]);

console.log("---------------------------------------------------------------------------------------------------------------------------------------")
// Q74. Intersection of Two Arrays (Common Elements)
//Return new array with elements present in both (no duplicates).
function Intersection(arr1, arr2) {
    let max = Math.max(arr1.length, arr2.length)

    arr1 = arr1.sort((a, b) => a - b)
    arr2 = arr2.sort((a, b) => a - b)

    let lastArry = [];
    for (var i = 0; i < max; i++) {
        if (arr1[i] == arr2[i]) {
            lastArry.push(arr2[i])
        }
    }
    console.log(lastArry)
}
Intersection([1, 2, 3, 4, 7, 5, 6], [4, 5, 6, 6, 6, 5, 8, 4, 3, 2, 1]);

console.log("---------------------------------------------------------------------------------------------------------------------------------------")
// Q75. Rotate Array Right by 1
// Move last element to front.

function rotateRight(arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    console.log(arr)
}
rotateRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function rotateRight2(arr) {
    let res = [arr[arr.length - 1]];
    for (let i = 0; i < arr.length - 1; i++) {
        res.push(arr[i])
    }
    console.log(res)
}
rotateRight2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function rotateRight3(arr) {
    let temp = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    console.log(arr);
}
rotateRight3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("---------------------------------------------------------------------------------------------------------------------------------------")
// Q76. Rotate Array Left by 1
// Move first element to end.

function rotateLeft(arr) {
    let firstElement = arr.shift();
    arr.push(firstElement);
    console.log(arr)
}

rotateLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function rotateLeft2(arr) {
    let res = [];
    for (let i = 1; i < arr.length; i++) {
        res.push(arr[i])
    }

    res.push(arr[0]);
    console.log(res);
}
rotateLeft2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
function rotateLeft3(arr) {
    let temp = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    console.log(arr);
}
rotateLeft3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("---------------------------------------------------------------------------------------------------------------------------------------")
//Q77. Count Elements Greater than Average
//RCount how many numbers are greater than the average of array.
function countGreaterThanAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    console.log(count);
}
countGreaterThanAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
function countGreaterThanAverage2(arr) {
    let count = 0;
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let avr = sum / arr.length;
    
    arr.forEach(element => {
        if (avr < element)
            count++;
    });
    console.log(count);
}
countGreaterThanAverage2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("---------------------------------------------------------------------------------------------------------------------------------------")
// Q78. Largest Positive and Smallest Negative
//Find largest positive and smallest negative (if they exist).

function largestPositiveSmallestNegative(arr) {
    let largestPositive = null;
    let smallestNegative = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (largestPositive === null || arr[i] > largestPositive) {
                largestPositive = arr[i];
            }
        }
        else if (arr[i] < 0) {
            if (smallestNegative === null || arr[i] < smallestNegative) {
                smallestNegative = arr[i];
            }
        }
    }
    console.log("Largest Positive: " + largestPositive);
    console.log("Smallest Negative: " + smallestNegative);
}
largestPositiveSmallestNegative([3, -1, 4, -2, 5, -3, 6, -4]);



console.log("---------------------------------------------------------------------------------------------------------------------------------------")

//Q79. Count 0s and 1s in Binary Array
//Given array of only 0s and 1s, count both.

function count0and1(arr) {
    let zeros = 0;
    let ones = 0;
    arr.forEach(element => {
        if (element == 0)
            zeros++;
        else
            ones++;
    });
    console.log(`zeros = ${zeros}, ones = ${ones}`)
}
count0and1([0, 1, 0, 1, 1])
console.log("---------------------------------------------------------------------------------------------------------------------------------------")
// Q80. Separate Even and Odd into Two Arrays
//Given an array, return two arrays: evens and odds.
function seperate(arr) {
    let odd = arr.filter((data) => data % 2 != 0)
    let even = arr.filter((data) => data % 2 == 0)
    console.log(odd)
    console.log(even)
}
seperate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

function seperate2(arr) {
    let odd = []
    let even = []
    arr.forEach(element => {
        if (element % 2 == 0) {
            even.push(element)
        }
        else {
            odd.push(element)

        }
    });
    console.log(odd)
    console.log(even)
}

seperate2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
