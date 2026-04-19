/* Array is a data struture which is used to store multiple values in a single variable
each array has an index and it starts with 0
arrays are declared using [] */

let numbers = [1,2,3,4,5];  //creating array
console.log(numbers[2]);    //accessing array

let fruits = ["apple","mango","orange","strawberry","banana"];

fruits[2] = "lemon";    //changin array values
console.log(fruits);

console.log(fruits.length); //array property fo find no of elements in array

//Common array methods
numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

//looping throuh the array
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//array can store any data type
let data = [10, "HEllo", true, {name: "Vrushank"}];
console.log(data);
