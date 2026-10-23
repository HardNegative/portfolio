console.log("Script loaded successfully!");

const nome = "Gabriel";
let hora = new Date().getHours();
console.log(hora);

let saudacao;
if (hora < 12) {
    saudacao = "Bom dia";
} else if (hora < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}
console.log(saudacao);

const titulo = document.querySelector("h1");
titulo.textContent = saudacao + ", eu sou o " + nome + "!";

const botao = document.querySelector("#tema");
botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
});