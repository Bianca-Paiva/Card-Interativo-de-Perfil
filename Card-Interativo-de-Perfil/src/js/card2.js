function alternarTema() {
    const corpo = document.body;
    const botao = document.getElementById("botao-tema");

    corpo.classList.toggle("modo-escuro");
    const estaNoEscuro = corpo.classList.contains("modo-escuro");
    botao.innerText = estaNoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

// mostra ou esconde as seções clicadas
function alternarConteudo(id) {
    const secao = document.getElementById(id);
    
    secao.classList.toggle("ativa");
}