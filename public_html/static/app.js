document.getElementById('location').addEventListener('click', function () {
  document.getElementById('map').scrollIntoView();
});

document.getElementById('logo').addEventListener('click', function () {
  window.scrollTo(0, 0);
});

let currentCardIndex = 0;
const cards = document.querySelectorAll('.list-card');
const hoverInterval = 3000;

function activateCard(index) {
  // Удаляем активный класс со всех карт
  cards.forEach((card) => {
    card.classList.remove('active');
  });

  // Добавляем активный класс к текущей карте
  const card = cards[index];
  if (card) {
    card.classList.add('active');
  }

  // Обновляем индекс для следующей карты или сбрасываем его
  currentCardIndex = (index + 1) % cards.length;
}

// Запускаем циклическое переключение карт
setInterval(() => {
  activateCard(currentCardIndex);
}, hoverInterval);

let slideShowIndex = 1;
let mainImgElement = document.getElementById('mainImage');

function changeMainImage(index) {
  // Первый шаг: делаем изображение невидимым
  mainImgElement.style.opacity = 0;

  // Второй шаг: после того как изображение стало невидимым, меняем источник и плавно показываем новое изображение
  setTimeout(() => {
    mainImgElement.src = mainImageUrls[index];
    mainImgElement.style.opacity = 1; // Делаем изображение видимым
    slideShowIndex = (index + 1) % mainImageUrls.length;
  }, 800); // Задержка соответствует времени перехода
}

setInterval(() => {
  changeMainImage(slideShowIndex);
}, hoverInterval + 800); // Добавьте время анимации к интервалу, чтобы изображение успело измениться
