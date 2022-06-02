const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');
      menuLink = document.querySelectorAll('.menu__link');


hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

close.addEventListener('click', () => {
   menu.classList.remove('active');
});

menuLink.forEach(item => {
   item.addEventListener('click', () => {
      menu.classList.remove('active');
   });
});

window.addEventListener("keydown", (e) => {
   if (e.key == 'Escape') {
       menu.classList.remove('active');
   }
});

const percent = document.querySelectorAll('.counter__percent'),
      lines = document.querySelectorAll('.counter__line span');

percent.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});

