let open_menu = document.querySelector('.navOpen_btn')
let menu = document.querySelector('.nav_list')
let close_menu = document.querySelector('.navClose_btn');

open_menu.addEventListener('click' , e =>{
    menu.classList.add('open')
})

close_menu.addEventListener('click' , e =>{
    menu.classList.remove('open')
})