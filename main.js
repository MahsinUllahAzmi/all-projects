function changeBar(x){
    const bar1 = document.querySelector('.bar-1')
    const bar2 = document.querySelector('.bar-2')
    const bar3 = document.querySelector('.bar-3')
    bar1.classList.toggle('activeBar1')
    bar2.classList.toggle('opacity-0')
    bar3.classList.toggle('activeBar3')
}