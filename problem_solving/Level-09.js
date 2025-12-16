// Q81. Square Pattern of * of Size N
function Q81(n) {
    for (let i = 0; i < n; i++) {
        let a = "";
        for (var j = 0; j < n; j++) {
            a = a + "* ";
        }
        console.log(a);
    }
}
Q81(3);

//Q82. Right-Angled Triangle of *
function Q82(n) {
    for (let i = 0; i < n; i++) {
        let a = "";
        for (var j = 0; j <= i; j++) {
            a = a + "* ";
        }
        console.log(a);
    }
}
Q82(4)

//Q83. Number Triangle Increasing Each Row
function Q83(n) {
    for (let i = 1; i <= n; i++) {
        let a = "";
        for (var j = 1; j <= i; j++) {
            a = a + " " + j;
        }
        console.log(a);
    }
}
Q83(4)

//Q84. Triangle with Repeated Row Number
function Q84(n) {
    for (let i = 1; i <= n; i++) {
        let a = "";
        for (var j = 1; j <= i; j++) {
            a = a + " " + i;
        }
        console.log(a);
    }
}
Q84(4)

//Q85. Print Multiplication Tables from 1 to 10
//Print tables 1 to 10, each up to 10.

function Multiplication() {
    for (let i = 1; i <= 10; i++) {
        let a = "";
        for (var j = 1; j <= 10; j++) {
            a = a + " " + i * j;
        }
        console.log(a);
    }
}

Multiplication();

// Q86. Sum of Each Row in 2D Array
//Given a 2D array, print sum of each row.
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8], [9, 1, 2, 3]
]
console.log(arr);

function sumofRow(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        console.log(`sum of row ${i + 1} is ${sum}`);

    }
}
sumofRow(arr);

//Q87. Check Perfect Square
//Return true if number is a perfect square.

function isPerfectSquare(num) {
    let root = Math.sqrt(num);
    root = Math.floor(root);
    if (root * root == num) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

isPerfectSquare(17)

//Q88. Armstrong Number (3-digit)
//Number is Armstrong if sum of cubes of its digits equals the number (for 3-digit).

function isArmstrong(num) {
    let count = 0;
    let ornum = num;
    while (num > 0) {
        count++;

        num = Math.floor(num / 10);
    }
    console.log(count)
    num = ornum;

    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit ** count;
        num = Math.floor(num / 10);

    }
    console.log(sum);
    if (sum === ornum) {
        console.log(ornum + " is an Armstrong number");
    } else {
        console.log(ornum + " is NOT an Armstrong number");
    }


}
isArmstrong(1530)

//Q89. Length of Each String in Array
//Given array of strings, return array of lengths

function lengthsOfstr(arr) {
    let filterarry = [];
    for (let i = 0; i < arr.length; i++) {


        filterarry.push(arr[i].length);


    }
    console.log(filterarry)
}
lengthsOfstr(["hi", "hello", "a"])

//Q90. Longest String in Array
//Return the longest string (if tie, you can return first longest).
function longeststrinArrya(arr) {
    let filterarry = [];
    let max = 0;
    let maxStr = "";
    for (let i = 0; i < arr.length; i++) {


        //  filterarry.push(arr[i].length);
        if (max < arr[i].length) {
            max = arr[i].length;
            maxStr = arr[i];
        }

    }
    console.log(maxStr)

}
longeststrinArrya(["hi", "hello", "hey"])