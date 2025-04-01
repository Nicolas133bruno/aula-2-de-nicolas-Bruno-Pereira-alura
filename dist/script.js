idade = prompt("Quantos anos você tem?");
if (idade < 18) {
} else {
  if (idade >= 18) {
    escolhajogador = prompt("Digite 1-pedra, 2-papel ou 3-tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaComputador == escolhajogador) {
      alert("Empate!!");
    }
    if (escolhajogador == 1) {
      if (escolhaComputador == 2) {
        alert("O Computador venceu, escolheu papel");
      }
      if (escolhaComputador == 3) {
        alert("Jogador vence, Computador tesoura");
      }
    }
    if (escolhajogador == 2) {
      if (escolhaComputador == 1) {
        alert("O jogador venceu, computador pedra!!");
      }
      if (escolhaComputador == 3) {
        alert("Computador venceu, escolheu tesoura!");
      }
    }
    if (escolhajogador == 3) {
      if (escolhaComputador == 1) {
        alert("Computador venceu, escolheu pedra!");
      }
      if (escolhaComputador == 2) {
        alert("Jogador venceu, computador papel!!");
      }
    }
  }
}