let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.flex');
  const totalSlides = slides.children.length;
  const newPosition = -index * 100 + '%';
  slides.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3; // Assuming 3 slides, update accordingly
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3; // Assuming 3 slides, update accordingly
  showSlide(currentIndex);
}

// Initial slide show
showSlide(currentIndex);

// fiver gmail : dev.mahsin@gmail.com
// fiver password : Ullah@12

// fiver sequirity ques: kripa