// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    if (!name.value.trim()) {
      alert("Name is required.");
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      alert("Please enter a valid email.");
      return;
    }
  
    if (!message.value.trim()) {
      alert("Message is required.");
      return;
    }
  
    alert("Form submitted successfully!");
    name.value = "";
    email.value = "";
    message.value = "";
  });
  
  // To-Do List Functionality
  function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
  
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(this)">X</button>`;
    document.getElementById("taskList").appendChild(li);
  
    input.value = "";
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  