$(document).ready(function() {

    $('div.tabs__caption').on('click', 'p:not(.active-tab)', function() {
        $(this)
            .addClass('active-tab').siblings().removeClass('active-tab')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(".btn-menu").on("click", function(){
        $(".nav-menu").fadeIn(100);
    });

    $(".menu-close").on("click", function(){
        $(".nav-menu").fadeOut(100);
    });

    $(".active-day").on("click", function(){
        $(".hide-info-vebinar").hide();
        $(this).children(".hide-info-vebinar").toggle();
    });

    $(".cl-call-1").on("click", function(){
        $(".cl-call-2").removeClass("active-calendar");
        $(".xl-calendar").hide();
        $(this).addClass("active-calendar");
        $(".sm-calendar").show();
    });

    $(".cl-call-2").on("click", function(){
        $(".cl-call-1").removeClass("active-calendar");
        $(".sm-calendar").hide();
        $(this).addClass("active-calendar");
        $(".xl-calendar").show();
    });

    $(".nav-link-call").on("click", function(){
        $(".nav-link-call").removeClass("nav-mob-active");
        $(".nav-link-sm-wrapper").hide();
        $(this).toggleClass("nav-mob-active");
        $(this).siblings(".nav-link-sm-wrapper").slideToggle(100);
    });

    $(".call-sm-nav").on("click", function() {
        $(".link-sm").hide();
        $(this).siblings(".link-sm").css("display","block");
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
        }
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