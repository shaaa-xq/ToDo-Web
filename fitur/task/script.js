function addTask() {
  const titleTask = document.getElementById("t-title");
  const dateTask = document.getElementById("t-date");

  const titleText = titleTask.value;
  const date = dateTask.value;

  const display = document.getElementById("display");
  const newTask = document.createElement("li");

  newTask.innerHTML = `${titleText} (Deadline: ${date}) <button style="padding: 5px; border-radius: 10px" onclick="removeTask(this)">Delete</button>`;

  display.appendChild(newTask);

  titleTask.value = "";
  dateTask.value = "";
}

function removeTask(button) {
  const taskList = button.parentElement;
  taskList.remove();
}
