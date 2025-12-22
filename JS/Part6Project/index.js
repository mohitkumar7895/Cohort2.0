const addTaskBtn = document.getElementById("addTaskBtn");
const columns = document.querySelectorAll(".task-column");

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", () => {
  const title = prompt("Enter task title");
  if (!title) return;

  const desc = prompt("Enter task description");

  const task = {
    id: Date.now(),
    title,
    desc,
    status: "todo"
  };

  saveTask(task);
  renderTask(task);
  updateCounts();
});

// ===== STORAGE FUNCTIONS =====
function getTasks() {
  return JSON.parse(localStorage.getItem("kanbanTasks")) || [];
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
}

function updateStorage(tasks) {
  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
}

// ===== LOAD TASKS =====
function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(task => renderTask(task));
  updateCounts();
}

// ===== RENDER TASK =====
function renderTask(taskData) {
  const task = document.createElement("div");
  task.className = "task";
  task.dataset.id = taskData.id;

  task.innerHTML = `
    <h4>${taskData.title}</h4>
    <p>${taskData.desc || ""}</p>
    <div class="task-actions">
      <button class="move">Move</button>
      <button class="delete">Delete</button>
    </div>
  `;

  task.querySelector(".delete").onclick = () => deleteTask(taskData.id);
  task.querySelector(".move").onclick = () => moveTask(taskData.id);

  document
    .querySelector(`[data-status="${taskData.status}"] .tasks`)
    .appendChild(task);
}

// ===== DELETE TASK =====
function deleteTask(id) {
  let tasks = getTasks();
  tasks = tasks.filter(task => task.id !== id);
  updateStorage(tasks);

  document.querySelector(`[data-id="${id}"]`).remove();
  updateCounts();
}

// ===== MOVE TASK =====
function moveTask(id) {
  let tasks = getTasks();
  const task = tasks.find(t => t.id === id);

  task.status =
    task.status === "todo" ? "progress" :
    task.status === "progress" ? "done" : "todo";

  updateStorage(tasks);

  document.querySelector(`[data-id="${id}"]`).remove();
  renderTask(task);
  updateCounts();
}

// ===== UPDATE COUNTS =====
function updateCounts() {
  columns.forEach(col => {
    col.querySelector(".count").innerText =
      col.querySelectorAll(".task").length;
  });
}
