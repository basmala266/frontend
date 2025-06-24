let tasks = [];

    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText !== "") {
        tasks.push(taskText);
        input.value = "";
        showTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1); 
      showTasks();
    }

    function showTasks() {
      const list = document.getElementById("taskList");
      const count = document.getElementById("taskCount");
      list.innerHTML = "";

      tasks.forEach((task, index) => {
        list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`;
      });

      count.textContent = tasks.length;
    }

    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (name === "") {
        document.getElementById("formMessage").innerText = "Name is required.";
      } else if (!email.includes("@")) {
        document.getElementById("formMessage").innerText = "Email must contain @.";
      } else if (password.length < 6) {
        document.getElementById("formMessage").innerText = "Password must be at least 6 characters.";
      } else {
        document.getElementById("formMessage").innerText = " Registration successful!";
      }
    }

    function checkUser() {
      const user = document.getElementById("checkUser").value.trim();

      simulateServer(user)
        .then(message => {
          document.getElementById("checkMessage").innerText = "✅ " + message;
        })
        .catch(error => {
          document.getElementById("checkMessage").innerText = "❌ " + error;
        });
    }

    function simulateServer(username) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === "basmala") {
            resolve("User exists.");
          } else {
            reject("User not found.");
          }
        }, 1000);
      });
    }




