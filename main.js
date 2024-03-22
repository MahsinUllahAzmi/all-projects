function runBar(){
    let currentIndex = 0;

    if(currentIndex == 0){
        currentIndex = 1;
        setInterval(() => {
            let width = currentIndex++;  
            if(width <= 100){
                console.log(width)
                const bar = document.querySelector('.bar');
                const value = document.querySelector('.value');
                bar.style.width = width + '%';
                value.innerHTML = `${width}%`
            }
        } , 10)
    }
}