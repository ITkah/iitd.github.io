$( document ).ready(function() {
    str = $('.short-text-1').html();
    str = str.substr(0,270) + '...';
    $('.short-text-1').html(str);

    $('div.tabs__caption').on('click', 'p:not(.active-tab)', function() {
        $(this)
        .addClass('active-tab').siblings().removeClass('active-tab')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});