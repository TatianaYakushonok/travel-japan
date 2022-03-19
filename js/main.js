(function(){
   const header = document.querySelector('.header');
   window.onscroll = () => {
       if(window.pageYOffset > 50) {
           header.classList.add('header_active');
       } else {
           header.classList.remove('header_active');
       }
   } 
}());

// BURGER HEADER

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav-avtive');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav-avtive');
    })
}());