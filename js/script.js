$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
    });

    // Modal

    $('[data-modal=order]').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #order').fadeOut('slow');
    });
    
});