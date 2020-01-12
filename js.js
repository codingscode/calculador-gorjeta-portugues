//isto é para calcular gorjeta
function calcularGorjeta() {
  var quantconta = document.getElementById("quantConta").value;
  var servicoQualidade = document.getElementById("qualidadeServico").value;
  var quantpessoas = document.getElementById("quantPessoas").value;

  //validar entrada
  if (quantconta === "" || servicoQualidade == 0) {
    alert("digitar número");
    return;
  }

  if (quantpessoas === "" || quantpessoas <= 1) {
    quantpessoas = 1;
    document.getElementById("cada").style.display = "none";
  } else {
    document.getElementById("cada").style.display = "block";
  }

  // calcular gorjeta
  var total = (quantconta * servicoQualidade) / quantpessoas;

  //arredondar para 2 casas
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  // mostrar gorjeta
  document.getElementById("gorjetaTotal").style.display = "block";
  document.getElementById("gorjeta").innerHTML = total;
}
document.getElementById("gorjetaTotal").style.display = "none";
document.getElementById("cada").style.display = "none";

// chamar função
document.getElementById("calcular").onclick = function() {
  calcularGorjeta();
};