document.addEventListener('DOMContentLoaded', function () {
  let scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      // Если прокручено вниз на 300px, показать кнопку
      scrollTopBtn.classList.add('show');
    } else {
      // Если выше 300px, скрыть кнопку
      scrollTopBtn.classList.remove('show');
    }
  });
});
