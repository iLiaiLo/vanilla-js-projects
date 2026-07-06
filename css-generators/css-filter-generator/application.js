import { styleController } from "./controllers/styleControllers/stylecontroller.js";
import { copyText } from "./controllers/copyTextController/copyText.js";
import { resetFilter } from "./controllers/resetControllers/resetFilter.js";

const filters = document.querySelector(".filters");

const filterReset = document.querySelector(".filterReset");
filterReset.addEventListener("click", resetFilter);

const copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", copyText);

[...filters.children].forEach((elem) =>
  elem.children[1].addEventListener("input", styleController)
);
