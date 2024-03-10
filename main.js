const modalImage = document.querySelector('.modalImage');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const popupImage = document.querySelector('.popupImage');
const popupTitle = document.querySelector('.popupTitle');
const content = document.querySelector('.content');


modalImage.addEventListener('click', function(){
    modal.classList.remove('hidden');
    popupImage.src = this.src;
    popupTitle.innerHTML = this.alt;
    popupImage.classList.add('w-[600px]' , 'h-[400px]')
    content.classList.add('scale-[1]')
    close.addEventListener('click', () =>{
        modal.classList.add('hidden');
    });
});

// popupTitle.innerHTML = this.alt;
