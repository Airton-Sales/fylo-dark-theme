const emailInput = document.getElementById("emailId");
const button = document.getElementById("buttonId");

function validarEmail(email) {
  const regex = /^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})$/;
  return regex.test(email);
}

function mostrarErro(mensagem) {
  const mensagemErro = document.createElement("p");
  mensagemErro.textContent = mensagem;
  mensagemErro.classList.add("mensagem-erro");
  emailInput.parentElement.appendChild(mensagemErro);
}

function limparMensagemErro() {
  const mensagemErro = emailInput.parentElement.querySelector(".mensagem-erro");
  if (mensagemErro) {
    mensagemErro.remove();
  }
}

function enviarEmail() {
  const email = emailInput.value.trim(); 

  if (!email) {
    alert("Por favor, digite seu e-mail.");
    emailInput.style.borderColor = "red";
    return;
  }

  if (!validarEmail(email)) {
    alert("O e-mail digitado é inválido.");
    emailInput.style.borderColor = "red";
    emailInput.value = "";
    return;
  }

  limparMensagemErro(); 
  alert("E-mail enviado com sucesso!");
   emailInput.style.borderColor = "white";
  emailInput.value = "";
}

button.addEventListener("click", enviarEmail);
