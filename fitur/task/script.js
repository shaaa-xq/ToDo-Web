function addTask() {
  const arrayTask = [];
  const titleTask = document.getElementById("t-title");
  const dateTask = document.getElementById("t-date");

  const titleTaskText = titleTask.value;
  const date = dateTask.value;

  arrayTask.push(titleTaskText, date);

  console.log(arrayTask);
}
// let list = [
//   {
//     title: "tugas a",
//     date: "27/7/24",
//     subject: "ui ux",
//   },
//   {
//     title: "tugas b",
//     date: "8/8/24",
//     subject: "english",
//   },
// ];
