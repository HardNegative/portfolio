const informacoes = [
    { titulo: "Origem", descricao: "Criado por Karl Marx e Friedrich Engels em 1848, criticando as desigualdades geradas pela Revolução Industrial." },
    { titulo: "Propriedade coletiva", descricao: "Fábricas, terras e recursos naturais pertencem a toda a sociedade, eliminando os donos privados." },
    { titulo: "Socialismo vs. Comunismo", descricao: "O socialismo é a fase inicial com controle do Estado; o comunismo é a fase final, livre de Estado." },
    { titulo: "Prática histórica", descricao: "Regimes como o da URSS adotaram o socialismo; o comunismo ideal (sem Estado) jamais existiu na prática." }
];

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

for (const info of informacoes) {
    criarCard(info);
}