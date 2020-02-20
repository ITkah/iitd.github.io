$(document).ready(function() {

    $('div.tabs__caption').on('click', 'p:not(.active-tab)', function() {
        $(this)
            .addClass('active-tab').siblings().removeClass('active-tab')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(".btn-menu").on("click", function(){
        $("nav").fadeIn(100);
    });

    $(".close-btn").on("click", function(){
        $("nav").fadeOut(100);
    });

    $(".link-hover").hover(
        function() {
            $(".nav-box-dropdown-hover").fadeOut(0);
            $(this).next().fadeIn(100);
        }
    );

    $(".nav-box-dropdown-hover").mouseleave(function(){
        $(".nav-box-dropdown-hover").fadeOut(100);
    });

    $(window).resize(function() {
        if ($(window).width() < 990) {
            $(".nav-box-dropdown-hover").unbind('mouseenter mouseleave');
            $(".link-hover").unbind('mouseenter mouseleave');
            $(".link-call").on("click", function(e){
                e.preventDefault();
                $(this).next().slideToggle(100);
            });
        }
    });


    $(".nav-box-title").on("click", function(){
        $(this).siblings(".box-hide-nav").slideToggle(100);
    });


    $('.single-item').slick({
        dots: true,
        arrows: false,
        speed: 200,
        fade: true,
        cssEase: 'linear'
    });

    str = $('.short-text-1').html();
    str = str.substr(0, 270) + '...';
    $('.short-text-1').html(str);
});