// let action_1 = document.getElementById('action_1');
// let actionTitle = document.getElementById('actionTitle');
// let description_1 = document.getElementById('description_1');
// if(action_1 && actionTitle) {
//     action_1.onclick = function (){
//         handleAccordion()
//     }
//     actionTitle.onclick = function (){
//         handleTextAccordion()
//     }
// }

// function handleTextAccordion() {
//     if(description_1.classList.contains('hidden')) {
//         description_1.classList.remove('hidden')
//         action_1.innerText = '-'
//     }else{
//         description_1.classList.add('hidden');
//         action_1.innerText = '+'
//     }
// }


// function handleAccordion(){
//     if(description_1.classList.contains('hidden')) {
//         // description_1.classList.remove('hidden');
//         action_1.innerText = '-'
//     }else{
//         // description_1.classList.add('hidden');
//         action_1.innerText = '+';
//     }
// }


// let actionTitle_1 = document.getElementById('actionTitle_1');
// let actionBtn_1 = document.getElementById('actionBtn_1');
// let description_1 = document.getElementById('description_1');

// let actionTitle_2 = document.getElementById('actionTitle_2');
// let actionBtn_2 = document.getElementById('actionBtn_2');
// let description_2 = document.getElementById('description_2');

// let actionTitle_3 = document.getElementById('actionTitle_3');
// let actionBtn_3 = document.getElementById('actionBtn_3');
// let description_3 = document.getElementById('description_3');

// if(actionTitle_1 && actionBtn_1 && description_1){
//     actionTitle_1.addEventListener('click' , () => {
//         accordionHandelar_1()
//     })
// }
// function accordionHandelar_1(){
//     if(description_1.classList.contains('hidden')){
//         description_1.classList.remove('hidden');
//         actionBtn_1.innerText = '-';
//         console.log('mahisn ullaj')
//     }else{
//         description_1.classList.add('hidden');
//         actionBtn_1.innerText = '+';
//     }
// }


// if(actionTitle_2 && actionBtn_2 && description_2){
//     actionTitle_2.addEventListener('click' , () => {
//         accordionHandelar_2()
//     })
// }

// function accordionHandelar_2(){
//     if(description_2.classList.contains('hidden')){
//         description_2.classList.remove('hidden');
//         actionBtn_2.innerText = '-';
//     }else{
//         description_2.classList.add('hidden');
//         actionBtn_2.innerText = '+';
//     }
// }


// if(actionTitle_3 && actionBtn_3 && description_3){
//     actionTitle_3.addEventListener('click' , () => {
//         accordionHandelar_3()
//     })
// }

// function accordionHandelar_3(){
//     if(description_3.classList.contains('hidden')){
//         description_3.classList.remove('hidden');
//         actionBtn_3.innerText = '-';
//     }else{
//         description_3.classList.add('hidden');
//         actionBtn_3.innerText = '+';
//     }
// }

const AccorData = [
    {
        Title: 'Title 1',
        Description: 'This code implements a simple accordion functionality that allows users to toggle the visibility of specific sections of content. It starts by selecting three groups of elements: action_wrapper.'
    },
    {
        Title: 'Title 2',
        Description: 'Within the handleAccordion function, the code targets the corresponding description element based on the index of the clicked action_wrapper. It checks whether the description element contains a class calle.'
    },
    {
        Title: 'Title 3',
        Description: 'it is added back, effectively hiding the content again. This toggle behavior creates an accordion effect, where clicking an item alternates between showing and hiding the relevant section.'
    },
    {
        Title: 'Title 4',
        Description: 'Overall, the code provides a functional and interactive way to manage collapsible content sections. It can be further improved by using modern JavaScript methods like.'
    },
]

let action_wrapper = document.getElementsByClassName('action_wrapper');
let actionBtn = document.getElementsByClassName('actionBtn');
let description = document.getElementsByClassName('description');
let containerDiv = document.getElementById('containerDiv');


if(action_wrapper && actionBtn && description && AccorData){
    handelHtml()
    
    for(let i = 0; i < action_wrapper.length; i++){
       action_wrapper[i].addEventListener('click', () => {
            handleAccordion(i)
        })
    }
}
function handelHtml(){
    AccorData.forEach(item => {
        containerDiv.innerHTML += 
        `<div class="border">  
            <div class= "action_wrapper bg-gray flex justify-between bg-gray-200 p-4">
                <h2 class="font-bold text-xl">${item.Title}</h2>
                <button class="font-bold text-xl actionBtn">+</button>
            </div>
            <div class="p-4 text-md description hidden">
                <p>${item.Description}</p>
            </div> 
        </div>`;     
    });
}
function handleAccordion(index){
    if (description[index].classList.contains('hidden')) {
        description[index].classList.remove('hidden');
        actionBtn[index].innerText = "-";
    }else{
        description[index].classList.add('hidden');
        actionBtn[index].innerText = "+";
    }  
}