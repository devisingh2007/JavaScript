
// Q141. Middle Character(s) of a String
// Return the middle character for odd length, middle two characters for even length.

function MiddleChar(str) {

    return str.length % 2 == 0 ? str[Math.floor(str.length / 2 - 1)] + str[Math.floor(str.length / 2)] : str[Math.floor(str.length / 2)];
}
console.log(MiddleChar("abcd"))

// Q142. Starts with 'a' (case-insensitive)
// Return true if string starts with 'a' or 'A'.

function FirstCharacter(str) {
    let str2 = str.toUpperCase();
    //console.log(str2)
    return str2[0] == 'A';
}
console.log(FirstCharacter("asdfghj"))

// Q142. Starts with 'a' (case-insensitive)
// Return true if string starts with 'a' or 'A'.
function FirstCharacterisa(str) {

    //console.log(str2)
    return str[0] == 'a';
}
console.log(FirstCharacterisa("ASsdfghj"))

// Q143. Ends with '!'
// Return true if string ends with exclamation mark.\

function endWith(str) {

    //console.log(str2)
    return str[str.length - 1] == '!';
}
console.log(endWith("ASsdfghj!"))

// Q144. Count Spaces in String
// Count how many space characters ' ' are present.
function countSpace(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ')
            count++;
    }
    return count;
}
console.log(countSpace("AS s df  g hj!"))

// Q145. Remove Leading and Trailing Spaces (Trim)
// Return a new string with spaces removed from start and end only.

function trimString(str) {
    return str.trim();
}
console.log(trimString("   AS s df  g hj!   "))

function trimString2(str) {
    let start = 0;
    let end = str.length - 1;
    while (str[start] == ' ') {
        start++;
    }
    while (str[end] == ' ') {
        end--;
    }
    return str.substring(start, end + 1);
}
console.log(trimString2("   AS s df  g hj!   "))


// Q146. Replace All '?' with '!'
// Return new string with every ? replaced by !.
function Replace(str) {
    let str2 = [];


    for (let i = 0; i < str.length; i++) {
        if (str[i] == "?") {
            str2[i] = "!";
        }
        else {
            str2[i] = str[i]
        }
    }
    return str2.join('');
}
console.log(Replace("Are you ok?"))

// Q147. Join Two Strings with a Space
// Given two strings, join them as "first second".
function JoinStrings(str1, str2) {
    return str1 + " " + str2;
}
console.log(JoinStrings("Hello", "World"))

//
// Q148. First Word of a Sentence
// Characters from start until first space. If no space, whole string.

function FirstWord(str) {

    let result = "";
    str = str.trim();

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ')
            break;
        result += str[i];
    }
    return result;
}


console.log(FirstWord(" Hello World!"))


// Q149. Last Word of a Sentence
// Characters after the last space. If no space, whole string.
function LastWord(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == ' ')
            break;
        result = str[i] + result;
    }
    return result;

}
console.log(LastWord("Hello World!"))

// Q150. Length of Longest Word in a Sentence
// Return just the number (length of the longest word).

function LengthofLongestWord(str) {
    let words = str.split(' ');
    console.log(words);
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength)
            maxLength = words[i].length;
    }
    return maxLength;
}
console.log(LengthofLongestWord("Hello World! This is a test sentence."))

// Q151. Shortest Word in a Sentence
// Return the actual word with minimum length (if tie, you can return first shortest).
function LengthofShortestWord(str) {
    let words = str.split(' ');
    console.log(words);
    let minLength = Infinity;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < minLength)
            minLength = words[i].length;
    }
    return minLength;
}
console.log(LengthofShortestWord("Hello World! This is a test sentence."))

// Q152. Count 'the' as a Whole Word
// Count how many times 'the' appears as a separate word (case-insensitive if you like

function Countthe(str) {
    let count = 0;
    let newStr = str.split(' ');
    for (let i = 0; i < newStr.length; i++) {

        if (newStr[i].toLowerCase() == 'the')
            count++;
    }
    return count;


}
console.log(Countthe("the cat and the dog jumped over the moon"))


// Q153. Contains Any Vowel
// Return true if the string contains at least one vowel (a, e, i, o, u, case-insensitive).

function ContainsVowel(str) {
    let newstr = str.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < newstr.length; i++) {
        if (vowels.includes(newstr[i].toLowerCase())) {
            return true;

        }
    }
    return false;
}
console.log(ContainsVowel("scy!"))

// Q154. Contains Only Digits
// Return true if every character is 0–9 and string is not empty.
function ContainsOnlyDigits(str) {
    let newstr = str.toLowerCase().split('');

    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i] >= 'a' && newstr[i] <= 'z') {
            return false;

        }
    }
    return true;

}
console.log(ContainsOnlyDigits("12345"))

// Q155. Contains Only Letters
// Return true if string has only a–z or A–Z (no digits, no spaces).

function ContainsOnlyLetters(str) {
    let newstr = str.toLowerCase().split('');

    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i] >= '0' && newstr[i] <= '9') {
            return false;

        }
    }
    return true;

}
console.log(ContainsOnlyLetters("wedfghjkl"))

// Q156. Repeat Each Character Twice
// New string where each char appears twice.
function RepeatEachCharacterTwice(str) {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        newstr += str[i] + str[i];
    }
    return newstr;

}
console.log(RepeatEachCharacterTwice("Hello"))


// Q157. Remove Special Characters (Keep Only Letters and Digits)
// Remove everything that is not a–z, A–Z, or 0–9.
function RemoveSpecialCharacters(str) {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z' || str[i] >= '0' && str[i] <= '9') {
            newstr += str[i];

        }
    }
    return newstr;
}
console.log(RemoveSpecialCharacters("Hello@# World!123"))

// //Q158. Count Words with Length ≥ 5
// Given a sentence, count how many words have length at least 5.

function CountWordsLength5(str) {
    let words = str.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5)
            count++;
    }
    return count;
}
console.log(CountWordsLength5("Hello World! This is a test sentence."))

// Q159. Anagram Check (Ignore Spaces and Case)
// Two strings are anagrams if they use same letters in same counts, order doesn’t matter.

function AnagramCheck(str1, str2) {
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }

    }
    return true;
}

console.log(AnagramCheck("listen", "silent"))
// Q160. Pangram Check
// A pangram contains every letter a–z at least once (ignore case and non-letters).

function PangramCheck(str) {
    let arr = str.toLowerCase().split('').sort();

    let check = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z' && !check.includes(arr[i])) {
            check.push(arr[i]);
        }
    }
    return check.length == 26;

}
console.log(PangramCheck("qwertyuiopasdfghjklzxcvbn"))