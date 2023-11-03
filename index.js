var nomeDoHeroi = "Gladiador das Águas Claras";
var xpDoHeroi = 6350; 

var mensagem;

if (xpDoHerói < 1000) {
  mensagem = nomeDoHeroi + " é um herói de Ferro.";
} else if (xpDoHerói >= 1001 && xpDoHerói <= 2000) {
  mensagem = nomeDoHeroi + " é um herói de Bronze.";
} else if (xpDoHerói >= 2001 && xpDoHerói <= 5000) {
  mensagem = nomeDoHeroi + " é um herói de Prata.";
} else if (xpDoHerói >= 6001 && xpDoHerói <= 7000) {
  mensagem = nomeDoHeroi + " é um herói de Ouro.";
} else if (xpDoHerói >= 7001 && xpDoHerói <= 8000) {
  mensagem = nomeDoHeroi + " é um herói de Platina.";
} else if (xpDoHerói >= 8001 && xpDoHerói <= 9000) {
  mensagem = nomeDoHeroi + " é um herói Ascendente.";
} else if (xpDoHerói >= 9001 && xpDoHerói <= 10000) {
  mensagem = nomeDoHeroi + " é um herói Imortal.";
} else {
  mensagem = nomeDoHeroi + " é um herói Radiante.";
}

// Apresente a mensagem com base na XP
console.log(mensagem);