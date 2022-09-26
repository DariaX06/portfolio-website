$(document).ready(function(){
    resize();
    animation();
});
$('.menu_link, .works_button').on('click', function(e){
    e.preventDefault();
    let href = $(this).attr('href');
    $('html').animate({
        scrollTop: $(href).offset().top
    }, 500);
    return false;
});

$(window).resize(function() {
    
});
    


function resize(){
    $('.text_block').height($('#about').height() - 300);
    $('.slide_image_block').height($('.slide_text_block').outerHeight());
    $('.slide_text_block').height($('.slide_text_block:first').height());
}

function animation(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > $('.image_border').offset().top - 500) {
            $('.image_border').css({
                'transform':'scale(1)'
            });
            setTimeout(function(){
                $('.line_corner_image').css({
                    'transform':'translate(0, 0)'
                });
            }, 500)
        }
        if ($(this).scrollTop() > $('.slider').offset().top - 600) {
            $('.slider::after').css({
                'transform':'translate(0, 0)',
                'opacity': '1'
            });
            $('.slider::before').css({
                'transform':'translate(0, 0)',
                'opacity': '1'
            });
        }
    });
}