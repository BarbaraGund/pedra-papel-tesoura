// variáveis para guardar o placar
let pontosJogador = 0;
let pontosComputador = 0;

function jogar(escolhajogador) {
  /// "jogar" jogador escolhe a opção

  const opções = ["Pedra", "Papel", "Tesoura"]; // opções de escolha do jogador
  const escolhaComputador = opções[Math.floor(Math.random() * 3)]; // (Math random para geram um numero aleatório) Math.floor (para arredondar o numero gerado) *3 (para gerar numero entre 0 e 3 do array)

  document.getElementById("escolha-jogador").textContent = escolhajogador;
  document.getElementById("escolha-computador").textContent = escolhaComputador;

  let resultado = "";

  if (escolhajogador === escolhaComputador) {
    resultado = "Empate!";
  } else if (
    // contendo 3 opções em que o jogador ganha
    (escolhajogador === "Pedra" && escolhaComputador === "Tesoura") || // || significa ou
    (escolhajogador === "Papel" && escolhaComputador === "Pedra") ||
    (escolhajogador === "Tesoura" && escolhaComputador === "Papel")
  ) {
    resultado = "Vitória!";
    pontosJogador++; // aumenta 1 ponto para o jogador pontos jogador = pontos jogador + 1
  } else {
    resultado = "Derrota!";
    pontosComputador++;
  }

  document.getElementById("mensagem").innerHTML = resultado; // troca o texto de esolha a opção para o resultado
  // placar
  document.getElementById("pontos-jogador").textContent = pontosJogador;
  document.getElementById("pontos-computador").textContent = pontosComputador;
}

function reiniciar() {
  pontosJogador = 0;
  pontosComputador = 0;

  document.getElementById("pontos-jogador").textContent = pontosJogador;
  document.getElementById("pontos-computador").textContent = pontosComputador;
  document.getElementById("escolhas").textContent = "";
  document.getElementById("mensagem").textContent = "Escolha uma opção";
}
