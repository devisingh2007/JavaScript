
// Q41. Count Words in a Sentence
// Given a sentence, count how many words it has (split by spaces, ignore extra spaces if you want).
function countWords(sentence) {
    let words = sentence.trim().split(/\s+/);
    console.log(words.length);
}
countWords("  Hello   world  this is   JavaScript hello  ");

function countWords2(sentence) {
    let words = sentence.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            count++;
        }
    }
    console.log(count);
}
countWords2("  Hello   world  this is   JavaScript hello  ");
//<----------------------------------------------------------->
// Q42. Replace All 'a' with 'e'
// Given a string, replace all 'a' with 'e'.
function replaceAwithE(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            result += 'e';
        }
        else {
            result += str[i];
        }
    }
    console.log(result);
}
replaceAwithE("banana");

function replaceAwithE2(str) {
    let result = str.replaceAll('a', 'e');
    console.log(result);
}
replaceAwithE2("banana");

function replaceAwithE3(str) {
    let result = str.replace(/a/g, 'e');
    console.log(result);
}
replaceAwithE3("banana");

function replaceAwithE4(str) {
    let result = "";
    for (let char of str) {
        result += (char === 'a') ? 'e' : char;
    }
    console.log(result);
}
replaceAwithE4("banana");

function replaceAwithE5(str) {

    let check = "aA";
    let str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (check.includes(str[i])) {
            str2 += "e";
        }
        else {
            str2 += str[i];
        }
    }
    console.log(str2);
}
replaceAwithE5("Healo");

// Q43. Check if String Contains a Character
// Given a string and a character, check if the character appears in the string.

function StringContainsE(str) {
    let found = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            found = true;
            break;
        }

    }
    console.log(found);
}
StringContainsE("hello");

function StringContainsE2(str) {
    let found = str.includes('e');
    console.log(found);
}
StringContainsE2("hello");



// Q44. Compare Two Strings (Exact Match)
// Given two strings, check if they are exactly equal (case-sensitive).

function CompareString(str1, str2) {
    // let max = Math.max(str1.legnth,str2.legnth)
    if (str1 === str2) {
        console.log("true")
    }
    else {
        console.log("False")

    }
}
CompareString("hello", "hello")

// Q45. Count Digits in a String
// Given a string, count how many characters are digits (0–9).

function countDigit(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        // if(str[i]!==""&&str[i]==0||str[i]==1||str[i]==2||str[i]==3||str[i]==4||str[i]==5||str[i]==6||str[i]==7||str[i]==8||str[i]==9)
        // {
        //     count++;
        // }
        let charCode = str.charCodeAt(i);
        if (charCode > 47 && charCode < 58) {
            count++;
        }
    }
    console.log(count)
}
countDigit("v18523v")

function countDigit2(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 0 && str[i] < 10) {
            count++;

        }
    }
    console.log(count)
}
countDigit("v1852 3v")

// Q46. Count Uppercase Letters
// Given a string, count uppercase letters.

function findUppercase(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode > 64 && charcode < 91) {
            count++;
        }
    }
    console.log(count)
}
findUppercase("heLLO")


function findUppercase2(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'A' && char <= 'Z') {
            count++;
        }
    }
    console.log(count);
}

findUppercase2("heLLO");


// Q47. Count Lowercase Letters
// Given a string, count lowercase letters.

function findUppercase(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode > 96 && charcode < 122) {
            count++;
        }
    }
    console.log(count)
}
findUppercase("heLLO")



// Q48. Remove All Vowels from a String
// Given a string, remove vowels (a, e, i, o, u – you can treat uppercase similarly).
function removeVovel(str) {
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'u') {
            str[i] = "";
        }
        else {
            str2 += str[i]
        }
    }
    console.log(str2);
}
removeVovel("Hello")

function removeVovel2(str) {
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode == 65 || charcode == 69 || charcode == 73 || charcode == 79 || charcode == 85 || charcode == 97 || charcode == 101 || charcode == 105 || charcode == 111 || charcode == 117) {
            str[i] = "";
        }
        else {
            str2 += str[i]
        }
    }
    console.log(str2);
}
removeVovel2("Hello")

function removeVovel3(str) {
    let check = "AEIOUaeiou";
    let str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (check.includes(str[i])) {
            str2 += "";
        }
        else {
            str2 += str[i];
        }
    }
    console.log(str2);
}
removeVovel3("Hello");


function removeVovel4(str) {
    let object = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    let str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (object[str[i]]) {
            str2 += "";
        }
        else {
            str2 += str[i];
        }
    }
    console.log(str2)
}
removeVovel4("Hello");


function removeVovel5(str) {

    let res = str.replaceAll(/[aeiou]/gi, '')  // replaceAll sirf 2 arguments leta hai--> 1. kya replace karna hai & 2. kisse replace karna hai
    console.log(res);
}
removeVovel5("Hello");

// Q49. Remove All Digits from a String
// Given a string, remove all digits.
function RemoveAllDigits1(str) {
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 0 && str[i] < 10) {
            str[i] = "";
        }
        else {
            str2 += str[i]
        }
    }
    console.log(str2);
}
RemoveAllDigits1("Hell23ok")

function RemoveAllDigits2(str) {
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode >= 48 && charcode <= 57) {
            str[i] = "";
        }
        else {
            str2 += str[i]
        }
    }
    console.log(str2);
}
RemoveAllDigits2("Hell23o")

function RemoveAllDigits3(str) {
    let check = "0123456789";
    let str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (check.includes(str[i])) {
            str2 += "";
        }
        else {
            str2 += str[i];
        }
    }
    console.log(str2);
}
RemoveAllDigits3("Hell23o");


function RemoveAllDigits4(str) {
    let object = { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1, '0': 1 };
    let str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (object[str[i]]) {
            str2 += "";
        }
        else {
            str2 += str[i];
        }
    }
    console.log(str2)
}
RemoveAllDigits4("Hell23o");


function RemoveAllDigits5(str) {

    let res = str.replaceAll(/[0123456789]/g, '')  // replaceAll sirf 2 arguments leta hai--> 1. kya replace karna hai & 2. kisse replace karna hai
    console.log(res);
}
RemoveAllDigits5("Hell23o");

//Q50. Toggle Case of Each Character
// Change lowercase to uppercase and uppercase to lowercase.

function ToggleCaseofEachCharacter(str) {
    let str2 = "";
    for (var i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode > 96 && charcode < 122) {
            charcode = charcode - 32;
            str2 += String.fromCharCode(charcode);
        }
        else if (charcode > 64 && charcode < 91) {
            charcode = charcode + 32;
            str2 += String.fromCharCode(charcode);
        }
    }
    console.log(str2)
}
ToggleCaseofEachCharacter("HeLLo")

function ToggleCaseofEachCharacter2(str) {
    let str2 = "";
    for (var i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {

            str2 += str[i].toLowerCase();
        }
        else if (str[i] === str[i].toLowerCase()) {

            str2 += str[i].toUpperCase();
        }
    }
    console.log(str2)
}
ToggleCaseofEachCharacter2("HeLLo")
function ToggleCaseofEachCharacter3(str) {
    let str2 = "";
    for (var i = 0; i < str.length; i++) {

        if (str[i] >= 'A' && str[i] <= 'Z') {

            str2 += str[i].toLowerCase();
        }
        else if (str[i] >= 'a' && str[i] <= 'z') {

            str2 += str[i].toUpperCase();
        }
    }
    console.log(str2)
}
ToggleCaseofEachCharacter3("HeLLo")
