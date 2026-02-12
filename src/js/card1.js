// Seleciona todos os botões de navegação (Sobre, Habilidades, Contato)
const botoes = document.querySelectorAll(".botoes button");
// Seleciona todos os containers de conteúdo que serão exibidos ou ocultados
const secoes = document.querySelectorAll(".secao");

// Adiciona um evento de clique para cada botão de navegação
botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        // Remove a classe "ativo" de todos os botões para resetar o destaque visual
        botoes.forEach(btn => btn.classList.remove("ativo"));

        // Remove a classe "ativo" de todas as seções para ocultar o conteúdo anterior
        secoes.forEach(secao => secao.classList.remove("ativo"));

        // Adiciona a classe "ativo" ao botão que foi clicado no momento
        botao.classList.add("ativo");

        // Usa o índice do botão clicado para encontrar e exibir a seção de conteúdo correspondente
        secoes[index].classList.add("ativo");
    });
});

// Seleciona o botão responsável por alternar entre o modo claro e escuro
const btnTema = document.querySelector('.btn-tema');

// Adiciona o evento de clique para a funcionalidade de troca de tema
btnTema.addEventListener('click', () => {
    // Seleciona o elemento <html> para manipular o atributo global de tema
    const htmlElement = document.documentElement;
    
    // Captura o valor atual do atributo 'data-theme' para verificar o estado da interface
    const temaAtual = htmlElement.getAttribute('data-theme');

    if (temaAtual === 'dark') {
        // Se o tema atual for escuro, remove o atributo para retornar ao tema padrão (claro)
        htmlElement.removeAttribute('data-theme');
        // Armazena a escolha de tema claro no navegador para visitas futuras
        localStorage.setItem('tema', 'light');
    } else {
        // Se estiver no modo claro, aplica o valor 'dark' ao atributo de tema
        htmlElement.setAttribute('data-theme', 'dark');
        // Salva a preferência pelo modo escuro no armazenamento local
        localStorage.setItem('tema', 'dark');
    }
});

// Executa ao terminar de carregar a página para manter a consistência do tema escolhido
window.onload = () => {
    // Busca a última preferência de tema salva pelo usuário no localStorage
    const temaSalvo = localStorage.getItem('tema');
    // Se o usuário preferiu o modo escuro anteriormente, reaplica o atributo automaticamente
    if (temaSalvo === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
};

// Seleciona o botão de editar pela classe
const btnEditar = document.querySelector('.btn-editar');

// Adiciona o evento de clique
btnEditar.addEventListener('click', () => {
    alert("Em desenvolvimento");
});