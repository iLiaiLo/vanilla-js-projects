export const copyText = async (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const className = e.target.parentNode.className;

  const text = document.querySelector(`.${className}`).children[1].textContent;

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      alert("text copied to clipboard");
    } else {
      const input = document.createElement("textarea");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      alert("text copied to clipboard");
    }
  } catch (error) {
    alert(error.message);
  }
};
