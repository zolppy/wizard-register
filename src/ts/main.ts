const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
const textareas: NodeListOf<HTMLTextAreaElement> =
  document.querySelectorAll("textarea");

document.addEventListener("DOMContentLoaded", () => {
  inputs.forEach((input) => {
    input.value = "";
    input.checked = false;
  });
  textareas.forEach((textarea) => {
    textarea.value = "";
  });
});
