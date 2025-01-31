const menuBtns = document.querySelectorAll('.js-menu-btn');
const menuEl = document.querySelector('.modal-box');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuEl.classList.toggle('is-open');
  });
});
