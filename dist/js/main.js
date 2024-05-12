"use strict";
var inputs = document.querySelectorAll("input");
var textareas = document.querySelectorAll("textarea");
var button = document.querySelector("button");
document.addEventListener("DOMContentLoaded", function () {
    inputs.forEach(function (input) {
        input.value = "";
        input.checked = false;
    });
    textareas.forEach(function (textarea) {
        textarea.value = "";
    });
});
button.addEventListener("click", function () {
    var el = document.querySelector("main");
    el.innerHTML = "\n    <div class=\"app__container\">\n      <img\n        src=\"dist/img/header.png\"\n        alt=\"imagem interiamente de cor roxa, de uma flor roxa\"\n        title=\"flor roxa\"\n        class=\"app__header\"\n      />\n      <div class=\"app__form-container p-relative\">\n        <h1 class=\"app__title\">Formul\u00E1rio de Cadastro de Magos</h1>\n        <p class=\"app__description\">\n          Obrigado por compartilhar seus segredos m\u00E1gicos conosco! Que as\n          energias arcanas continuem fluindo em seu caminho!\n        </p>\n        <div class=\"app__decoration\"></div>\n      </div>\n    </div>";
});
