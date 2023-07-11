const serviceCards = document.querySelectorAll('.service-card');

let currentIndex = 0;

function slideToNextCard() {
  serviceCards[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % serviceCards.length;
  serviceCards[currentIndex].classList.add('active');
}

setInterval(slideToNextCard, 5000);
