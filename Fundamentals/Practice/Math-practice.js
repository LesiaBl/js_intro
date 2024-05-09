
/*
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
*/

let randomNumber = Math.floor(Math.random() * 51);

console.log(`The random number * 5 = ${randomNumber * 5}`);


/**
 Requirement:
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}

 */

const firstNumber = Math.ceil(Math.random()*10);
const secondNumber = Math.ceil(Math.random()*10);

console.log(` 
        Min number is ${Math.min(firstNumber, secondNumber)},
        Max number is ${Math.max(firstNumber, secondNumber)},
        Difference is ${Math.abs(firstNumber-secondNumber)}
    `)

    /**
 Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}

     */

const num_btw_50_and_100 = Math.floor((Math.random()*51) +50);
  console.log(`The random number % 10 = ${num_btw_50_and_100 % 10}`);

  /**
 Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8

Expected result:
59
   */
const n1 = Math.ceil(Math.random()*10);
const n2 = Math.ceil(Math.random()*10);
const n3 = Math.ceil(Math.random()*10);
const n4 = Math.ceil(Math.random()*10);
const n5 = Math.ceil(Math.random()*10);

const total = (n1 * 5) + (n2 * 4) + (n3 * 3) + (n4 * 2) + (n5);

console.log(total);


/*
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}

*/


const num1  = Math.ceil(Math.random()* 25);
const num2  = Math.ceil(Math.random()* 25 + 25);
const num3  = Math.ceil(Math.random()* 25 + 50);
const num4  = Math.ceil(Math.random()* 25 + 75);


console.log(` Diff btw max and min ${Math.abs(num1-num4)},
            diff of second and third ${Math.abs(num2 - num3)},
            Average ${(num1+num2+num3+num4)/4}`)
