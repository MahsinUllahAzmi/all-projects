const imageUrl = [
    {
        img: "https://images.unsplash.com/photo-1442544213729-6a15f1611937?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Village 1",
    },
    {
        img: "https://images.unsplash.com/photo-1591866497533-403d44694fa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
        alt: "Village 2",
    },
    {
        img: "https://images.unsplash.com/photo-1572908721147-0a9eb395762d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
        alt: "Village 3",
    }
];

const modalImage = document.querySelectorAll('.modalImage');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const content = document.querySelector('.content');
const popupImage = document.querySelector('.popupImage');
const popupTitle = document.querySelector('.popupTitle');


let currentIndex = 0;
function changeBtn(index){
    currentIndex += index;
    if(currentIndex < 0){
        currentIndex = imageUrl.length - 1;
    }
    else if(currentIndex >= imageUrl.length){
        currentIndex = 0;
    }
    popupImage.src = imageUrl[currentIndex].img;
    popupTitle.innerHTML = imageUrl[currentIndex].alt;
}


function change(index){
    modal.classList.remove('hidden');
    popupImage.src = imageUrl[index - 1].img;
    popupTitle.innerHTML = imageUrl[index - 1].alt;
    close.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}
popupImage.src = imageUrl[0].img;
popupTitle.innerHTML = imageUrl[0].alt;

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.classList.add('hidden');
        console.log('ok')
    }
  });