function addTask() {
  const titleTask = document.getElementById("t-title");
  const dateTask = document.getElementById("t-date");

  const titleText = titleTask.value;
  const date = dateTask.value;

  const containerTask = document.getElementById("display");
  const newTask = document.createElement("div");
  newTask.classList.add("container-task");
  newTask.innerHTML = `<input type="checkbox" class="check"></input>
    <div class="title-date"><h4 class="title-task">${titleText}</h4><h5 class="deadline">${date}</h5></div>
    <button type="button" class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

  containerTask.appendChild(newTask);
}

function deleteTask(button) {
  button.parentNode.parentNode.removeChild(button.parentNode);
}
