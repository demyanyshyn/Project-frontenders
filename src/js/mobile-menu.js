// const menuBtns = document.querySelectorAll('.js-menu-btn');
// const menuEl = document.querySelector('.modal-box');
// const menuLinks = document.querySelectorAll('.mobile-menu-nav-item-link');

// menuBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     menuEl.classList.toggle('is-open');
//   });
// });
// menuLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     menuEl.classList.remove('is-open');
//   });
// });
const menuBtns = document.querySelectorAll('.js-menu-btn');
const menuEl = document.querySelector('.modal-box');
const mobileMenuLinksEl = document.querySelectorAll(
  '.mobile-menu-nav-item-link'
);

const toggleMobileMenu = () => {
  const isMenuOpen = menuEl.classList.toggle('is-open');

  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
};

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleMobileMenu();
  });
});

mobileMenuLinksEl.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    toggleMobileMenu();

    const targetId = event.target.getAttribute('href');

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
