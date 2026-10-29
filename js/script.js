console.log("script carregado com sucesso!");

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

const botao = document.querySelector("#tema");

// Verificar se já existe um tema salvo no localStorage ao carregar a página
if (localStorage.getItem("theme") === "escuro") {
    document.body.classList.add("escuro");
    if (botao) {
        botao.textContent = "Modo Claro";
    }
}

botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        botao.textContent = "Modo Claro";
        localStorage.setItem("theme", "escuro");
    } else {
        botao.textContent = "Modo Escuro";
        localStorage.setItem("theme", "claro");
    }
});

const gostos = ["Marxisismo", "Estudos", "Animais", "Socialismo", "Tecnologia", "Filosofia", "Música", "Livros"];
console.log(gostos.length);
console.log(gostos[0]);
const lista = document.querySelector("#gostos");

for (const gosto of gostos) {
    const item = document.createElement("li");
    item.textContent = gosto;
    lista.appendChild(item);
}   

