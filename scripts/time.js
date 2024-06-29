function displayTime() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let currentDate = new Date();

  let dayOfWeek = days[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let day = currentDate.getDate();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let period = hours >= 12 ? "pm" : "am";

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Pad minutes with leading zeros if less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Construct the formatted date string
  let formattedDate = `${dayOfWeek} ${month} ${day} ${hours}:${minutes}${period}`;

  document.getElementById("time").textContent = formattedDate;
}

// Call displayTime function every second (1000 milliseconds)
setInterval(displayTime, 1000);

// Optionally, call displayTime immediately on page load
displayTime();
