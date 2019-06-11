$(function(){
    var banner = $("#page_index .banner");
    var bannerSlider = $(banner).unslider({
		dots: true
    });
    var bannerSliderObj = bannerSlider.data('unslider');

    $("#page_index .banner .arrow").on('click', function() {
        var fn = this.className.split(' ')[1];
        bannerSliderObj[fn]();
    });
});