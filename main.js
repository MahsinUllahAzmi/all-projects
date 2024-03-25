const data = [
    {
        mahsin: 'iudsjnxc',
        number: 20,
    },
    {
        mahsin: 'iudsjnxc',
        number: 20,
    },
    {
        mahsin: 'iudsjnxc',
        number: 20,
    },
    {
        mahsin: 'iudsjnxc',
        number: 20,
    }
]



const searchManeger = document.querySelector('.searchManeger')
const menuList = document.querySelectorAll('.menuList')

searchManeger.addEventListener('keyup', (e) => {
    const search = e.target.value.toUpperCase();
    const data = data.filter(item => {
        console.log(item)
    })

})
