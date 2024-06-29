import {
  createToDoApp,
  saveToLocalStorage,
  addTask,
  deleteAllTask,
  displayTasks,
  toggleTask,
} from "./app1.js";

import "./time.js";

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var app1 = document.getElementById("app1");
let modelContentDiv = document.getElementById("modal-content");
let section;

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  modelContentDiv.removeChild(section);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modelContentDiv.removeChild(section);
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
