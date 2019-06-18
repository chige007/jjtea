$(function(){
    var banner = $(".banner");
    var bannerSlider = $(banner).unslider({
		dots: true
    });
    var bannerSliderObj = bannerSlider.data('unslider');

    $(".banner .arrow").on('click', function() {
        var fn = this.className.split(' ')[1];
        bannerSliderObj[fn]();
    });

    var t_banner = null;
    $(window).on('resize', function(){
        clearTimeout(t_banner);
        $('.banner').css('width', document.body.clientWidth + 'px');
        t_banner = setTimeout(function(){
            $('.banner').find('.next').trigger('click');
        }, 300);
    });

    $('.tab').find('li').on('click', function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        var tabBody = $(this).closest('.tab').siblings('.tabBody');
        $(tabBody).find('.active').eq(0).removeClass('active');
        $(tabBody).find('li').eq(index).addClass('active');
    });
});