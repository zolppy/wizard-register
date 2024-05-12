const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
const textareas: NodeListOf<HTMLTextAreaElement> =
  document.querySelectorAll("textarea");
const form: HTMLElement = document.querySelector("form") as HTMLFormElement;
// const button: HTMLElement = document.querySelector(
//   "button"
// ) as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", () => {
  inputs.forEach((input) => {
    input.value = "";
    input.checked = false;
  });
  textareas.forEach((textarea) => {
    textarea.value = "";
  });
});

form.addEventListener("submit", () => {
  window.open("https://pt.stackoverflow.com", "_self");
  alert("asdfadf");
});
