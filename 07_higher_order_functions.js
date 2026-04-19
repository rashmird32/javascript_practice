/* Higher order functions is a function that takes a function as an argument or returns function
map(), filter(), reduce() are all HOFs
HOF = Function + Function
map(function)
filter(funvtion) */

function greet(name){               //callback
    console.log("Hello "+name);
}
function processUser(callback){     //HOF
    const name = "Vrushank";
    callback(name);
}
processUser(greet);

//Fuction returning another function
function multiplyBy(x){         //returns new function
    return function(y){
        return x * y;
    };
}
 const double = multiplyBy(5);
 console.log(double(2));