// // var text="abcdefghijklmnopqrstuvwxyz";
// // let len=text.length; ---->> get string lenth
// // console.log(len);

// // var text = "abcdba";
// // var text2="";
// // let len=text.length;
// // let char = text.charCodeAt(0);--->>get index () element-->not Supports negative indexing
// // for(var i=0; i<len; i++) {
// //    text2 = text2+text.charAt(len-i-1);
// // }
// // if (text === text2) {
// //     console.log(text + " is a palindrome.");
// // } else {
// //     console.log(text2 + " is not a palindrome.");
// // }

// // var text="Abcdefghijklmnopqrstuvwxyz";
// // var char =text.codePointAt(0)--->>get ascii value
// // console.log(char);

// // const name = "W3Schools";
// // let letter = name.at(2);--->>get index () element-->Supports negative indexing
// // console.log(letter);

// // const name = "W3Schools";
// // let letter = name[2];--->>get index () element-->not Supports negative indexing-->moden
// // console.log(letter);

// // let text1 = "Hello";
// // let text2 = "World";
// // let text3 = text1.concat(" ", text2);--->>joins two or more strings:
// // console.log(text3);

// // var text = "Hello" + " " + "World!";--->>joins two or more strings:-->moden way
// // console.log(text3);
// // console.log(text);

// /* Extracting String Parts */

// // let text = "Apple, Banana, Kiwi";
// // let part = text.slice(7, 13);--->>Slice out a portion of a string from position 7 to position 13:
// // console.log(part)

// // let text = "Apple, Banana, Kiwi";
// // let part = text.slice(7);--->>Slice 7 element ko chhodkar print karata hai
// // console.log(part)

// // let text = "Apple, Banana, Kiwi";
// // let part = text.slice(-7);--->>Slice 7 element pichhe se print  karata hai
// // console.log(part)

// // let text = "Apple, Banana, Kiwi";
// // let part = text.slice(1, -12);--->>- Index 1 से शुरू करो (यानि "p" से) or अंत से 12 अक्षर पहले तक काटना।
//  console.log(part)

// // var text="Abcdefghijklmnopqrstuvwxyz";
// // let part = text.slice(2,-5);--->>2 se suru hoga last 5 ko chodkar print karega
// // console.log(part)

// // var text="Abcdefghijklmnopqrstuvwxyz";
// // let text2 = text.toUpperCase();--->>JavaScript String toUpperCase()
// // console.log(text2);

// // var text="Abcdefghijklmnopqrstuvwxyz";
// // let text2 = text.toLowerCase();--->>JavaScript String toLowerCase()
// // console.log(text2);

// // let text = "Hello World \uD800";
// // let result = text.isWellFormed();---->>formate chek karta hai -->return true or false
// // console.log(result);

// // let text = "Hello World \uD800";
// // let result = text.toWellFormed();---->>formate chek karta hai -->or Unicode replacement
// // console.log(result);

// // let text1 = "      Hello World!      ";
// // let text2 = text1.trim();--->> space hatata hai
// // console.log(text2)

// // let text1 = "     Hello World!     ";
// // let text2 = text1.trimStart();--->>- trimStart() method string की शुरुआत में मौजूद खाली जगहें (spaces) हटा देता है।- यह सिर्फ left side के spaces हटाता है, right side के spaces को नहीं छूता।
//  console.log(text2)

let text="devisingh";
let char =text.charAt(1);
console.log(char);