"use strict";

const totalPara = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutButton = document.querySelector(".peanut");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
let total = 0;

colaButton.addEventListener("click", () => {
  total += 2;
  totalPara.textContent = `Total: $${total}`;
});

peanutButton.addEventListener("click", () => {
  total += 3;
  totalPara.textContent = `Total: $${total}`;
});

chocolateButton.addEventListener("click", () => {
  total += 4;
  totalPara.textContent = `Total: $${total}`;
});

gummiesButton.addEventListener("click", () => {
  total += 6;
  totalPara.textContent = `Total: $${total}`;
});

// ---------------------------------------------------------

const moneyForm = document.querySelector(".make-form");
const moneyContainer = document.querySelector(".money-container");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const count = document.querySelector("#count").value;
  const type = document.querySelector("#type").value;
  for (let i = 0; i < count; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", type);
    newCoin.addEventListener("click", () => {
      newCoin.style.display = `none`;
    });
    moneyContainer.append(newCoin);
  }
});

// -------------------------------------

const lightbulb = document.querySelector(".lightbulb");
const onSwitch = document.querySelector(".on");
const offSwitch = document.querySelector(".off");
const toggleSwitch = document.querySelector(".toggle");
const endSwitch = document.querySelector(".end");
