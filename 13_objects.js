/* An object is a collection of key value pairs
Person has properties = name age */

const key = "isMarried";
const person = {
    name: "RAshmi",
    "full name": "RAshmi Deshpande",
    age: 25,
    city: "Bangalore",
    isMarried: true
}

console.log(person);

/* Accessing objects */
// 1. Dot notation
console.log(person.name);

// Bracket notation
//use when key has spaces or key is dynamic
console.log(person["full name"]);
console.log(person[key]);

// Add/Update/Delete
//Add
person.job = "Developer";

//updatte
person.age = 30;

//delete
delete person.city;

console.log(person);

//Objects with functions(methods)
//When a function is inside the object it is called method
const user = {
    name: "Vrushank",
    greet: function(){
        console.log(this.name);
    }
}

user.greet();

//this refers to the object calling it
//Arrow function do not have their own this

//Nested Objects
const newUser ={
    name:"Adithya",
    address: {
        city: "Bangalore",
        pincode: 58101
    }
}

console.log(newUser.address.city);
console.log(newUser["address"]["city"]);

//looping through objects