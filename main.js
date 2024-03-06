const imageUrls = [
  "https://via.placeholder.com/600x300/1a1a1a/ffffff?text=Slide+1",
  "https://via.placeholder.com/600x300/333333/ffffff?text=Slide+2",
  "https://via.placeholder.com/600x300/666666/ffffff?text=Slide+3"
];

let currentIndex = 0;

function createSlide(imageUrl) {
  const slide = document.createElement('img');
  slide.src = imageUrl;
  slide.alt = 'Slide';
  slide.classList.add('w-full');
  return slide;
}

// function showSlide(index) {
//   const slider = document.getElementById('slider');
//   slider.innerHTML = '';
  
//   const totalSlides = imageUrls.length;
//   const newPosition = -index * 100 + '%';
//   slider.style.transform = 'translateX(' + newPosition + ')';

//   const currentImageUrl = imageUrls[index];
  const currentSlide = createSlide(currentImageUrl);
//   slider.appendChild(currentSlide);
// }

function nextSlide() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  showSlide(currentIndex);
}

// Initial slide show
showSlide(currentIndex);
