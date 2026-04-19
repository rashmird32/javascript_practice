/* function expression in js means creating a function and storing it in a variable
function expression are not hoisted */

const greet = function(){
    console.log("Hello");
};
greet();

// with parameter
const greetUser = function(name){
    console.log("Hello" +name);
};
greetUser("Rashmi");

// with return
const add = function(a,b){
    return a + b;
}
const result = add(5,6);
console.log(result);