document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorEl = document.getElementById("formError");

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email) {
    errorEl.textContent = "Please fill out all fields.";
  } else if (!emailRegex.test(email)) {
    errorEl.textContent = "Please enter a valid email.";
  } else {
    errorEl.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
  }
});

function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (task === "") return;

  const list = document.getElementById("todo-list");

  const item = document.createElement("div");
  item.className = "todo-item";
  item.innerHTML = `
    <span>${task}</span>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
  list.appendChild(item);
  input.value = "";
}
