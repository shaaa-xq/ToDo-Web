// function addTask() {
//   const titleTask = document.getElementById("t-title");
//   const dateTask = document.getElementById("t-date");

//   const titleText = titleTask.value;
//   const date = dateTask.value;

//   const display = document.getElementById("display");
//   const newTask = document.createElement("li");

//   newTask.innerHTML = `${titleText} (Deadline: ${date}) <button style="padding: 5px; border-radius: 10px" onclick="removeTask(this)">Delete</button>`;

//   display.appendChild(newTask);

//   titleTask.value = "";
//   dateTask.value = "";

//   randomId();

//   const id = randomId(2);

//   console.log(id);
// }

// function removeTask(button) {
//   const taskList = button.parentElement;
//   taskList.remove();
// }

// function randomId(length) {
//   const number = "0123456789";
//   if (!length) {
//     length = Math.floor(Math.random() * number.length);
//   }

//   let idTask = "";
//   for (let i = 0; i < length; i++) {
//     idTask += number[Math.floor(Math.random() * number.length)];
//   }
//   return idTask;
// }

function addTask() {
  const titleTask = document.getElementById("t-title");
  const dateTask = document.getElementById("t-date");

  const titleText = titleTask.value;
  const date = dateTask.value;

  const containerTask = document.getElementById("display");
  const newTask = document.createElement("div");
  newTask.classList.add("container-task");
  newTask.innerHTML = `<input type="checkbox" class="check"></input>
    <div><h4 class="title-task">${titleText}</h4><h5 class="deadline">${date}</h5></div>
    <button type="button" class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

  containerTask.appendChild(newTask);
}

function deleteTask(button) {}
