const todoApp = document.getElementById("todo");

const taskIdInput = document.getElementById("taskId");
const taskNameInput = document.getElementById("taskName");
const taskDateInput = document.getElementById("taskDate");
const submitBtn = document.getElementById("submitBtn");

const todoList = document.getElementById("todoList");
todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.id === "deleteBtn") {
      deleteTask(event.target);
    }
    if (event.target.id === "editBtn") {
      editTask(event.target);
    }
  }
});

const form = document.getElementById("taskForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (event.target[0].value > 0) {
    updateTask({
      id: event.target[0].value,
      name: event.target[1].value,
      date: event.target[2].value,
    });
  } else {
    postTask({
      id: todoList.childNodes.length,
      name: event.target[1].value,
      date: event.target[2].value,
    });
  }
});

async function postTask(task) {
  /*const createTask = await fetch("http://localhost:9000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `${capitalizeName(task.name)} à ${task.date}`,
    }),
  });
  if (createTask.status !== 200) {
    return;
  }*/

  const listItem = document.createElement("li");
  const spanText = document.createElement("span");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  listItem.setAttribute("data-id", task.id);
  listItem.setAttribute("data-name", task.name);
  listItem.setAttribute("data-date", task.date);
  spanText.innerText = `${capitalizeName(task.name)} à ${task.date}`;
  deleteButton.innerText = "Supprimer";
  deleteButton.setAttribute("id", "deleteBtn");
  editButton.innerText = "Modifier";
  editButton.setAttribute("id", "editBtn");

  listItem.appendChild(spanText);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  todoList.appendChild(listItem);

  clearInputs();
}

function deleteTask(target) {
  todoList.removeChild(target.parentElement);
  clearInputs();
}

function editTask(target) {
  const liItem = target.parentElement;
  taskIdInput.value = liItem.getAttribute("data-id");
  taskNameInput.value = liItem.getAttribute("data-name");
  taskDateInput.value = liItem.getAttribute("data-date");
  submitBtn.value = "Modifier";

  form.method = "put";
}

function updateTask(task) {
  const liItem = todoList.querySelector(`[data-id="${task.id}"]`);
  liItem.setAttribute("data-name", task.name);
  liItem.setAttribute("data-date", task.date);
  liItem.querySelector("span").innerText = `${capitalizeName(task.name)} à ${
    task.date
  }`;
  clearInputs();
}

function clearInputs() {
  taskIdInput.value = "0";
  taskNameInput.value = "";
  taskDateInput.value = "";
  submitBtn.value = "Ajouter";
  form.method = "post";
  sortListByDate(todoList);
}

function sortListByDate(list) {
  const items = Array.from(list.children);
  items.sort((a, b) => {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return dateA - dateB;
  });
  items.forEach((item) => list.appendChild(item));
}

async function initTodoList() {
  /*const tasks = await fetch("http://localhost:9000");
  if (tasks.status !== 200) {
    return;
  }*/
  const todoList = [{ id: 1, name: "task 1", date: "2023-04-23" }];
  todoList.forEach((item) => {
    postTask(item);
  });
}

initTodoList();

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1, name.length);
}
