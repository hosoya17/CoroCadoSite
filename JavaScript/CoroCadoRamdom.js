const btn = document.querySelector('.preview');
const imgs = document.querySelectorAll('.imgArea li');
let i = 0;
let tmp = 0;

btn.addEventListener('click', ()=> {
  imgs.forEach(img => {
    img.style.opacity = 0;
    img.classList.remove('fadeIn');
    img.classList.remove('fadeOut');
  });
  i = Math.floor(Math.random() * 25);
  while(tmp === i){
    i = Math.floor(Math.random() * 25);
  }
  
  imgs[tmp].classList.add('fadeOut');
  imgs[i].classList.add('fadeIn');
  imgs[i].style.opacity = 1;
  tmp = i;
});
