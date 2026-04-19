/* Global scope -> accessile everywhere
Function scope -> accessible within ffunction
block scope -> accessible within block, let and const */

let a = 10;
function outer(){
    var b = 20;
    if(true){
        let c = 30;
        console.log(a,b,c);
    }
}
outer();

/* If it doesnt find the variable in current scope it searches in parent scope = scope chaining
“Lexical scope means a function can access variables from its outer scope because JavaScript looks outside when it can't find a variable inside.” */