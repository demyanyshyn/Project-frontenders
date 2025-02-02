document.addEventListener('DOMContentLoaded', function () {
  let header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      header.classList.add('hide'); // Добавляем класс, если прокрутили 500px
    } else {
      header.classList.remove('hide'); // Убираем класс, если вернулись вверх
    }
  });
});
