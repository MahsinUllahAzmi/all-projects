const grid_content = document.querySelector('.grid_content');
const btn = document.querySelectorAll('.btn');

btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(index < 1){
            grid_content.classList.add('grid-cols-1');
            grid_content.classList.remove('grid-cols-2');
            grid_content.classList.remove('grid-cols-3');
        }
        else if(index < 2){
            grid_content.classList.add('grid-cols-2');
            grid_content.classList.remove('grid-cols-3');
            grid_content.classList.remove('grid-cols-1');
            grid_content.classList.remove('grid-cols-4');
        }
        else if(index < 3){
            grid_content.classList.add('grid-cols-3');
            grid_content.classList.remove('grid-cols-4');
        }
        else{
            grid_content.classList.add('grid-cols-4');
        }
    });
});
