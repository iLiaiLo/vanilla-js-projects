const clock = document.querySelector(".clock");

function drawClock() {
  for (let i = 1; i <= 12; i++) {
    const numberContainer = document.createElement("div");
    numberContainer.className = "number-container";

    const angle = i * 30;
    numberContainer.style.transform = `rotate(${angle}deg)`;

    const number = document.createElement("span");
    number.className = "number";
    number.textContent = `${i}`;

    number.style.transform = `rotate(${-angle}deg)`;

    numberContainer.appendChild(number);
    clock.appendChild(numberContainer);
  }
}
export { drawClock, clock };
