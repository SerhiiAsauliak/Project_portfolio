const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

close.addEventListener('click', () => {
   menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
   if (e.key == 'Escape') {
       menu.classList.remove('active');
   }
});

window.addEventListener('click', (e) => {
   if (e.target == overlay) {
       menu.classList.remove('active');
   }
});