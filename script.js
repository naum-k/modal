'use strict';

const btnS = document.querySelectorAll('.show-modal');
const btnC = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}

for(let i = 0; i < btnS.length; i++)
btnS[i].addEventListener('click', openModal);

btnC.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
   if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
})



