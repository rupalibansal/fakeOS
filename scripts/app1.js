// Retrieve todo from local storage or intialize an empty array.
let todo = JSON.parse(localStorage.getItem("todo")) || [];

export const createToDoApp = () => {
  const todoInput = document.getElementById("todoInput");
  // const todoCount = document.getElementById("todoCount");
  const addButton = document.querySelector(".btn");
  // const deleteButton = document.getElementById("deleteButton");

  addButton.addEventListener("click", addTask);
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  // deleteButton.addEventListener("click", deleteAllTask);
  displayTasks();
};

export const addTask = () => {
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    todo.push({
      text: newTask,
      disabled: false,
    });
    saveToLocalStorage();
    todoInput.value = "";
    displayTasks();
  }
};

export const deleteAllTask = () => {
  console.log("test");
};

export const displayTasks = () => {
  const todoList = document.getElementById("todoList");

  todoList.innerHTML = "";
  todo.forEach((item, index) => {
    const p = document.createElement("p");
    p.innerHTML = `
    <div class="todo-container">
      <input type="checkbox" 
      class="todo-checkbox" 
      id="input-${index}" ${item.disabled ? "checked" : ""}
      >
      <p id="todo-${index}" 
      class="${item.disabled ? "disabled" : ""}" 
      onClick="editTask(${index})">
      ${item.text}
      </p>
    </div>
    `;
    p.querySelector(".todo-checkbox").addEventListener("change", () => {
      toggleTask(index);
    });
    todoList.appendChild(p);
  });
};

export const toggleTask = (index) => {
  todo[index].disabled = !todo[index].disabled;
  saveToLocalStorage();
  displayTasks();
};

export const saveToLocalStorage = () => {
  localStorage.setItem("todo", JSON.stringify(todo));
};
