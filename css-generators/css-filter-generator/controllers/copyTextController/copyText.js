export const copyText = async (e) => {
  if (e.target.tagName !== "BUTTON") return;

  try {
    const text = document.querySelector(".get-code").textContent;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      alert("text copied");
    } else {
      const input = document.createElement("textarea");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      alert("text copied");
    }
  } catch (error) {
    alert(error.message);
  }
};
