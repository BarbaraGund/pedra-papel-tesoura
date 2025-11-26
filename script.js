function jogar(escolhajogador) {
  /// "jogar" jogador escolhe a opção

  const opções = ["pedra", "papel", "tesoura"]; // opções de escolha do jogador
  const escolhaComputador = opções[Math.floor(Math.random() * 3)]; // (Math random para geram um numero aleatório) Math.floor (para arredondar o numero gerado) *3 (para gerar numero entre 0 e 3 do array)

  document.getElementById("escolhas").innerHTML =
    // get pega elemento escolhas // innerHTML mudar o que esta dentro de escolhas.
    `Voce: ${escolhajogador} vs Computador: ${escolhaComputador}`;

  let resultado = verificaVencedor(escolhajogador, escolhaComputador); // chama as duas funções e as comparar
  mostraResultado(resultado);
}
