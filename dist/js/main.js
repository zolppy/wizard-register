"use strict";
var inputs = document.querySelectorAll("input");
var textareas = document.querySelectorAll("textarea");
var form = document.querySelector("form");
// const button: HTMLElement = document.querySelector(
//   "button"
// ) as HTMLButtonElement;
document.addEventListener("DOMContentLoaded", function () {
  inputs.forEach(function (input) {
    input.value = "";
    input.checked = false;
  });
  textareas.forEach(function (textarea) {
    textarea.value = "";
  });
});
form.addEventListener("submit", function () {
  window.open("https://zolppy.github.io/wizard-register/submit.html", "_self");
});
