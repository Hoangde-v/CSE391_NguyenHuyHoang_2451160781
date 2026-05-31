const userList = document.getElementById("userList");
const loading = document.getElementById("loading");
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const searchInput = document.getElementById("searchInput");
let users = [];
let editingUserId = null;
/* ====================== API LAYER ====================== */
const api = {
  baseURL: "https://jsonplaceholder.typicode.com",
  async getUsers() {
    const response = await fetch(`${this.baseURL}/users`);
    if (!response.ok) {
      throw new Error("Fetch users failed");
    }
    return response.json();
  },
  async getUser(id) {
    const response = await fetch(`${this.baseURL}/users/${id}`);
    return response.json();
  },
  async createUser(data) {
    const response = await fetch(`${this.baseURL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  async updateUser(id, data) {
    const response = await fetch(`${this.baseURL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  async deleteUser(id) {
    await fetch(`${this.baseURL}/users/${id}`, { method: "DELETE" });
  },
};
/* ====================== UI LAYER ====================== */ 
const ui = {
  renderUsers(users) {
    userList.innerHTML = "";
    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = ` <h3>${user.name}</h3> <p>${user.email}</p> <button onclick="editUser(${user.id})"> Edit </button> <button onclick="deleteUser(${user.id})"> Delete </button> `;
      userList.appendChild(card);
    });
  },
  showLoading() {
    loading.classList.remove("hidden");
    loading.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      loading.innerHTML += ` <div class="skeleton"></div> `;
    }
  },
  hideLoading() {
    loading.classList.add("hidden");
  },
  showError(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "❌ " + message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  },
  showSuccess(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "✅ " + message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  },
};
/* ====================== LOAD USERS ====================== */ 
async function loadUsers() {
  try {
    ui.showLoading();
    users = await api.getUsers();
    ui.renderUsers(users);
  } catch (error) {
    ui.showError(error.message);
  } finally {
    ui.hideLoading();
  }
}
/* ====================== CREATE/UPDATE ====================== */ 
userForm.addEventListener(
  "submit",
  async function (e) {
    e.preventDefault();
    const data = { name: nameInput.value, email: emailInput.value };
    try {
      if (editingUserId) {
        const updatedUser = await api.updateUser(editingUserId, data);
        users = users.map((user) =>
          user.id === editingUserId ? updatedUser : user,
        );
        ui.showSuccess("User updated");
        editingUserId = null;
      } else {
        const newUser = await api.createUser(data);
        users.unshift(newUser);
        ui.showSuccess("User created");
      }
      ui.renderUsers(users);
      userForm.reset();
    } catch (error) {
      ui.showError(error.message);
    }
  },
);
/* ====================== EDIT ====================== */ 
async function editUser(
  id,
) {
  try {
    const user = await api.getUser(id);
    nameInput.value = user.name;
    emailInput.value = user.email;
    editingUserId = id;
  } catch (error) {
    ui.showError(error.message);
  }
}
/* ====================== DELETE ====================== */ 
async function deleteUser(
  id,
) {
  const confirmed = confirm("Bạn có chắc muốn xóa?");
  if (!confirmed) return;
  try {
    await api.deleteUser(id);
    users = users.filter((user) => user.id !== id);
    ui.renderUsers(users);
    ui.showSuccess("User deleted");
  } catch (error) {
    ui.showError(error.message);
  }
}
/* ====================== SEARCH ====================== */ 
searchInput.addEventListener(
  "input",
  function () {
    const keyword = this.value.toLowerCase();
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword),
    );
    ui.renderUsers(filteredUsers);
  },
);
/* ====================== INIT ====================== */ 
loadUsers();
