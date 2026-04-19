/* Local storage is a browser feature that lets you store data permanently(even after refresh or closing the tab */
/* 1. Stores data as strings only
2. DAta does not expire
3. Works with key-value pairs
*/

// Store DATa
localStorage.setItem("name","vrushank");

// key = name, value = vrushank

// Get data
let name = localStorage.getItem("name");
console.log(name);

// Remove one item
localStorage.removeItem("name");

// CLear everything
localStorage.clear();

// Store array or object
let user = {name:"Vrushank", age: 22};
localStorage.setItem("user", JSON.stringify(user));

// GEt object or array
let userDAta = JSON.parse(localStorage.getItem(user));
console.log(userDAta.name);
