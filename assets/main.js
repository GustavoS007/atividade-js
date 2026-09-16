const usuario = prompt("Digite seu nome e sobrenome:");

const diasDaSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
];

const agora = new Date();

const diaSemana = diasDaSemana[agora.getDay()];
const dia = String(agora.getDate()).padStart(2, "0");
const mes = String(agora.getMonth() + 1).padStart(2, "0");
const ano = agora.getFullYear();
const hora = String(agora.getHours()).padStart(2, "0");
const minuto = String(agora.getMinutes()).padStart(2, "0");

const deslocamento = -agora.getTimezoneOffset();
const sinal = deslocamento >= 0 ? "+" : "-";
const horasFuso = String(Math.floor(Math.abs(deslocamento) / 60)).padStart(2, "0");
const minutosFuso = String(Math.abs(deslocamento) % 60).padStart(2, "0");

const fusoHorario = `${sinal}${horasFuso}:${minutosFuso}`;

const dataAtual = `${diaSemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto} (${fusoHorario})`;

console.log("Usuário:", usuario);
console.log("Data atual:", dataAtual);

function exibirBoasVindas() {
    const mensagem = document.querySelector("#mensagem-boas-vindas");

    if (mensagem) {
        mensagem.textContent = `Olá, ${usuario}! Hoje é ${dataAtual}`;
        console.log("Elemento de boas-vindas encontrado:", mensagem);
    } else {
        console.log("Elemento #mensagem-boas-vindas não foi encontrado.");
    }
}

exibirBoasVindas();
