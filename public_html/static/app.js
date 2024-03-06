document
  .getElementById('location')
  .addEventListener('click', () =>
    document.getElementById('map').scrollIntoView()
  );

document
  .getElementById('logo')
  .addEventListener('click', () => window.scrollTo(0, 0));

let currentCardIndex = 0;
const cards = document.querySelectorAll('.list-card');
const hoverInterval = 3000;
let hoverIntervalTimer = 0;

let slideShowIndex = 1;
let mainImgElement = document.getElementById('mainImage');

function activateCard(index) {
  cards.forEach((card) => {
    card.classList.remove('active');
  });

  const card = cards[index];
  if (card) {
    card.classList.add('active');
  }

  currentCardIndex = (index + 1) % cards.length;
}

function changeMainImage() {
  mainImgElement.style.opacity = 0;

  setTimeout(() => {
    mainImgElement.src = mainImageUrls[slideShowIndex];
    mainImgElement.style.opacity = 1;
    slideShowIndex = (slideShowIndex + 1) % mainImageUrls.length;
  }, 800);
}

function changeCardOrImage(timestamp) {
  if (hoverIntervalTimer <= 0) {
    activateCard(currentCardIndex);
    changeMainImage();
    hoverIntervalTimer = hoverInterval;
  } else {
    hoverIntervalTimer -= timestamp - lastAnimationFrame;
  }

  lastAnimationFrame = timestamp;
  requestAnimationFrame(changeCardOrImage);
}

lastAnimationFrame = performance.now();
requestAnimationFrame(changeCardOrImage);

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    cancelAnimationFrame(lastAnimationFrame);
  } else {
    lastAnimationFrame = performance.now();
    requestAnimationFrame(changeCardOrImage);
  }
});
