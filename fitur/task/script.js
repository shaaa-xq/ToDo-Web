function addTask() {
  const titleTask = document.getElementById("t-title");
  const dateTask = document.getElementById("t-date");

  const titleText = titleTask.value;
  const date = dateTask.value;

  const display = document.getElementById("display");
  const newTask = document.createElement("li");

  newTask.innerHTML = `${titleText} (Deadline: ${date})`;

  display.appendChild(newTask);

  titleTask.value = "";
  dateTask.value = "";
}
