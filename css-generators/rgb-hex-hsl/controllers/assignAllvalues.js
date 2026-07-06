import { hexToHsl } from "./assignHSL.js";
import { hexToRgb } from "./assignRGB.js";

const RGB = document.querySelector("#Rgb");
const HEX = document.querySelector("#Hex");
const HSL = document.querySelector("#hsl");
const color = document.querySelector("#coll");

let timeout = null;
export const assignCol = (e) => {
  const hexVal = e.target.value;
  clearTimeout(timeout);
  setTimeout(() => {
    color.style.backgroundColor = `${hexVal}`;
    HEX.innerText = `${hexVal}`;
    RGB.innerText = `rgb( ${hexToRgb(hexVal)[0]} , ${
      hexToRgb(hexVal)[1]
    } , ${hexToRgb(hexVal)[2]} )`;
    HSL.innerText = `hsl( ${hexToHsl(hexVal)[0]} , ${
      hexToHsl(hexVal)[1]
    }% , ${hexToHsl(hexVal)[2]}% )`;
  }, 250);
};
