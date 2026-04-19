/* Rest gathers the remaining things into one place
collect whatever is left and bundle it */

// Function parameters

function sum(...numbers){ // collects all argunments into array
    console.log(numbers);
}
sum(10, 20, 30);

//Array destruturing
// you can pick some values and gather the rest

const arr = [1, 2, 3, 4];
const [first, ...rest] = arr;
 console.log(first);
 console.log(rest);

 //Object destructuring

 const user = {
    name: "Rashmi",
    age: 26,
    city: "Bangalore"
 };

 const {name, ...restObject} = user;
 console.log(name);
 console.log(restObject);

 //Key rules
 // REst must always be last

 function test(a, ...rest){}   //correct
 //function test1(...rest,a){}    //error

 // Rest = pack things together
 // Spread = Unpack things


