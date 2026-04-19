/* Spread operator is used to expand elements of array or object
"Take everything inside and unpack it" */

//Spread with arrays
// Copy and array

const arr1 = [1,2,3,4];
const arr2 = [...arr1];

console.log(arr2);

// Add elements
const arr = [1,2,3];
const newArr = [...arr, 4, 5];
console.log(newArr);

//Merge arrays
const a = [1,2];
const b = [3,4];
const merged = [...a,...b];

console.log(merged);

//Spread with objects
//copy object

const user = {name:"RAshmi", age:25};
const newUser = {...user};

console.log(newUser);

//update values
const updated = {...user, age:27};
console.log(updated);

const cityAdded = {...user, city:"Banalore"};
console.log(cityAdded);

//Spread with functions
function add(a,b,c){
    return a + b + c;
}
 const nums = [1,2,3];
 console.log(add(...nums));
