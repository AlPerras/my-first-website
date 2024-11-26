alert("Welcome to my first interactive website!");

const button = document.getElementById("greet-btn");

button.addEventListener("click", () => {
    alert("Hello, Alexandre! You're doing great!");
});

const input = document.getElementById("user-input");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    output.textContent = `You typed: ${input.value}`;
});

const addItemBtn = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");

addItemBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(listItem);
});