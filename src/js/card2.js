// function alternarTema() {
//     const corpo = document.body;
//     const botao = document.getElementById("botao-tema");

//     corpo.classList.toggle("modo-escuro");
//     const estaNoEscuro = corpo.classList.contains("modo-escuro");
//     botao.innerText = estaNoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
// }

const botoesStephany = document.querySelectorAll('#projeto-stephany .botoes-grupo button');
const secoesStephany = document.querySelectorAll('#projeto-stephany .secao');

botoesStephany.forEach(botao => {
  botao.addEventListener('click', () => {

    // remove ativo dos botões
    botoesStephany.forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');

    // esconde todas as seções
    secoesStephany.forEach(secao => secao.classList.remove('ativa'));

    // pega o id do botão
    const idAlvo = botao.dataset.secao;

    // mostra só a seção correta
    document.getElementById(idAlvo).classList.add('ativa');

  });
});