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

const hoverText = document.getElementById("hover-text");

hoverText.addEventListener("mouseover", () => {
    hoverText.style.color = "blue";
});

hoverText.addEventListener("mouseout", () => {
    hoverText.style.color = "black";
});

const keyDisplay = document.getElementById("key-display");

document.addEventListener("keydown", (event) => {
    keyDisplay.textContent = `You pressed: ${event.key}`;
});

const clickBtn = document.getElementById("click-btn");
const clickCount = document.getElementById("click-count");
let count = 0;

clickBtn.addEventListener("click", () => {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
});