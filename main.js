const tabData = [
    {
        title: 'London',
        descrip: 'London is the capital city of England.'
    },
    {
        title: 'Paris',
        descrip: 'Paris is the capital of France.'
    },
    {
        title: 'Tokyo',
        descrip: 'Tokyo is the capital of Japan.'
    }
]

const tabBtn = document.querySelectorAll('.tabBtn');
const title = document.querySelector('.title');
const description = document.querySelector('.description');

tabBtn.forEach((item , index) => {
    item.addEventListener('click', () =>{
        title.innerHTML = tabData[index].title;
        description.innerHTML = tabData[index].descrip;
        tabBtn.forEach((item) => {
            item.classList.remove('bg-gray-200');
        })
        tabBtn[index].classList.add('bg-gray-200');
    })
});