const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
const textareas: NodeListOf<HTMLTextAreaElement> =
  document.querySelectorAll("textarea");
const form: HTMLElement = document.querySelector("form") as HTMLFormElement;

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
  const el: HTMLElement = document.querySelector("body") as HTMLBodyElement;

  el.innerHTML = `
    <div class="app__container">
      <img
        src="dist/img/header.png"
        alt="imagem interiamente de cor roxa, de uma flor roxa"
        title="flor roxa"
        class="app__header"
      />
      <div class="app__form-container p-relative">
        <h1 class="app__title">
          Formulário de Registro Oficial dos Magos de Eldoria
        </h1>
        <p class="app__description">
          Muito obrigado por se cadastrar no Registro Oficial dos Magos de
          Eldoria! Sua submissão foi recebida com sucesso. Em breve, você
          receberá uma mensagem confirmando sua inscrição e informando os
          próximos passos. Estamos entusiasmados em conhecê-lo melhor e
          esperamos que sua jornada mágica seja repleta de grandes conquistas
          e aventuras. Que a magia continue a iluminar seu caminho!
        </p>
        <div class="app__decoration"></div>
      </div>
    </div>
  `;
});
