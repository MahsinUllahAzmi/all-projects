const modalImage = document.querySelectorAll('.modalImage');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const content = document.querySelector('.content');
const popupImage = document.querySelector('.popupImage');
const popupTitle = document.querySelector('.popupTitle');

modalImage.forEach(modalImage => {
    modalImage.addEventListener('click', function() {
        modal.classList.remove('hidden');
        popupImage.src = this.src;
        popupTitle.innerHTML = this.alt;
        close.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    });
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.classList.add('hidden');
        console.log('ok')
    }
  });