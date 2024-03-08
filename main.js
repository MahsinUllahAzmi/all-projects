const accordion = document.querySelectorAll('.accordion');
const description = document.querySelectorAll('.description');
const icon = document.querySelectorAll('.plus');


function showAccordion(){
    accordion.forEach((accordion , index) => {
        accordion.addEventListener('click', () =>{
            description.forEach((description) => {
                description.classList.add('hidden');
            })
            icon.forEach((icon) => {
                icon.classList.add('rotate-180');
            })
            description[index].classList.remove('hidden')
            icon[index].classList.remove('rotate-180')
        })
        description[index].classList.toggle('hidden')
    });
}
showAccordion()