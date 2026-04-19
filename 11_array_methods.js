//Array Methods


let fruits = ["apple","mango","orange","strawberry","banana"];
let numbers = [1,2,3,4,5];

numbers.push(6);    //push()
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

//searching methods
console.log(fruits.indexOf("banana"));

console.log(fruits.includes("apple"));

//looping
fruits.forEach(function(num){
    console.log(num);
})

let doubled = numbers.map(num => num*2);
console.log(doubled);

let even = numbers.filter(num => num%2 ==0);
console.log(even);

let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c);

//slice 
console.log(numbers.slice(1,4));

//splice
console.log(numbers.splice(2,1));

let words = ["Hello","World"];
console.log(words.join(" "));

let reversarray = [1,2,3,4,5];
console.log(reversarray.reverse());

/* Array Methods
1. push() = Adds element to the end of the array
2. unshift() = Adds element to the beinning of the array
3. pop() = Removes element from the end of the array
4. shift() = Removes element from the beginning of the array
5. indexOf() = Returns the index of an element
6. includes() = Checks if the element exists. Returns boolean value
7. forEach() = Runs a function for each element
8. map() = Creates a new array after transformation
9. filter() = Returns element that match the condition
10. concat() = Combines array
11. slice() = Etract part of an array
12. splice() = Add/remove element at a specific position
13. join() = Joins the elements of an array
14. reverse() = reverse the array */
