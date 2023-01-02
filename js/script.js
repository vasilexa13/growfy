"use strict"

document.addEventListener("click",documentClick);

function documentClick(e){
    const targetItem = e.target;
    
    if (targetItem.closest('.icon__menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}


// Карусель
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay:true,
    loop:true,
    autoplayTimeout:3000,
    margin:25,
    slideBy:1,
    autoplayHoverPause:true,
    smartSpeed:850,
    
  });
});
if ($(window).width() < 991.98 ){
    $(".owl-carousel").owlCarousel({
        items:2,
        autoplay:true,
        loop:true,
        autoplayTimeout:3000,
        margin:25,
        slideBy:1,
        autoplayHoverPause:true,
        smartSpeed:850,
    });
}

// Вывод отсчета цифр в блоке advantages
    var i;
    for (i = 0; i < 150; i++) {
      (function (i) {
        setTimeout(function () {
          document.getElementById("demo").innerHTML= i+Math.floor(Math.random() * 300) ;
          document.getElementById("demo2").innerHTML= i+Math.floor(Math.random() * 10);
          document.getElementById("demo3").innerHTML= i+Math.floor(Math.random() * 200);
          document.getElementById("demo4").innerHTML= i+Math.floor(Math.random() * 50);
        }, 10 * i );
      })(i);
    }