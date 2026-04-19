/* Callback function is a ffunction passed as a parameter to another function and executed later
A function that is called inside another function 

Callbacks are used for
1. Async operations
2. Event Handling
3. Timers
4. Array methods  */

function doTask(callback){
    console.log("Task completed");
    callback();
}
function nextTask(){            //callback ffunction
    console.log("Start next task");
}
doTask(nextTask);

//Anonymous callback
function greetUser(callback){
    callback();
}
greetUser(function (){
    console.log("HEllo user");
});

//Callback with arrowffunction
function nameUser(callback){
    callback();
}
nameUser(() => {            //callback
    console.log("NAme of the user is RAshmi")
}
);

//Example
const numbers = [1,2,3,4,5];
numbers.forEach(function(num){      //callback
    console.log(num);
})

setTimeout(function(){                  //callback runs affter 2sec
    console.log("Hello user!!");
},2000);