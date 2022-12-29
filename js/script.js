const abrir = document.querySelector('.mobile');
const headerBg = document.querySelector('.header-bg');

abrir.addEventListener('click', (event) => {
    abrir.classList.toggle('ativado');
    headerBg.classList.toggle('ativado');
});