const accorData = [
    {
        title: 'Bangladesher Poribesh',
        description: 'Bangladesh ekti shundor sobujer desh, jekhane prithibir ek shirsher sobuj poribesh pawa jay. Ekhane nadi, nodi, ar anek prakritik shampad ache. Ei poribesh amader jiboner ongsho.',
    },
    {
        title: 'Krirar Jibon',
        description: 'Bangladesher krirar jibon boroi gorbito. Cricket ar football ekhane khub priyo. Shakib Al Hasan ar Tamim Iqbal er moto manushera amader pratidin onprerona dai.',
    },
    {
        title: 'Shikkhar Probortan',
        description: 'Ekhane shikkha prosharer kothin kaste dhire dhire unnati hocche. Digital shikkhar projukti amader prostuti gyane aagey niye jacche. Shikkharthider swapno shotti korte prayash dekha jay.',
    },
    {
        title: 'Sonar Bangla',
        description: 'Bangladesh ke sonar Bangla bola hoy, karon ekhane tarunno, sanskriti, ar swapner mel hoy. Ekta sundor jibon gorte ekhane manusher proti manusher bhalobasha bishesh jonno niye ase.',
    },
    {
        title: 'Shobji Ar Krishi',
        description: 'Bangladesher matite krishi khub joruri. Dhanshirer khete khete shobujer ek jotil chitra amader matite protifolito hoy. Prithibi sobuj rakhar protishruti ekhane bojha jay.',
    },
];


let containerDiv = document.getElementById('containerDiv');
let action_wrapper = document.getElementsByClassName('action_wrapper');
let action_btn = document.getElementsByClassName('action_btn');
let description = document.getElementsByClassName('description');


let creatElement = document.createElement('div');
let appendElement = containerDiv.appendChild(creatElement);


function handleHtml(){
    accorData.forEach(item => {
        appendElement.innerHTML += 
                    `<div class="border">
                        <div class="flex justify-between p-4 font-bold text-xl bg-gray-200 action_wrapper">
                            <h2>${item.title}</h2>
                            <button class="action_btn">+</button>
                        </div>
                        <div class="p-4 text-md description hidden">
                            <p>${item.description}</p>
                        </div>
                     </div>`;
    });
}
handleHtml()


if (action_wrapper && action_btn && description && accorData) {
    for (let i = 0; i < action_wrapper.length; i++) {
        action_wrapper[i].addEventListener('click', () => {
            handleAccordion(i)
        })
    }
}


function handleAccordion(i) {
   for(let index = 0; index < description.length; index++){
    if(index !== i){
        description[index].classList.add('hidden');
        action_btn[index].innerText = '+';
        console.log(index + 'none description')
        console.log(i + 'click index in description show')
    }
   }
    if(description[i].classList.contains('hidden')){
        description[i].classList.remove('hidden');
        action_btn[i].innerText = '-';
    }else{
        description[i].classList.add('hidden');
        action_btn[i].innerText = '+';
    }
}