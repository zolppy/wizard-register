"use strict";
var inputs = document.querySelectorAll("input");
var textareas = document.querySelectorAll("textarea");
document.addEventListener("DOMContentLoaded", function () {
    inputs.forEach(function (input) {
        input.value = "";
        input.checked = false;
    });
    textareas.forEach(function (textarea) {
        textarea.value = "";
    });
});