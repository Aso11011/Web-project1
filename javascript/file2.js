var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





let open_menu = document.querySelector('.navOpen_btn')
let menu = document.querySelector('.menu_content')
let close_menu = document.querySelector('.navClose_btn');
open_menu.addEventListener('click' , e => {
    menu.classList.add('open')
    console.log('aso');
    
})
close_menu.addEventListener('click' , e =>{
    menu.classList.remove('open')
})
