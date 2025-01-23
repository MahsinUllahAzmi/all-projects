const testimonialData = [
    {
        url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        biography: 'Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        name: 'Rahim UX',
    },
    {
        url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        biography: ' remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
        name: 'Karim UI',
    },
    {
        url: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        biography: 'it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        name: 'Kabir Designer',
    },
]

let prof_img = document.querySelector('.prof_img');
let bio_text = document.querySelector('.bio_text');
let name_text = document.querySelector('.name_text');

let index = 0;

function testimonialHandaler(){
    prof_img.src = testimonialData[index].url;
    bio_text.innerText = testimonialData[index].biography
    name_text.innerText = testimonialData[index].name
    index++;
    if(index >= testimonialData.length){
        index = 0;
    }
}

setInterval(() => {
    testimonialHandaler()   
}, 2000);

