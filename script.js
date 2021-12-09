"use strict";

const btn = document.getElementById('btn');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const inputRange = document.querySelector('[type=range]');
const spanRange = document.getElementById('range-span');
const circle =document.getElementById('circle');

const changeColor = function () {
  const inputText = document.querySelector('[type=text]');
  
  square.style.backgroundColor = inputText.value;
  inputText.value = "";
};

const changeCircle = function () {
  spanRange.textContent = inputRange.value;
  
  circle.style.width = inputRange.value + "%";
  circle.style.height = inputRange.value + "%";
  
};



btn.addEventListener('click', changeColor);

eBtn.style.display = "none";

inputRange.addEventListener('input', changeCircle);









