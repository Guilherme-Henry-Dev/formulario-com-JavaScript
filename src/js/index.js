document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  let campos = ["nome", "email", "telefone", "mensagem"];
  let formularioValido = true;

  campos.forEach(function(campoId) {
    let campo = document.getElementById(campoId);

    let msgErro = campo.nextElementSibling;
    if (msgErro && msgErro.classList.contains("erro")) {
      msgErro.remove();
    }

    if (campo.value.trim() === "") {
      formularioValido = false;
      campo.style.border = "2px solid red";

      let span = document.createElement("span");
      span.classList.add("erro");
      span.style.color = "red";
      span.style.fontSize = "14px";
      span.style.display = "block";
      span.style.marginTop = "1px"; 
      span.innerText = "Campo obrigatório";

      campo.insertAdjacentElement("afterend", span);
    } else {
      campo.style.border = "2px solid green";
    }
  });

  if (formularioValido) {
    setTimeout(() => {
      alert("Formulário válido! ✅");
    }, 100);
  }
});