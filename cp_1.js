// DOM references 

const form = document.getElementById("feedback-form");
const display = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");
const count = document.getElementById("char-count");

// Character counter 
form.addEventListener("input", e=> {
    if (e.target.id === "comments") count.textContent = e.target.value.length;

}); 
