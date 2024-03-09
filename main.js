const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal_container');
const close = document.querySelector('.close');

btn.addEventListener('click', () =>{
    modalContainer.classList.remove('hidden')
    modal.classList.add('translate-y-[0px]' , 'duration-300')
    close.addEventListener('click', () =>{
        modalContainer.classList.add('hidden')
    })
})

window.addEventListener('click', (event) =>{
    console.log(event.target)
    if(event.target == modalContainer){
        modalContainer.classList.add('hidden');
    }
})