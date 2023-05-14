"use strict";
const btn = document.querySelector('button');
const imgs = document.querySelectorAll('.imgArea li');
let i = 0;
let tmp = 0;
btn.addEventListener('click', ()=> {
  console.log('クリック');
  imgs.forEach(img => {
    img.style.opacity = 0;
    img.classList.remove('fadeIn');
    img.classList.remove('fadeOut');
  });
  if(i < 24){
    i++;
  }else{
    i = 0;
  }

  if(tmp == 24){
    imgs[24].classList.add('fadeOut');
    tmp = 0;
  }else{
    imgs[tmp].classList.add('fadeOut');
    tmp = tmp + 1;
  }
  imgs[i].classList.add('fadeIn');
  imgs[i].style.opacity = 1;
});
