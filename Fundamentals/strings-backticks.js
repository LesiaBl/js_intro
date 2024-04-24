//`` => template strings, template literals, backticks syntex
let fname = 'John';
let lname = 'Doe';
let yob = 1990

//
console.log(`${fname} ${lname} is ${new Date().getFullYear() - yob} years old`);
console.log(`${fname} ${lname}`);