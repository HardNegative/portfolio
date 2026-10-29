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
    if (document.body.classList.contains("escuro")) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
});

const gostos = ["Jogar", "Estudar", "Ser Feliz", "Jones Manoel"];
console.log(gostos.length);
console.log(gostos[0]);
const lista = document.querySelector("#gostos");

for (const gosto of gostos) {
    const item = document.createElement("li");
    item.textContent = gosto;
    lista.appendChild(item);
}