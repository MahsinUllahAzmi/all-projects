function searchManeger(){
    const searchManeger = document.querySelector('.searchManeger')
    const menuList = document.querySelectorAll('.menuList')
    menuList.forEach(item => {
        console.log(searchManeger.indexOf(item))
    });
}