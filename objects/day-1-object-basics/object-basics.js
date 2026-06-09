//Objects store data in key value pairs

const person = {
    name: "RAshmi",
    age:25,
    city:"Hubli"
}

//accessing objects
//dot notation

console.log(person.name);

//bracket notation

console.log(person["age"]);

//add property
person.email = "rashmird32@gmail.com";
console.log(person);

//update property
person.age = 32;


delete person.city;
console.log(person);

//Practice problems
//1. create a object for book and print all values

const book = {
    title : "5AM club",
    author: "Rohit Sharma",
    price: 200
}

console.log(book);

//2.Print the updated object

const car = {
  brand: "Toyota",
  model: "Camry"
};

car.year = 2026;
console.log(car);

//3. Update salary to 60000

const employee = {
  name: "John",
  salary: 50000
};

employee.salary = 60000;
console.log(employee);

// 4. Delete to color property

const mobile = {
  brand: "Samsung",
  color: "Black",
  price: 30000
};

delete mobile.color;
console.log(mobile);

// 5.
// Create a movie object and access all properties using:

// Dot notation
// Bracket notation

const movie = {
    name: "Bhagam bhag",
    hero: "Akshay kumar",
    year: 2010
}
console.log(movie.name+ " "+movie.hero+" "+movie.year);
console.log(movie["name"]+" "+movie["hero"]+" "+movie["year"]);
