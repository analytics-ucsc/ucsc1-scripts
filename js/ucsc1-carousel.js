const ucsc1Slides =
  document.querySelectorAll('.ucsc1-slide');

const ucsc1PrevBtn =
  document.querySelector('.ucsc1-prev');

const ucsc1NextBtn =
  document.querySelector('.ucsc1-next');

const ucsc1BulletsContainer =
  document.querySelector('.ucsc1-bullets');

let ucsc1Current = 0;

let ucsc1Interval;

/* =========================
   CREAR BULLETS
========================= */

ucsc1Slides.forEach((_, index) => {

  const bullet =
    document.createElement('button');

  bullet.classList.add('ucsc1-bullet');

  if (index === 0) {
    bullet.classList.add('ucsc1-bullet-active');
  }

  bullet.addEventListener('click', () => {
    ucsc1GoToSlide(index);
  });

  ucsc1BulletsContainer.appendChild(bullet);

});

const ucsc1Bullets =
  document.querySelectorAll('.ucsc1-bullet');

/* =========================
   MOSTRAR SLIDE
========================= */

function ucsc1ShowSlide(index) {

  ucsc1Slides.forEach(slide => {
    slide.classList.remove('ucsc1-active');
  });

  ucsc1Bullets.forEach(bullet => {
    bullet.classList.remove('ucsc1-bullet-active');
  });

  ucsc1Slides[index]
    .classList.add('ucsc1-active');

  ucsc1Bullets[index]
    .classList.add('ucsc1-bullet-active');

}

/* =========================
   SIGUIENTE
========================= */

function ucsc1NextSlide() {

  ucsc1Current =
    (ucsc1Current + 1) % ucsc1Slides.length;

  ucsc1ShowSlide(ucsc1Current);

}

/* =========================
   ANTERIOR
========================= */

function ucsc1PrevSlide() {

  ucsc1Current =
    (ucsc1Current - 1 + ucsc1Slides.length)
    % ucsc1Slides.length;

  ucsc1ShowSlide(ucsc1Current);

}

/* =========================
   IR A SLIDE
========================= */

function ucsc1GoToSlide(index) {

  ucsc1Current = index;

  ucsc1ShowSlide(ucsc1Current);

  ucsc1RestartAutoplay();

}

/* =========================
   AUTOPLAY
========================= */

function ucsc1StartAutoplay() {

  ucsc1Interval =
    setInterval(ucsc1NextSlide, 5000);

}

function ucsc1RestartAutoplay() {

  clearInterval(ucsc1Interval);

  ucsc1StartAutoplay();

}

/* =========================
   EVENTOS
========================= */

ucsc1NextBtn.addEventListener('click', () => {

  ucsc1NextSlide();

  ucsc1RestartAutoplay();

});

ucsc1PrevBtn.addEventListener('click', () => {

  ucsc1PrevSlide();

  ucsc1RestartAutoplay();

});

/* =========================
   INICIAR
========================= */

ucsc1StartAutoplay();
