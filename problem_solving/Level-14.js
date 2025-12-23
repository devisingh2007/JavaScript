// Q161. Count Positive, Negative, and Zero
// Given an array of numbers, count how many are positive, negative, and zero.

function checkPosNegAndZero(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach(element => {
        if (element > 0) positive++;
        else if (element < 0) negative++;
        else if (element == 0) zero++;
    });
    console.log(`positives = ${positive}, negatives = ${negative}, zeros = ${zero}`)
}
checkPosNegAndZero([0, 1, -1, 2, -2, 5, 0]);

// Q162. Triple Each Element
// Given an array, return a new array with each element ×3.

function tripleEachElement(arr) {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element * 3);
    });
    return newArr;


}
console.log(tripleEachElement([1, 2, 3, 4, 5]));

//Q163. Absolute Values of Array Elements
//Given an array, return new array of absolute values.

function absoluteValues(array) {
    let newArr = [];
    array.forEach(element => {
        if (element < 0) {
            newArr.push(element * -1)
        }
        else
            newArr.push(element)
    });
    return newArr;

}
console.log(absoluteValues([1, -2, 3, -4, 5]));

//Q164. All Elements Even?
//Return true if all elements are even numbers.
function evenElement(array) {
    let newArr = array.filter((data) => data % 2 === 0)
    if (newArr.length === array.length) return true;
    else return false;
}
console.log(evenElement([2, 2, 6, 8]));

// Q165. At Least One Even?
// Return true if at least one element is even.

function AtLeastoneEVEN(array) {
    let newArr = array.filter((data) => data % 2 === 0)
    if (newArr.length > 0) return true;
    else return false;
}
console.log(AtLeastoneEVEN([2, 1, 1, 1]));

// Q166. All Elements Positive?
// Return true if all elements are > 0.

function AllPositive(array) {
    let newArr = array.filter((data) => data > 0)
    if (newArr.length === array.length) return true;
    else return false;
}
console.log(AllPositive([2, 1, 1, 1]));

// Q167. Count Elements Greater Than k
// Given array and number k, count how many elements are strictly greater than k.

function countElementsGreaterThanK(array, k) {
    let newArr = array.filter((data) => data > k)
    return newArr.length;
}
console.log(countElementsGreaterThanK([2, 1, 1, 1], 1));

// Q168. Index of Maximum Element
// Return the index of the maximum element (first max if multiple).
function indexOfMaximumElement(array) {
    let max = -Infinity;
    let index2 = 0;
    array.forEach((element, index) => {
        if (element > max) {
            max = element;
            index2 = index;
        }
    });
    return index2;

}
console.log(indexOfMaximumElement([2, 1, 1, 6]));

// Q169. Index of Minimum Element
// Return the index of the minimum element (first min if multiple).
function indexOfMinimumElement(array) {
    let min = Infinity;
    let index2 = 0;
    array.forEach((element, index) => {
        if (element < min) {
            min = element;
            index2 = index;
        }
    });
    return index2;
}
console.log(indexOfMinimumElement([2, 1, -1, -6]));

// Q170. Contains Any Duplicate?
// Return true if array contains any value that appears more than once.

function containsAnyDuplicate(array) {
    let check = [];
    for (let i = 0; i < array.length; i++) {
        if (!check.includes(array[i])) {
            check.push(array[i]);
        }
        else {
            return true;
        }


    }
    return false;
}
console.log(containsAnyDuplicate([2, 1, 1, 6]));

function containsAnyDuplicate2(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            return true;
        }
        else {
            obj[array[i]] = 1;
        }
    }
}
console.log(containsAnyDuplicate2([2, 1, 1, 6]));


// Q171. Unique Elements Without Set
// Return new array with all duplicates removed, using loops (not Set).
function uniqueElementsWithoutSet(array) {
    let check = [];
    for (let i = 0; i < array.length; i++) {
        if (!check.includes(array[i])) {
            check.push(array[i]);
        }
    }
    return check;
}
console.log(uniqueElementsWithoutSet([2, 1, 1, 6]));

// Q172. Strictly Increasing Sorted Array?
// Return true if each element is strictly greater than previous.
function strictlyIncreasingSortedArray(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= array[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(strictlyIncreasingSortedArray([1, 2, 4, 4, 5]));

// Q173. Move All Negative Numbers to Front
// Reorder array so that all negatives come before non-negatives (0 and positives). Order within groups can be ignored.

function moveAllNegativeNumbersToFront(array) {
    let negative = array.sort((a, b) => a - b);
    return negative;
}
console.log(moveAllNegativeNumbersToFront([3, -2, 1, -5, 4, 0]));

// //Q174. Maximum Difference (max - min)
// Given array, find max - min.
function maximumDifference(array) {

    array = array.sort((a, b) => a - b);
    return array[array.length - 1] - array[0];
}
console.log(maximumDifference([-1, -2, -5, 5, 6, 6, 8, 6, 10]))

// Q175. Elements at Even Indices
// Return new array with elements at indices 0, 2, 4, …

function elementsAtEvenIndices(array) {
    let newArr = [];
    array.forEach((element, index) => {

        if (index % 2 == 0) newArr.push(element)
    });
    return newArr;
}
console.log(elementsAtEvenIndices([10, 21, 32, 43, 54, 65]));

// Q176. Elements at Odd Indices
// Return new array with elements at indices 1, 3, 5, …

function elementsAtOddIndices(array) {
    let newArr = [];
    array.forEach((element, index) => {

        if (index % 2 != 0) newArr.push(element)
    });
    return newArr;
}
console.log(elementsAtOddIndices([10, 21, 32, 43, 54, 65]));

// Q177. Count Strings with Length > 3
// Given an array of strings, count how many have length greater than 3.
function countStringsWithLengthGreaterThan3(array) {
    let count = 0;
    array.forEach(element => {
        if (element.length > 3)
            count++
    });
    return count;
}
console.log(countStringsWithLengthGreaterThan3(["hi", "hello", "hey", "welcome"]));

// Q178. First Character of Each String
// Given an array of strings, return array of their first characters.
function firstCharacterOfEachString(array) {
    let newArr = [];
    array.forEach(element => {
        newArr.push(element[0])
    });
    return newArr;
}
console.log(firstCharacterOfEachString(["hi", "hello", "hey", "welcome"]));

// Q179. Remove Empty Strings from Array
// Given array of strings, remove empty strings "".
function removeEmptyStringsFromArray(array) {
    let newArr = array.filter((data) => data != "")
    return newArr;
}
console.log(removeEmptyStringsFromArray(["hi", "", "hey", "", "welcome"]));

// Q180. Sum of Even Numbers in Array
// Return sum of only even numbers.
function sumOfEvenNumbersInArray(array) {
    let sum = 0;
    array.forEach(element => {
        element % 2 == 0 ? sum += element : null;
    });
    return sum;
}
console.log(sumOfEvenNumbersInArray([1, 2, 3, 4, 5, 6]));

