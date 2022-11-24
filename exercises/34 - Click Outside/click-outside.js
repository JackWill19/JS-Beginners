const cardButtons = document.querySelectorAll('.cards button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    // Grab img src
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // Populate modal
    modalInner.innerHTML = `
        <img src="${imgSrc.replace('200', '600')}" alt="${name}"></img>
        <p>${desc}</p>
    `;
    // Show modal
    modalOuter.classList.add('open');

};

function closeModal() {
    modalOuter.classList.remove('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleClick));

modalOuter.addEventListener('click', (e) => {
    const isOutside = !e.target.closest('.modal-inner');
    if(isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        closeModal();
    }
});