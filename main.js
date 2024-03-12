const imgUrl = [
    {
        img: "https://via.placeholder.com/600x300/F44336/ffffff?text=Slide+1",
        alt: 'The Woods',
        index: "1",
    },
    {
        img: "https://via.placeholder.com/600x300/F44336/ffffff?text=Slide+2",
        alt: 'Cinque Terre',
        index: "2",
    },
    {
        img: "https://via.placeholder.com/600x300/F44336/ffffff?text=Slide+3",
        alt: 'Mountains and fjords',
        index: "3",
    },
    {
        img: "https://via.placeholder.com/600x300/F44336/ffffff?text=Slide+4",
        alt: 'Northern Lights',
        index: "4",
    },
];

const imgIndex = document.querySelector('.imgIndex');
const slideImg = document.querySelector('.slideImg');
const caption = document.querySelector('.caption');
const dottes = document.querySelectorAll('.dottes');

currentIndex = 0;
function changeslide(index){
    currentIndex += index;
    if(currentIndex < 0){
        currentIndex = imgUrl.length - 1;
    }else if(currentIndex >= imgUrl.length){
        currentIndex = 0;
    }
    slideImg.src = imgUrl[currentIndex].img;
    caption.innerHTML = imgUrl[currentIndex].alt;
    imgIndex.innerHTML = imgUrl[currentIndex].index + ' / 4';
    showSlide()
}
function showDottes(){
 dottes.forEach((item , index) => {
     item.addEventListener('click', () => {
         currentIndex = index;
         showSlide()
     })
 })
}

function showSlide(){
    slideImg.src = imgUrl[currentIndex].img;
    caption.innerHTML = imgUrl[currentIndex].alt;
    imgIndex.innerHTML = `${imgUrl[currentIndex].index} / ${imgUrl.length}`;
    
    dottes.forEach((item) => {
        item.classList.add('opacity-[0.5]');
    })
    dottes[currentIndex].classList.remove('opacity-[0.5]');
}
showSlide()
showDottes()

