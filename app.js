const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayName = days[now.getDay()];
  day.innerHTML = `${dayName}`;

  hour.innerHTML = `${hours % 12}` + ":";
  minutes.innerHTML = `${mins}` + ":";
  second.innerHTML = `${seconds}`;
}
setInterval(setDate, 1000);
