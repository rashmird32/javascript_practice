/* Arrow functions are a shorter way to write function expressions */

const greet = () => {
    console.log("Hello");
}
greet();

//with parameter
const greetUser = (name) => {
    console.log("Hello " +name);
}
greetUser("Rashmi");

//single parameter
const square = num => {
    return num * num;
}
console.log(square(10));

const add = (a,b) => a + b;
console.log(add(5,6));

//returning an object
const createUser = () => ({
    name:"vrushnak",
    age:3
});
console.log(createUser());

const numbers = [1,2,3,4,5];
const doubled = numbers.map(num => num*2);
console.log(doubled);