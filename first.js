function calc(op) {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      let r;

      if (isNaN(n1) || isNaN(n2)) {
        r = "Please enter numbers.";
      } else {
        if (op === '+') r = n1 + n2;
        if (op === '-') r = n1 - n2;
        if (op === '*') r = n1 * n2;
        if (op === '/') r = n2 !== 0 ? n1 / n2 : "Can't divide by 0";
      }

      document.getElementById("result").innerText = "Result: " + r;
    }

   
    function togglePara() {
    const p = document.getElementById("para");
    p.classList.toggle("hidden");
    }

   
    function addTask() {
      let input = document.getElementById("taskInput");
      let taskText = input.value.trim();
      if (taskText === "") return;

      let li = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onclick = function() {
        li.classList.toggle("done");
      }

      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(" " + taskText));
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    
    function logObject() {
      let student = {
        name: "Laila",
        age: 18,
        hobbies: ["drawing", "reading", "swimming"],
        grades: {
          math: 88,
          english: 92,
          science: 95
        },
        active: true
      };

      console.log("Name:", student.name);
      console.log("First hobby:", student.hobbies[0]);
      console.log("Science grade:", student.grades.science);
    }
