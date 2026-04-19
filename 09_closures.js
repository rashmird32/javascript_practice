/* A closure is when a function remembers variables from its outer functions even after the outer function has finished executing */
function outer(){
    let name = "Rashmi";
    return function inner(){
        console.log(name);
    };
}
const myFunc = outer();
myFunc();

/* What happens here
step1: outer runs
name = "rashmi"
outer returns inner
const myFunc = inner

step2: normally when a func finishes variables disappear but inner remembers outer variable name
js keeps that variable in memory
this preserved memory is called closure */

function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const increment = counter();
increment();
increment();
increment();