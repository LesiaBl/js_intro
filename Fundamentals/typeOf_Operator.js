/**
 * type Of operator use to tell us type of data type 
 */

//String

let paint = "red";
console.log(typeof paint);

//number

let year = 1999;
let price = 12.45;
console.log(typeof year);
console.log(typeof price);

//boolean 
let isBigger =  2024>1999;
console.log(typeof isBigger);

//undefined - decleared variables but not assignet with value 

let firstName;
console.log(typeof firstName);
console.log( firstName);

//null 
let hmm = null;

console.log(typeof hmm);// returns as object 
/**
 * the internal representation of a null value in JavaScript was the zero bit pattern, which in binary is 00000000. This representation was similar to the representation of an object reference in memory.
 * typeof operator was designed, it returned "object" for values with a zero bit pattern, 
 * use if-esle with === to check is it is null
 */

// 6. bigint 9007199254740991+      // This is added with ES11

let num = 123456789012345678901234567890n;//n suffix indicates a BigInt literal

console.log(typeof num);

//symbol

let star = Symbol('%');
console.log(typeof star);

//typeOf operator
// option+shift+down duplicates line
console.log(typeof 'Lesia');
console.log(typeof 55);
console.log(typeof null===null);
console.log(typeof null);
console.log(typeof "");
console.log(typeof "*");
console.log(typeof 8<6);
console.log(typeof 56n);
















