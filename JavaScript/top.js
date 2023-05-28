"use strict";
const photos = document.querySelectorAll('.imgArea li');
let i = 24;
let lastSwitchTime = 0;
let tmp = 24;

const clock = () => {
  const now = new Date();
  let sec = now.getSeconds();

  if (sec % 8 === 0 && lastSwitchTime !== sec) {
    photos.forEach(photo => {
      photo.style.opacity = 0;
      photo.classList.remove('fadeIn');
      photo.classList.remove('fadeOut');
    });

    if (i < photos.length - 1) {
      i++;
    } else {
      i = 0;
    }

    if(tmp == 24){
      photos[24].classList.add('fadeOut');
      tmp = 0;
    }else{
      photos[tmp].classList.add('fadeOut');
      tmp = tmp + 1;
    }  
    photos[i].classList.add('fadeIn');
    photos[i].style.opacity = 1;
    lastSwitchTime = sec;
  }
  requestAnimationFrame(clock);
};

clock();
