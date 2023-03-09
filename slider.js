$(function() {

    var inWrap = $('.inner-wrapper'),
    $slide = $('.slide');
  
  
    function slideNext() {
  
      inWrap.animate({left: '-200%'}, 200, function() {
    
        inWrap.css('left', '-100%');
    
        $('.slide').last().after($('.slide').first());
    
      });
    
    }
  
  
     //Enabling auto scroll
     sliderInterval = setInterval(slideNext, 4000);
  
  
  
    $('.prev').on('click', function() {
  
      inWrap.animate({left: '0%'}, 200, function() {
  
        inWrap.css('left', '-100%');
  
        $('.slide').first().before($('.slide').last());
  
      });
    });
  
  
    $('.next').on('click', function() {
  
      clearInterval(sliderInterval);
  
      slideNext();
  
    });
  
  
  });

  $(".size").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
 })


const cart = document.querySelector(".openCart")
const cartDiv = document.querySelector('.cart-div')
console.log(cart);

cart.addEventListener("click", () => {
    if(cartDiv.classList.contains('open')){
        gsap.to(cartDiv, {right:'-50%', duration:2})
        cartDiv.classList.remove('open')
    }else{
        gsap.to(cartDiv, {right:'0%', duration:1.5})
        cartDiv.classList.add('open')
    }
})