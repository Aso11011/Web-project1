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



const body = document.querySelector('body'),
      menunav = body.querySelector('.menu_content'),
      navOpenbtn = body.querySelector('.navOpen_btn'),
      navClosebtn = menunav.querySelector('.navClose_btn');




if(menunav && navOpenbtn){
    navOpenbtn.addEventListener('click' , e =>{
        menunav.classList.add('open')
        body.style.overflowY = 'hidden'
    })
}

if(menunav && navClosebtn){
    navClosebtn.addEventListener('click' , e =>{
        menunav.classList.remove('open')
        body.style.overflowY = 'scroll'
    })
}

window.addEventListener('scroll' , e=>{
  let num1 = window.pageYOffset;
 
  

  if(num1 > 5){
    document.querySelector('.header').classList.add('header_active')
  }else{
    document.querySelector('.header').classList.remove('header_active')

  }





  let scrollupbtn = document.querySelector('.scrollup_btn')
  if(num1 > 250){
    scrollupbtn.classList.add('scrollupbtn_active')
  }else{
    scrollupbtn.classList.remove('scrollupbtn_active')
  }
  // console.log(num1);

  // let section = document.querySelectorAll('section[id]')
  // section.forEach(item =>{
  //   let sizeheight = item.offsetHeight,
  //       sizetop = item.offsetTop - 60;

  //   let navid = document.querySelector(`.menu_content a[href*= ${section.id}]`)  

  //     if(num1 > sizetop && num1 <= sizeheight + sizetop){
  //       navid.classList.add('active_navlink') 

  //     }else{
  //       navid.classList.remove('active_navlink') 

  //     }
  //     console.log(navid);
  // })
  // console.log(section);

 })

 const sr = ScrollReveal({
   origin:'top',
   distance:'60px',
   duration:2500,
   delay:400,
   reset: true
 })

 sr.reveal(`.section_subtitle, .section_title, .section_discription, .brand_img, .tesitmonial, .newsletter,
  .footer_content, .logo-content, .footer_links, .newsletter_inputbox, .media_icons
 
 ` , {interval:100})

 sr.reveal(`.aboutimgcontent, .menu_items` , {origin:'left'})
 sr.reveal(`.about_lists, .tiem_tabl` , {origin:'right'})













