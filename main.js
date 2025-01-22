let namList = ['Sabrin' , 'Ahmed' , 'Kripa' , 'Mahsin', 'Ullah' , 'Azmi'];
let title = document.getElementById('title');

let index = 0;

function changeName(){
  if(index < namList.length){
      title.innerHTML = namList[index];
      index++;
    }else{
      index = 0;
    }
}


setInterval(changeName, 2000 );