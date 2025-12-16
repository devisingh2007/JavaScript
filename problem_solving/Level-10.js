//Q91. Frequency of Numbers in Array (Object)
//Return an object where key = number, value = count.
function Frequency(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {

            obj[arr[i]]++;

        }

        else {

            obj[arr[i]] = 1;

        }
    }
    console.log(obj);
}
Frequency([1, 2, 2, 3])

//Q92. Most Frequent Number in Array
//Using a frequency object, return the number with highest count.

function FrequencyMAX(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {

            obj[arr[i]]++;

        }

        else {

            obj[arr[i]] = 1;

        }
    }
    let max = 0;
    let maxNum = 0;
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            maxNum = key;
        }
    }
    console.log(maxNum);

}
FrequencyMAX([1, 2, 2, 3])

// Q93. Character Frequency in String (Object)
// Return object of character counts.

function Character(arr) {
    
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {

            obj[arr[i]]++;
        }

        else {
            obj[arr[i]] = 1;
        }
    }
    console.log(obj)
}
Character("llERFGTHYJU");

// Q94. Highest Marks from Array of Students
// Students as array of objects: {name, marks}.
// Input: [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}] → Output: "B" (or full object {name:"B",marks:80})
// Input: [{name: "Neel", marks: 95}] → Output: "Neel"


let arrOfobj=[{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}]

function max(arr)
{
    let maxMark=[];
    let maxNum=0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i].marks>maxNum)
        {
            maxMark=arr[i];
            maxNum=arr[i].marks;
        }
    }
    console.log(maxMark)
}
max(arrOfobj)

// Q95. Total Cost from Product Price Object
// Given object of {productName: price}, find total.

// Input: {apple: 50, banana: 20, mango: 30} → Total = 100
// Input: {pen: 10, pencil: 5} → Total = 15

function totalCost(obj)
{
  
    let sum=0;
    for(let key in obj)
    {
        sum+=obj[key]
    }
console.log(sum);
}
totalCost({apple: 50, banana: 20, mango: 30})

// Q96. Average Marks from Subject-Marks Object
// Object like {math: 80, science: 90, english: 70}.

// Input: {math: 80, science: 90, english: 70} Sum = 240, count = 3 → Output: 80

function AverageofSubject(obj)
{
    let sum=0;
    let count=0;
     for(let key in obj)
    {
        sum+=obj[key]
        count++;
    }
    console.log(sum/count)
}

AverageofSubject({math: 80, science: 90, english: 70})

// Q98. Print All Values of Object
// Given object, return array of values.
function printAllvalueOfOBJ(obj)
{
    let pr=Object.values(obj)
    console.log(pr)
}
printAllvalueOfOBJ({a: 1, b: 2, c: 3})


// Q99. Count Key-Value Pairs in Object
// Return how many properties object has.

function printAllkeyOfOBJ(obj)
{
    let pr=Object.keys(obj)
    console.log(pr)
}
printAllkeyOfOBJ({a: 1, b: 2, c: 3})

//Q100. Filter Adults from Array of People
// Array of {name, age} → return only those with age > 18.

function filter(arr)
{
     let adult=[];
    
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i].age>18)
        {
          adult.push(arr[i])
          
        }
    }
    console.log(adult)
}
filter([{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}])