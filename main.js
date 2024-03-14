const grid_content = document.querySelector('.grid_content');
const btn = document.querySelectorAll('.btn');

btn.forEach(item => {
    item.addEventListener('click', () => {
        grid_content.classList.add('grid-cols-2')
    });
});
