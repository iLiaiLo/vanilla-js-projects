import setStyles from "../styleController/dayTimeStyles.js";
import { clock } from "./drawClock.js";

const secondsStick = document.createElement("div");
secondsStick.className = "stick";
secondsStick.classList.add("seconds-stick");
const minutesStick = document.createElement("div");
minutesStick.className = "stick";
minutesStick.classList.add("minutes-stick");
const hoursStick = document.createElement("div");
hoursStick.className = "stick";
hoursStick.classList.add("hours-stick");

clock.appendChild(secondsStick);
clock.appendChild(minutesStick);
clock.appendChild(hoursStick);

function moveSticks() {
  const date = new Date();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hours = date.getHours();
  const secondsAngle = seconds * 6;

  const minutesAngle = minutes * 6 + seconds * 0.1;

  const hoursAngle = hours * 30 + minutes * 0.5;
  secondsStick.style.transform = `rotate(${secondsAngle}deg)`;
  minutesStick.style.transform = `rotate(${minutesAngle}deg)`;
  hoursStick.style.transform = `rotate(${hoursAngle}deg)`;
  setStyles(date);
}

export default moveSticks;
