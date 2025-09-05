document.getElementById("formulario").addEventListener("submit", e => {
  e.preventDefault();

  const campos = ["nome", "email", "telefone", "mensagem"];
  let valido = true;

  document.querySelectorAll(".erro").forEach(el => el.remove());

  for (let id of campos) {
    const campo = document.getElementById(id);
    campo.classList.remove("valido", "invalido");

    if (!campo.value.trim()) {
      valido = false;
      campo.classList.add("invalido");

      campo.insertAdjacentHTML("afterend", `<span class="erro">Campo obrigatório</span>`);
    } else {
      campo.classList.add("valido");
    }
  }

  if (valido) setTimeout(() => alert("Formulário válido! ✅"), 100);
});
