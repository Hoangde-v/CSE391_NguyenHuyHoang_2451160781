const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const clearCompletedBtn =
  document.getElementById("clearCompleted");

const filterButtons =
  document.querySelectorAll(".filter-btn");

let todos =
  JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

renderTodos();

function saveTodos() {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
}

function updateCount() {
  const activeTodos =
    todos.filter(todo => !todo.completed).length;

  todoCount.textContent =
    `${activeTodos} items left`;
}

function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") return;

  const todo = {
    id: Date.now(),
    text,
    completed: false
  };

  todos.push(todo);

  saveTodos();
  renderTodos();

  todoInput.value = "";
}

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.dataset.id = todo.id;

  if (todo.completed) {
    li.classList.add("completed");
  }

  const span =
    document.createElement("span");

  span.classList.add("todo-text");
  span.textContent = todo.text;

  const deleteBtn =
    document.createElement("button");

  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "❌";

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function renderTodos() {
  todoList.innerHTML = "";

  let filteredTodos = todos;

  if (currentFilter === "active") {
    filteredTodos =
      todos.filter(todo => !todo.completed);
  }

  if (currentFilter === "completed") {
    filteredTodos =
      todos.filter(todo => todo.completed);
  }

  filteredTodos.forEach(todo => {
    const todoElement =
      createTodoElement(todo);

    todoList.appendChild(todoElement);
  });

  updateCount();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addTodo();
  }
});

todoList.addEventListener("click", e => {
  const li = e.target.closest(".todo-item");

  if (!li) return;

  const id = Number(li.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    todos = todos.filter(todo =>
      todo.id !== id
    );
  }

  if (e.target.classList.contains("todo-text")) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });
  }

  saveTodos();
  renderTodos();
});

todoList.addEventListener("dblclick", e => {
  if (!e.target.classList.contains("todo-text")) {
    return;
  }

  const span = e.target;
  const li = span.closest(".todo-item");
  const id = Number(li.dataset.id);

  const input =
    document.createElement("input");

  input.type = "text";
  input.value = span.textContent;
  input.classList.add("edit-input");

  li.replaceChild(input, span);

  input.focus();

  input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      const newText =
        input.value.trim();

      if (newText !== "") {
        todos = todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              text: newText
            };
          }

          return todo;
        });

        saveTodos();
        renderTodos();
      }
    }
  });
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(button =>
      button.classList.remove("active")
    );

    btn.classList.add("active");

    currentFilter =
      btn.dataset.filter;

    renderTodos();
  });
});

clearCompletedBtn.addEventListener(
  "click",
  () => {
    todos = todos.filter(
      todo => !todo.completed
    );

    saveTodos();
    renderTodos();
  }
);