document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#calendar", {
    settings: {
      visibility: {
        theme: "light",
      },
    },
  });
  calendar.init();
});
