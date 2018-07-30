$(document).ready(function(){
    
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 100) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }
    
    animation();
    
    $(window).scroll(function(){
        animation();
    });
    
    
    
    //ADD HEADER STYLE ON SCROOL
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 50) {

            $('header').addClass('bg-white');

        } else {
            $('header').removeClass('bg-white');
        }

    });
    
    
    //EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
    
    
});

