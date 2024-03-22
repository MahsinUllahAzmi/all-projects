const imageUrl = [
    "https://images.unsplash.com/photo-1710958607988-c1747bbf0daa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556980737-723b1d87d861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1664286884752-be12252853d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
];

const slideImages = document.querySelector('.slideImages');
let currentIndex = 0;


function carousel() {
    slideImages.src = imageUrl[currentIndex];
    currentIndex++;
    if(currentIndex >= imageUrl.length){
        currentIndex = 0;
    }
    setTimeout(carousel , 1000)
}

carousel();