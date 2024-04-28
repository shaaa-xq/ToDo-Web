window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // time component
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    // 0
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    // 12 hour time clock
    const hourTime = hour >= 12 ? (hour === 12 ? 12 : hour - 12) : hour === 0 ? 12 : hour;

    // am pm
    const ampm = hour < 12 ? "AM" : "PM";

    // date component
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    // day list
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // current date and time
    const currentDate = dayList[day] + ", " + monthList[month] + " " + date + " " + year;
    const currentTime = hourTime + ":" + minute + ":" + second + ampm;

    const dateTime = currentDate + " - " + currentTime;

    document.getElementById("date-time").innerHTML = dateTime;
    requestAnimationFrame(clock, 1000);
  }
});
