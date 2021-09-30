var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve chutar um número entre 0 e 10!";
  } else {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Acertou!";
    } else {
      elementoResultado.innerHTML = "Errou feio!Errou rude!";
    }
  }
}