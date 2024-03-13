const tabImage = document.querySelectorAll('.tabImage');
const imgShow = document.querySelector('.imgShow');
const caption = document.querySelector('.caption');
const content = document.querySelector('.content');
const closeer = document.querySelector('.closeer');

tabImage.forEach((item , index) => {
    item.addEventListener('click', function(){
        imgShow.src = item.src;
        caption.innerHTML = item.alt;
        content.classList.remove('hidden');
        closeer.addEventListener('click' , function(){
            content.classList.add('hidden');
        });
        tabImage.forEach(item => {
            item.classList.add('opacity-[0.7]');
        });
        tabImage[index].classList.remove('opacity-[0.7]');
    });
    tabImage[index].classList.add('opacity-[0.7]');
    imgShow.src = tabImage[0].src;
    caption.innerHTML = tabImage[0].alt;
});

