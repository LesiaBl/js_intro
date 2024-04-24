/**
 * objects in js is fundamental data structure used to store and organize data. 
 * objects is collection of key value pears where each key is uni
 */

const person = {
    firstName: "Furina",
    birthday: "10/13",
    vision:"Hydro",
    goodMorning: ()=>{console.log("Good morning. I hope you will have a wonderful day.")},
    goodNight:()=>{console.log("Rest well tonight")},
}

//Calling the function using " . " notation
person.goodMorning();

person.gender = "female";
//Calling thr function using bracket natation
person["goodNight"]();

console.log(person.firstName);

//calling oobject
console.log(person);

// Object.keys() => returns the an array with keys in object

console.log(Object.keys(person));
                        
//Object.values() => returns the an array of values from object
console.log(Object.values(person));

//Object.entries() => return an array of the key-value 
console.log(Object.entries(person));

//ObjectName.hasOwnProperty() => returns boolen if the object has specific properties
console.log(person.hasOwnProperty("firstName"));//true

console.log(person.hasOwnProperty("lasttName"));//false

//Delete existing properties

delete person.gender;

console.log(person);

//===================================================================

const person1 = {
    firstName: "Lesly",
    lastName: "Orange",
    age:34,
    favNumper:5,
    favCities: ["NewYork", "Miami"],
    address:{
        atreet:"1012 Yeallow Ln",
        city:"Chicago",
        state:"IL",
        ZIP:12344,
        country:"US"
    },
    jobTitle:"SDET",
    isWorking:false

};