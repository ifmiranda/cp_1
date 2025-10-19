// DOM references 

const form = document.getElementById("feedback-form");
const display = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");
const count = document.getElementById("char-count");

// Character counter 
form.addEventListener("input", e=> {
    if (e.target.id === "comments") count.textContent = e.target.value.length;

}); 
// Tooltips 
form.addEventListener("mouseover", e => {
    if (e.target.matches("input, textarea")) {
        tooltip.textContent = e.target.dataset.tip;
        tooltip.hidden = false;
    }
}); 
form.addEventListener("mouseout", () => tooltip.hidden = true); 

// Stopping background click events 
form.addEventListener("click", e => e.stopPropagation());
document.addEventListener("click", () => tooltip.hidden = true); 

// Submit event with simple validation 
form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const comments = form.comments.value.trim(); 

    if (!name || !email || !comments) {
        alert ("Please fill out all required fiels!");
        return; 
    }

    const card = document.createElement("div");
    card.textContent = `${name} (${email}): ${comments}`;
    display.appendChild(card);
    form.requestFullscreen();
    count.textContent = 0
}); 