const value = document.querySelector('.value');
let currentIndex = 0;
function runBar(){
    if(currentIndex == 0){
        currentIndex = 1;
        const bar = document.querySelector('.bar');
        width = 1;
        let timeMenage = setInterval(frame , 10);
        function frame(){
            if(width >= 100){
                clearInterval(timeMenage);
                currentIndex = 0;
            }else{
                width++;
                bar.style.width = width + '%';
            }
            value.innerHTML = width + '%';
        }
    }
  }