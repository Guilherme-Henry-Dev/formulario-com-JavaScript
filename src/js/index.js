document.getElementById("formulario").addEventListener("submit", e => {
  e.preventDefault();

  const regras = {
    nome: {
      regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
      msg: "Digite apenas letras"
    },
    email: {
      regex: /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|icloud|outlook|yahoo)\.[a-z]{2,}(\.[a-z]{2,})?$/,
      msg: "Digite um e-mail válido"
    },
    telefone: {
      regex: /^\+?\d{1,3}?\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      msg: "Digite um telefone válido"
    },
    mensagem: {
      regex: /.+/,
      msg: "Campo obrigatório"
    }
  };

  let valido = true;
  document.querySelectorAll(".erro").forEach(el => el.remove());

  for (let id in regras) {
    const campo = document.getElementById(id);
    campo.classList.remove("valido", "invalido");

    if (!regras[id].regex.test(campo.value.trim())) {
      valido = false;
      campo.classList.add("invalido");
      campo.insertAdjacentHTML("afterend", `<span class="erro">${regras[id].msg}</span>`);
    } else {
      campo.classList.add("valido");
    }
  }

  if (valido) setTimeout(() => alert("Formulário válido! ✅"), 100);
});