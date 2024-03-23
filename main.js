function searchManeger(){
    const searchManeger = document.querySelector('.searchManeger')
    const filter = searchManeger.value.toUpperCase();
    const menuList = document.querySelectorAll('.menuList')

    menuList.forEach((item , index) => {
        const x = item[index];
        console.log(x)
        if(item.innerHTML.toUpperCase().indexOf(filter) > -1){
            item[index].style.display = '';
        }else{
            item[index].style.display = 'none';
        }
    })
}