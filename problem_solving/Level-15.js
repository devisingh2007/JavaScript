// Q181. Sum of Odd Numbers in Array
// Return sum of only odd numbers.
function sumOfOddNumbersInArray(array) {
    let sum = 0;
    array.forEach(element => {
        if (element % 2 != 0)
            sum += element
    });
    return sum;
}
console.log(sumOfOddNumbersInArray([10, 21, 32, 43, 54, 65]));

function sumOfOddNumbersInArray2(array) {

    let sum = array.reduce((csum, data) => csum + (data % 2 != 0 ? data : 0), 0);
    return sum;
}
console.log(sumOfOddNumbersInArray2([10, 21, 32, 43, 54, 65]));

// Q182. Swap Elements at Indices i and j
// Given an array and two indices i and j, swap elements at those indices.
function swapElement(array, i, j) {
    let a = array[i];
    array[i] = array[j];
    array[j] = a;
    return array;
}
console.log(swapElement([10, 21, 32, 43, 54, 65], 1, 4));

function swapElement2(array, i, j) {
    array[i] = array[i] + array[j];
    array[j] = array[i] - array[j];
    array[i] = array[i] - array[j];
    return array;
}
console.log(swapElement2([10, 21, 32, 43, 54, 65], 1, 4));


// Q183. Rotate Array Right by k Positions
// Right rotation: last elements move to front.

function rotateArrayRightByKPositions(array, k) {
    let len = array.length;
    if (len === 0) return array;

    k = k % len;
    while (k > 0) {
        let last = array.pop();
        array.unshift(last);
        k--;
    }
    return array;
}

console.log(rotateArrayRightByKPositions([10, 21, 32, 43, 54, 65], 2));




function rotateArrayRightByKPositions2(array, k) {
    let len = array.length;
    if (len === 0) return array;

    k = k % len;
    for (let i = 0; i < k; i++) {
        let temp = array[len - 1];
        for (let j = len - 1; j > 0; j--) {
            array[j] = array[j - 1];
        }
        array[0] = temp;
    }
    return array;
}

console.log(rotateArrayRightByKPositions2([10, 21, 32, 43, 54, 65], 2));


// Q184. Rotate Array Left by k Positions
// Left rotation: first elements move to end.
function rotateArrayLeftByKPositions(array, k) {
    let len = array.length;
    k = k % len;

    for (let i = 0; i < k; i++) {
        let first = array.shift();
        array.push(first);
    }
    return array;
}
console.log(rotateArrayLeftByKPositions([10, 21, 32, 43, 54, 65], 2));

function rotateArrayLeftByKPositions2(array, k) {
    let len = array.length;
    k = k % len;
    for (let i = 0; i < k; i++) {
        let temp = array[0];
        for (let j = 0; j < len - 1; j++) {
            array[j] = array[j + 1];
        }
        array[len - 1] = temp;
    }
    return array;
}
console.log(rotateArrayLeftByKPositions2([10, 21, 32, 43, 54, 65], 2));

// Q185. Merge Two Sorted Arrays into One Sorted Array
// Both arrays are sorted; merge into a single sorted array (without sorting at the end).

function merge(arr, arr1) {
    let new1 = [];
    let len = Math.min(arr.length, arr1.length);

    for (let i = 0; i < len; i++) {
        new1.push(Math.min(arr[i], arr1[i]));
        new1.push(Math.max(arr[i], arr1[i]));

    }

    for (let i = len; i < arr.length; i++) {
        new1.push(arr[i]);
    }

    for (let i = len; i < arr1.length; i++) {
        new1.push(arr1[i]);
    }
    return new1;
}
console.log(merge([10, 21, 32, 43], [15, 25, 35, 45, 55, 65]));

function merge1(arr, arr1) {
    let new1 = [];
    let len = Math.min(arr.length, arr1.length);
    let j = 0;
    let i = 0;
    while (i < arr.length && j < arr1.length) {
        if (arr[i] < arr1[j]) {
            new1.push(arr[i]);
            i++;
        } else {
            new1.push(arr1[j]);
            j++;
        }
    }

    while (i < arr.length) {
        new1.push(arr[i]);
        i++;
    }

    while (j < arr1.length) {
        new1.push(arr1[j]);
        j++;
    }
    return new1;
}
console.log(merge1([10, 21, 32, 43], [15, 25, 35, 45, 55, 65]));


// Q186. Bubble Sort (Ascending)
// Sort an array using bubble sort algorithm.

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// Q187. Selection Sort (Ascending)
// Sort an array using selection sort.

function selctionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let max = -Infinity;
        let index = 0;
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > max) {
                max = array[j]
                index = j;
            }

        }
        [array[index], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[index]]
    }
    return array;
}
console.log(selctionSort([64, 34, 25, 12, 22, 11, 90]))// Q187. Selection Sort (Ascending)
// Sort an array using selection sort.

function selctionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let max = -Infinity;
        let index = 0;
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > max) {
                max = array[j]
                index = j;
            }

        }
        [array[index], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[index]]
    }
    return array;
}
console.log(selctionSort([64, 34, 25, 12, 22, 11, 90]))

// Q188. Insertion Sort (Ascending)
// Sort an array using insertion sort.
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}



function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));


// Q189. k-th Smallest Element (Using Sort)
// Return the k-th smallest element (1-based index) after sorting.

function kthSmallestElement(array, k) {

    for (let i = 1; i < array.length; i++) {
        {
            for (let j = i - 1; j >= 0; j--) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
    return array[k - 1];
}
console.log(kthSmallestElement([7, 10, 4, 13, 20, 15], 3));

// Q190. k-th Largest Element (Using Sort)
// Return the k-th largest element (1-based index) after sorting. using insertion sort in descending order.

function kthlargestlestElement(arr, k) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr[arr.length - k - 1];
}
console.log(kthlargestlestElement([7, 10, 4, 3, 20, 15], 3));