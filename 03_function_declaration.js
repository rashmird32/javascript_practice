/* function declaration is a way to define a function using the "function" keyword with a name
It creates resuable block of code that runs when you call it */

function greet(name){
    console.log("Hello "+ name);
}
greet("Rashmi");

//With return value
function add(a, b){
    return a+b;
}
const result = add(5,7);
console.log(result);

/* hoisting
Function declarations are hoisted
meaning you can call them before they are ddefined */

sayHi();

function sayHi(){
    console.log("HI ");
}