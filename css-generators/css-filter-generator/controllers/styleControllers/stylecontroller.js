const photo = document.getElementById("photo");

const filterContaier = document.querySelector(".filters");

const code = document.querySelector(".get-code");

code.textContent = `brightness(${100}%) contrast(${100}%) grayscale(${0}%) hue-rotate(${0}deg) invert(${0}%) opacity(${100}%) saturate(${1}) sepia(${0}%) blur(${0}px)`;

export const styleController = (e) => {
  if (e.target.tagName !== "INPUT") return;
  const values = [...filterContaier.children].map(
    (item) => item.children[1].value,
  );

  const [
    brightness,
    contrast,
    grayscale,
    hueRotate,
    invert,
    opacity,
    saturate,
    sepia,
    blur,
  ] = values;

  const filterStyles = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}) sepia(${sepia}%) blur(${blur}px)`;

  code.textContent = filterStyles;

  photo.style.filter = filterStyles;
};
