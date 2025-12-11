

// Q31. Length of String
// Print length of a string.

function lengthOfString(str) {
    let count = 0;
    while (str[count]) {
        count++;
    }
    console.log(count);
}
lengthOfString("Hello");

// Q32. Print Each Character on New Line
// Given a string, print each character on a new line.
let str2 = "cat"
function printEachCharacterNewLine(str) {
    let list = "";
    for (let i = 0; i < str.length; i++) {
        list += str[i] + " ";
    }
    console.log(list);
}
printEachCharacterNewLine(str2);

// Q33. Count Vowels
// Count vowels (a, e, i, o, u – you can decide if you treat uppercase as vowel too).

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
            count++;
        }
    }
    console.log(count);
}
countVowels("hello");
let str = "javascript";

function countVowels2(str) {
    let object = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    let count = 0;
    for (let char of str) {
        if (object[char]) {
            count++;
        }
    }
    console.log(count);
}
countVowels2("javascript");
function countVowels(str) {
    let count = 0;
    let str3 = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str3.length; j++) {
            if (str[i] === str3[j]) {
                count++;
            }
        }
    }
    console.log(count);
}

countVowels("sky");

// Q34. Count Consonants
// Count consonants (letters that are not vowels).


function CountConsonants(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' && str[i] != 'A' && str[i] != 'E' && str[i] != 'I' && str[i] != 'O' && str[i] != 'U') {
            count++;
        }
    }
    console.log(count);
}
CountConsonants("hello");

function CountConsonants2(str) {
    let object = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    let count = 0;
    for (let char of str) {
        if (!object[char]) {
            count++;
        }
    }
    console.log(count);
}
CountConsonants2("javascript");

// Q35. To Uppercase
// Convert a given string to uppercase.
function toUppercase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode > 96 && charCode < 123) {
            charCode -= 32;
        }
        result += String.fromCharCode(charCode);
    }
    console.log(result);
}

toUppercase("Hello")


// Q36 To Lowercase
// Convert a string to lowercase.
function toLowercase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode > 64 && charCode < 91) {
            charCode += 32;
        }
        result += String.fromCharCode(charCode);
    }
    console.log(result);
}

toLowercase("Hello")

// Q37. Reverse a String
// Reverse all characters in the string.

function ReverseSring1(str) {
    let rev = "";
    rev = str.split("").reverse().join("");
    console.log(rev)

}
ReverseSring1("hello");

function ReverseSring2(str) {
    let rev = "";
    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    console.log(rev)
}
ReverseSring2("hello");

// Q38. Palindrome String
// Check if a string is a palindrome.

function palindrome1(str) {
    let rev = ""
    rev = str.split("").reverse().join("");

    if (rev === str) {
        console.log("Palindrome ");
    }
    else {
        console.log("not Palindrome ");

    }
}
palindrome1("madam")

function palindrome2(str) {
    let rev = "";
    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev === str) {
        console.log("Palindrome ");
    }
    else {
        console.log("not Palindrome ");

    }
}
palindrome2("madam")

// Q39. Count Occurrences of 'a'
// Count how many times 'a' (or 'A') appears.

function CountOccurrencesofa(str) {
    let count = 0;
    let obj = { a: 1, A: 1 };

    for (let char of str) {
        if (obj[char]) {
            count++;
        }
    }
    console.log(count)
}
CountOccurrencesofa("helloaaaa")

// Q40. Remove All Space
// Remove all spaces from a string.

function removeAllSpace(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    console.log(result);
}
removeAllSpace("h e l l o");