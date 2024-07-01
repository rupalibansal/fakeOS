import {
  createToDoApp,
  saveToLocalStorage,
  addTask,
  deleteAllTask,
  displayTasks,
  toggleTask,
} from "./app1.js";

import "./time.js";
import { createConverterApp } from "./app2.js";
import { createCountriesApp } from "./script.js";

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
// var app1 = document.getElementById("app1");
// var app2 = document.getElementById("app2");
let modelContentDiv = document.getElementById("modal-content");
let section, converterBody, parentDiv;

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  console.log("----------", section);
  if (section) {
    modelContentDiv.removeChild(section);
    section = "";
  } else if (converterBody) {
    modelContentDiv.removeChild(converterBody);
    converterBody = "";
  } else if (parentDiv) {
    modelContentDiv.removeChild(parentDiv);
    parentDiv = "";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("----------", section);
    if (section) {
      modelContentDiv.removeChild(section);
      section = "";
    } else if (converterBody) {
      modelContentDiv.removeChild(converterBody);
      converterBody = "";
    } else if (parentDiv) {
      modelContentDiv.removeChild(parentDiv);
      parentDiv = "";
    }
  }
};

// When the user clicks the app1-ToDoList Icon, open the modal
app1.onclick = function () {
  modal.style.display = "block";

  // Create elements in the DOM for Application- ToDO List
  section = document.createElement("section");
  section.setAttribute("class", "todo");

  const h2 = document.createElement("h2");
  const div1 = document.createElement("div");
  div1.setAttribute("class", "input");

  const ul = document.createElement("ul");
  ul.setAttribute("class", "scroll");

  const li = document.createElement("li");
  li.setAttribute("id", "todoList");

  const input = document.createElement("input");
  input.setAttribute("class", "input__field");
  input.setAttribute("id", "todoInput");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Add a new todo");

  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  const textNode = document.createTextNode("Add");
  button.appendChild(textNode);
  const h2Text = document.createTextNode("To-do List");
  h2.appendChild(h2Text);
  section.appendChild(h2);

  div1.appendChild(input);
  div1.appendChild(button);
  section.appendChild(div1);
  ul.appendChild(li);
  section.appendChild(ul);

  modelContentDiv.appendChild(section);
  createToDoApp();
};

// When the user clicks the app2-Converter Icon , Open the modal
app2.onclick = function () {
  console.log("app2 on click executing");
  modal.style.display = "block";

  // Create main div element with class "converter-body"
  converterBody = document.createElement("div");
  converterBody.setAttribute("id", "converterBody");
  converterBody.classList.add("converter-body");

  // Create h1 element with class "converter__title"
  const title = document.createElement("h1");
  title.classList.add("converter__title");
  title.textContent = "Length Converter";
  converterBody.appendChild(title);

  // Create first input element with class "converter__input"
  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "Input");
  input1.setAttribute("id", "converter__input");
  input1.classList.add("converter__input");
  converterBody.appendChild(input1);

  // Create "=" span element
  const equalsSpan = document.createElement("span");
  equalsSpan.textContent = "=";
  converterBody.appendChild(equalsSpan);

  // Create second input element with class "converter__result"
  const input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("placeholder", "Result");
  input2.setAttribute("id", "converter__result");
  input2.classList.add("converter__result");
  converterBody.appendChild(input2);

  // Create select element for input type with id "converter__inputType"
  const inputTypeSelect = document.createElement("select");
  inputTypeSelect.setAttribute("id", "converter__inputType");
  inputTypeSelect.classList.add("converter__inputType");

  // Options for input type select
  const inputOptions = [
    { value: "meters", text: "Meter" },
    { value: "kilometers", text: "Kilometer" },
    { value: "centimeters", text: "Centimeter" },
  ];

  // Create options and append to select
  inputOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.setAttribute("value", optionData.value);
    option.textContent = optionData.text;
    inputTypeSelect.appendChild(option);
  });

  converterBody.appendChild(inputTypeSelect);

  // Create select element for result type with id "converter__resultType"
  const resultTypeSelect = document.createElement("select");
  resultTypeSelect.setAttribute("id", "converter__resultType");
  resultTypeSelect.classList.add("converter__resultType");

  // Options for result type select (same as input type for simplicity)
  inputOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.setAttribute("value", optionData.value);
    option.textContent = optionData.text;
    resultTypeSelect.appendChild(option);
  });

  converterBody.appendChild(resultTypeSelect);

  modelContentDiv.appendChild(converterBody);
  createConverterApp();
};

app3.onclick = function () {
  modal.style.display = "block";
  // Create elements in the DOM section
  // Select the container where you want to append the dynamically created elements
  parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "countryDiv");

  const container = parentDiv;
  // Create <h1> element for "Countries"
  const h1 = document.createElement("h1");
  h1.textContent = "Countries";
  container.appendChild(h1);

  // Create <form> element
  const form = document.createElement("form");
  form.setAttribute("id", "countryForm");

  container.appendChild(form);

  // Create <label> element for country input
  const label = document.createElement("label");
  label.setAttribute("for", "nameOfCountry");
  label.textContent = "Enter the name of country: ";
  form.appendChild(label);

  // Create <input> element for country name
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "nameOfCountry");
  input.setAttribute("id", "nameOfCountry");
  form.appendChild(input);

  // Create <button> element
  const button = document.createElement("button");
  button.setAttribute("id", "countryButton");
  button.textContent = "Search";
  form.appendChild(button);

  // Create <p> element for "wait" message
  const waitMessage = document.createElement("p");
  waitMessage.setAttribute("id", "wait");
  container.appendChild(waitMessage);

  // Create <div> element for country details
  const countryDetailsDiv = document.createElement("div");
  countryDetailsDiv.setAttribute("id", "countryDetails");
  container.appendChild(countryDetailsDiv);
  modelContentDiv.appendChild(parentDiv);
  createCountriesApp();
};
