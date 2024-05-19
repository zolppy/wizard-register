"use strict";
var inputs = document.querySelectorAll("input");
var textareas = document.querySelectorAll("textarea");
var form = document.querySelector("form");
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
    var el = document.querySelector("body");
    el.innerHTML = "\n    <div class=\"app__container\">\n      <img\n        src=\"dist/img/header.png\"\n        alt=\"imagem interiamente de cor roxa, de uma flor roxa\"\n        title=\"flor roxa\"\n        class=\"app__header\"\n      />\n      <div class=\"app__form-container p-relative\">\n        <h1 class=\"app__title\">\n          Formul\u00E1rio de Registro Oficial dos Magos de Eldoria\n        </h1>\n        <p class=\"app__description\">\n          Muito obrigado por se cadastrar no Registro Oficial dos Magos de\n          Eldoria! Sua submiss\u00E3o foi recebida com sucesso. Em breve, voc\u00EA\n          receber\u00E1 uma mensagem confirmando sua inscri\u00E7\u00E3o e informando os\n          pr\u00F3ximos passos. Estamos entusiasmados em conhec\u00EA-lo melhor e\n          esperamos que sua jornada m\u00E1gica seja repleta de grandes conquistas\n          e aventuras. Que a magia continue a iluminar seu caminho!\n        </p>\n        <div class=\"app__decoration\"></div>\n      </div>\n    </div>\n  ";
});
