// Função para alternar a descrição do banner
function toggleDescription() {
    const descricao = document.querySelector('.descricao-fetec');
    descricao.style.display = (descricao.style.display === 'none') ? 'block' : 'none';
}

// Função para adicionar o efeito de flip ao card
function zoomFlipCard(card) {
    card.querySelector('.card-inner').classList.toggle('flipped');
}

// Carrossel de Imagens
const carrossel = document.querySelector('.carrossel-container');
const items = document.querySelectorAll('.carrossel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function updateCarrossel() {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : items.length - 1;
    updateCarrossel();
});

nextButton.addEventListener('click', () => {
    index = (index < items.length - 1) ? index + 1 : 0;
    updateCarrossel();
});

// Inicializa o carrossel
updateCarrossel();
