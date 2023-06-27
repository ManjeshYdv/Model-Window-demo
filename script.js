'use strict';

const model = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');
 const btnloseModel = document.querySelector('.close-model');
 const btnOpenModel = document.querySelectorAll('.show-modal');

console.log(btnOpenModel);

for(let i=0;i<btnOpenModel.length;i++)
    btnOpenModel[i].addEventListener('click',function(){
    console.log('button clicked');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
   })
;
