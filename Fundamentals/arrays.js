const to_do_list = ["wake up", "make a bed", "go out with a dog", "eat", "take a shower", "practice in js"];

console.log(Array.isArray(to_do_list));//to check if the data type is array or not -> return true if is 

 console.log(to_do_list[1]);//retrive  element from array 

 console.log(to_do_list);//print the whole array 

to_do_list[0] = "sleep"; // update element in array
console.log(to_do_list);

//add new element in the end of the array
to_do_list.push("drink water");
console.log(to_do_list);

//remove last element from the array
to_do_list.pop();
console.log(to_do_list);

//remove first ellement 
to_do_list.shift();
console.log(to_do_list);


//add first ellement 
to_do_list.unshift("new one");
console.log(to_do_list);

//lenght

console.log(to_do_list.length);

//index of
console.log(to_do_list.indexOf("eat"))