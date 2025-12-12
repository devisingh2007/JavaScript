/*//Q61. Double Each Element
//Given an array, return a new array with each element doubled.

function doubleElements(arr) {
    let doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArr.push(arr[i] * 2);
    }
    console.log(doubledArr);
}
doubleElements([1, 2, 3, 4, 5]);

//Q62. Square Each Element
//Given an array, return a new array with each element squared.
function squareElements(arr) {
    let squaredArr = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] ** 2);
    }
    console.log(squaredArr);
}
squareElements([1, 2, 3, 4, 5]);

//Q63. Reverse Array into New Array
// Given an array, create a new array which is the reverse.
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    console.log(reversedArr);
}
reverseArray([1, 2, 3, 4, 5]);

function reverseArray2(arr) {
    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.unshift(arr[i]);
    }
    console.log(reversedArr);
}
reverseArray2([1, 2, 3, 4, 5]);
function reverseArray3(arr) {
    let reversedArr = arr.slice().reverse();
    console.log(reversedArr);
}
reverseArray3([1, 2, 3, 4, 5]);

function reverseArray4(arr) {
    let reversedArr = [...arr].reverse();
    console.log(reversedArr);
}
reverseArray4([1, 2, 3, 4, 5]);

// Q64. Copy Array
//Given an array, create an exact copy.
function copyArray(arr) {
    let copiedArr = [...arr];
    console.log(copiedArr);
}
copyArray([1, 2, 3, 4, 5]);


function copyArray2(arr) {
    let copiedArr = arr.slice();
    console.log(copiedArr);
}
copyArray2([1, 2, 3, 4, 5]);

function copyArray3(arr) {
    let copiedArr = [];
    for(var i=0; i<arr.length; i++) {
        copiedArr.push(arr[i]);
    }
    console.log(copiedArr);
}

copyArray3([1, 2, 3, 4, 5]); //output: [1, 2, 3, 4, 5]

//Q65. Check if Array Contains a Value
// Given an array and a value, return true if it’s present

function checkValue(arr, value) {
    if (arr.includes(value)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkValue([1, 2, 3, 4, 5], 3); //output: true
// Q66. Find Index of a Value
// Given an array and a value, return index or -1.

function findIndex(arr, value) {
    var index = arr.indexOf(value);
    if (index !== -1) {
        console.log(index);
    } else {
        console.log(-1);
    }
}
findIndex([1, 2, 3, 4, 5], 3); //output: 2

function findIndex2(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            console.log(i);
            break;
        }
    }
    
}
findIndex2([1, 2, 3, 4, 5], 3); //output: 2

// Q67. Frequency of a Value
// Given an array and a value, count how many times value appears.
function frequencyOfValue(arr, value) {
    var count = 0;
    arr.forEach(element => {
        if (element === value) {
            count++;
        }
    });
    console.log(count);
}
frequencyOfValue([1, 2, 3, 4, 3, 5, 3], 3); //output: 3

function frequencyOfValue(arr,value)
{
    var count=0;
    var obj={}
    for(var i=0; i<arr.length; i++)
    {
        if(obj[arr[i]]==undefined)
        {
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]++;
        }
    }
    console.log(obj[value]);
    
    
}
frequencyOfValue([1, 2, 3, 4, 3, 5, 3], 3); 

function frequency(arr)
{

let obj={}
let uniqueArray = [...new Set(arr)];



    
    for(var i=0; i<arr.length; i++)
        {
        if(obj[arr[i]]===undefined)
        {
            obj[arr[i]]=1;
        }
    else
{
    obj[arr[i]]++;
}
}
console.log(obj);
        
}
frequency([1, 2, 3, 4, 3, 1,5,5, 3]); 

//Q68. Check if Array is Sorted (Increasing)
//Return true if each element is >= previous one
function isSorted(arr) {
    for(var i=0; i<arr.length-1; i++)
    {
        if(arr[i]>=arr[i+1])
        {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); //output: true
console.log(isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //output: true

// Q69. Second Largest Element
// Assume array has at least 2 distinct elements.

function secondLargest(arr)
{
    var max=arr[0]
    var max2=arr[1]
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>max)
        {
            max=arr[i]
        }

    }
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>max2&&arr[i]<max)
        {
            max2=arr[i]
        }
    }
    console.log(max2);
}
secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 99, 10]); //output: 2

function secondLargest2(arr){
    var max=Math.max(...arr);
    var max2=Math.max(...arr.filter(item=>item!==max));
    console.log(max2);
}
secondLargest2([1, 2, 3, 4, 5, 6, 7, 8, 99, 10]); //output: 2


*/
// Q70. Second Largest Element
// Assume array has at least 2 distinct elements.

function secondsmallest(arr)
{
    var min=Infinity
    var min2=Infinity
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]<min)
        {
            min=arr[i]
        }

    }
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]<min2&&arr[i]>min)
        {
            min2=arr[i]
        }
    }
    console.log(min2);
}
secondsmallest([1, 2, 3, -4, 5, 6, 7, 8, 99, 10]); //output: 2

function secondsmallest2(arr){
    var min=Math.min(arr);
    var arr2=arr.filter(item=>item!==min)
    var min2=Math.min(arr2);
    console.log(min2);
}
secondsmallest2([1, -2, 3, 4, 5, 6, 7, 8, 99, 10]); 