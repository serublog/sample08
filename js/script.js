$('.slider').slick({
    autoplay:true,
    autoplaySpeed:4000,
    speed: 2000,
    prevArrow: false,
    nextArrow: false,
    fade: true,
});

$('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.musk').fadeToggle(500);
    $('.nav-wrapper').fadeToggle(200);
    $('body').toggleClass('noscroll');
  });

  new WOW().init();