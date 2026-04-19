/* this keyword refers to the object that is currently calling the function
"Who is executing the function right now?"

Behaviour of this */

const name = "Rashmi";
// Global context
console.log(this.name);  //in node it will be global, in browser it will refer to window object

// 2.this inside ibject method
//here this -> person object
//so this.name = person.name
const person = {
    name:"Vrushank",
    age:3,
    greet: function (){
        console.log(this.name);
    }
}
person.greet();

/* 3. this in a Regular function
In a normal function this refers to global object */

function show(){
console.log(this);
}
show();

/* 4. Arrow function do not have their own this
they inherit from the surronding scope */

const personNAme = {
    name:"adithya",
    greetName: () => {
        console.log(this.name);
    }
}
personNAme.greetName(); //undefined

/* this in Constructor functions
when used with new, this refers to newly created object */

function Person(name){
    this.name = name;

}
const p1 = new Person("Rashmi");
console.log(p1.name);

/* Rule to remember
Situation       this refers to
Global scope    global object
Object MEthod   that object
Regular Function    global object
Arrow function  Outer scope
Construtor      new object  */