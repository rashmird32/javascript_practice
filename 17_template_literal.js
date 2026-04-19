/* Template literals are strings written using backticks instead of quotes */

// 1. String interpolation

let name = "Rashmi";
let age = 26;

console.log(`My name is ${name} and Im ${age} years old.`);

// 2. Can run expressions inside

let a = 1;
let b = 2;
console.log(`Sum of a and b is ${a+b}`);

// 3. Multiline strings

let text = "Hello\nWorld";
let text1 = `Hello
World`;

console.log(text1);

// 4. Use with functions
function greet(name){
    return `HEllo ${name}`;
}

console.log(greet("RAshmi"));

// 5. Real world example
let user = "Rashmi";
let html = `
<div>
<p>${user}</p>
<p>Welcome</p>
</div>`;

//document.body.innerHTML = html;

// 6. Conditional inside template

let isLoggedIn = true;
console.log(`User is ${isLoggedIn?"Online":"Offline"}`);