const listaInformacoes = document.querySelector("#lista-informacoes");

function criarCard(informacao) {
    const card = document.createElement("section");
    card.classList.add("card");
    const titulo = document.createElement("h2");
    titulo.textContent = informacao.titulo;
    const texto = document.createElement("p");
    texto.textContent = informacao.descricao;
    card.appendChild(titulo);
    card.appendChild(texto);
    listaInformacoes.appendChild(card);
}

fetch("infoss.json")
    .then(resposta => resposta.json())
    .then(projetos => {
        for (const projeto of projetos) {
            criarCard(projeto);
        }
    });