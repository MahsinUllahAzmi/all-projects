const accordion = document.querySelectorAll('.accordion');
const description = document.querySelectorAll('.description');
const icon = document.querySelectorAll('.plus');


function showAccordion(){
    accordion.forEach((accordion , index) => {
        accordion.addEventListener('click', () =>{
            description.forEach((description) => {
                description.classList.add('h-0', 'overflow-hidden');
                console.log(icon)
            })
            description[index].classList.remove('h-0', 'overflow-hidden')
        })
        description[index].classList.add('h-0' , 'overflow-hidden')
    });
}
showAccordion()