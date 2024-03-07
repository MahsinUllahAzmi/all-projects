const imageUrls = [
  "https://via.placeholder.com/600x300/1a1a1a/ffffff?text=Slide+1",
  "https://via.placeholder.com/600x300/333333/ffffff?text=Slide+2",
  "https://via.placeholder.com/600x300/666666/ffffff?text=Slide+3"
];

let currentIndex = 0;

function change(index){
  currentIndex += index;
  if(currentIndex < 0){
    currentIndex = imageUrls.length - 1;
  }else if(currentIndex >= imageUrls.length){
    currentIndex = 0;
  }
  showImage()
}

function showImage(){
  const images = document.querySelector('.images');
  images.src = imageUrls[currentIndex];
}
showImage()