/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 			-> "APPLE"
"JavaScript is not a scripting programming language"  	-> "JavaScript”
"I don't like books" 				-> "I like books"
*/

const sentence1 = "I like apples and oranges" ;
const sentence2 = "JavaScript is not a scripting programming language";
const sentence3 = "I don't like books" ;


const applesIndex = sentence1.indexOf('apples');

console.log(sentence1.slice(applesIndex, applesIndex+ 5).toUpperCase());


