/* Document object model
HTML is converted into a tree struture that javascript can control
*/
// <h1 id="title">HEllo</h1>

// 1. Selecting elements
const title = document.getElementById("title"); // by id

const items = document.getElementsByClassName("items"); //by classname

//used most of the time
const heading = document.querySelector("#title");

const allItems = document.querySelectorAll(".item");


//2. Changing content

title.textContent = "New TExt"; //plain text
title.innerHTML = "<span>New HTML </span>"; //alllows html

//3. Changing styles
title.style.color ="red";
title.style.backgroundColor = "yellow";

//4. working with classes
title.classList.add("active");
title.classList.remove("active");
title.classList.toggle("active");

//5. EVents
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    alert("Button clicked");
})

//6. Creating elements
const newDiv = document.createElement("div");
newDiv.textContent = "I am div";
document.body.appendChild(newDiv);

//7. REmoving elements
newDiv.remove();