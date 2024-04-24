//Number => only one type that used in js for storing whole and decimal numbers up to 15-16 digits 
//NaN (not a number) js reservet word for indicating that the number is not legal number 
// to do ariftmatic with non-numeric string will result in NaN
//global js function ...isNaN().. -> return boolean to show if the value is number or NaN 
/**            console.log(isNaN(7/'hello')) => true
 **            console.log(isNaN( 5+6+10)) => false    
 
 typeof NaN => number 


In JavaScript, Infinity and -Infinity represent positive and negative infinity, respectively. They're returned when a mathematical operation results in a number beyond the largest (or smallest) representable value. They serve as indicators for handling calculations outside the normal numeric range.

typeof Infinity returns a number.

console.log(typeof Infinity) // number
 */

//__*****__NUMBER PROPERTIES__*****__

console.log(Number.MAX_VALUE);//largest number is possible in JS
console.log(Number.MIN_VALUE);//smallest number is possible in JS
console.log(Number.MAX_SAFE_INTEGER);//maximum safe integer
console.log(Number.MIN_SAFE_INTEGER);//minimum safe integer
console.log(Number.POSITIVE_INFINITY);//infinity => returned on overflow
console.log(Number.NEGATIVE_INFINITY);//negative infinity => returned on overflow
console.log(Number.NaN);//NaN

//__*****__Number Functions ()__*****__

//toString()=> return a number as a string

console.log(1+3);//3
console.log((1).toString() +2);//12 

//toFixed()=> returns number written with decimals

console.log((1.2345).toFixed(2));//1.23
console.log((1.999).toFixed(1));//1.9

//toPrecision()=> returns the number written with specified length(rounded)

console.log((1.99990).toPrecision(3));//2.00
console.log((9.1234).toPrecision(1));//9
console.log((1.1111).toPrecision(3));//1.11


//__*****__Converting variables to Numbers__*****__

//Number()=>returns a number convertedfrom its argument

console.log(Number("23.5")+5); //28.5
console.log(Number("true"+5));//6
console.log(Number("false")+5);//5
//parseFloat()=>parse its argument and returns a floting-point number

console.log(parseFloat("23.6")+4);//27.6
console.log(parseFloat(true)+6);//NaN
console.log(parseFloat(false)+6);//NaN
console.log(parseFloat("hello")+6);//NaN

//parseInt()=>parses its argument and return a whole number
 
console.log(parseInt("23.6")+4);//27
console.log(parseInt("25.9")+4);//29
console.log(parseInt(true)+6);//NaN
console.log(parseInt(false)+6);//NaN
console.log(parseInt("hello")+6);//NaN


//__*****__Number Object Function__*****__

//Number.isInteger()=>return true if number is integer

console.log(Number.isInteger(23));//true
console.log(Number.isInteger("23.6"));//false
console.log(Number.isInteger("$34"));//false

//Number.isSafeInteger()=> return true if number is safe integer
console.log(Number.isSafeInteger(234n));//false
console.log(Number.isSafeInteger(1234567890112238));//true ->16
console.log(Number.isSafeInteger(12345678901122380));//false ->17
console.log(Number.isSafeInteger(3));//true

/**
 * The methods Number.parseFloat() and Number.parseInt() are accessible as a method through the
 * Number object and offer a more structured way to perform floating-point and integer parsing, respectively
 * while parseFloat() and parseInt() are more commonly used global functions with the same functionality.
 */

//Number.parseFloat()=> converts a string to a number
//Number.parseInt()=> converts a string to a whole number



//__*****__Match Function__*****__ 
//can be call using Math object without creating one 


//abs(x)=> return absolute value of x (+)
console.log(Math.abs(25));
console.log(Math.abs(-4/8));

//ceil(x)=> returns X, rounded upwards to the nearest integer
console.log(Math.ceil(23.1345));//24
console.log(Match.ceil(23.9999));//24

//floor(x)=> return X, rounded downward to the nearest integer 
console.log(Math.floor(23.1342));//23
console.log(Math.floor(23.9999));//23

//max(a,b,c)=> return the number with the highest value
console.log(Math.max(23, 45, 100));//100
console.log(Math.max(12.5, 12.6, 12.9));//12.9

//min(x,y,z)=> returns the number with the lowest value
console.log(Math.min(.03, 2, -1));//-1

//pow(d,e)=> returns the value of d to the power of e
console.log(Math.pow(2,3));//8
console.log(Math.pow(3,4));//81

console.log(2**3);//8
console.log(3**4);//81


//random()=> returns a random number between 0 and 1 (0 included but 1 excluded)
/**
 * num btw 1 and 100 inclusive
Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
Math.random() * 100 scales this range to between 0 (inclusive) and 100 (exclusive).
Math.floor() rounds down to the nearest integer, ensuring that the result is an integer.
Adding 1 ensures that the result is between 1 and 100 inclusive.
 */
console.log(Math.random());//random decimal btw 0 and 1(excluded)
let num = Math.random()*10;

console.log(Math.ceil(num));
console.log(Math.floor(num));

//round(x)=> rounds x to the nearest integer
console.log(Math.round(4.123));//4
console.log(Math.round(4.567));//5

//trunc(x)=> returns ineger part of the number (x);
console.log(Math.trunc(4.1232));//4
console.log(Math.trunc(4.9999));//4


// random number between 5 and 8 both inclusive
/**
Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
(8 - 5 + 1) calculates the range size, which is 4.
Math.random() * (8 - 5 + 1) scales the random number to be between 0 (inclusive) and 4 (exclusive).
Math.floor() rounds down to the nearest integer.
Adding 5 ensures that the result is between 5 and 8 inclusive.
 */

console.log(Math.floor(Math.random()*4)+5);

//generate random number between 1 and 10 bothe inclusive

console.log(Math.floor(Math.random()*10)+1);

//number betwen 10 and 20
//max - min +1

console.log(Math.floor(Math.random()*11)+10);