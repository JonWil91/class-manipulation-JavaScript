'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// e typically stands for event
document.addEventListener('keydown', function (e) {
    // Log of the key pressed
    console.log(e.key);

    // If the key is equal to escape and the modal classlist does not contain hidden, run closeModal
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});