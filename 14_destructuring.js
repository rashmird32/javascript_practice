/* Destruturing is a way to extract values from arrays or objects and store them into variables easily. */

const user = {
    name: "Rashmi",
    age: 26
};

/*  const {name, age} = user;
console.log(name); */

// REname variables
const {name: userName} = user;
console.log(userName);

// Default values

const {city = "Bangalore"} = user;
console.log(city);

/* Array Destruturing */
const arr = [1, 2, 3];

// const [a, b, c] = arr;
// console.log(a + " " +b);

//skip values
// const [a, , c] = arr;
// console.log(a);
// console.log(c);

//default values
const [a, b , c = 40] = arr;
console.log(c);

//Destructuring in Functions
const person = {
    name: "Rashmi",
    age: 26
}

function greet({name}){
    console.log("Hello " + name);
}

greet(user);