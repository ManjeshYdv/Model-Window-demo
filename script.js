'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

 const openModel= function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');  
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

for(let i=0; i < btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener('click',openModel);
};
   

btnCloseModal.addEventListener('click',closeModal);
   overlay.addEventListener('click', closeModal);

// to close the model from anywhere
//    btnCloseModel.addEventListener('click',function(){
//     model.classList.add('hidden');
//     overlay.classList.add('hidden');
//    })


