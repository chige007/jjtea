$(function(){
    $('.storePicList .storePic').on('click', function(){
        var src = $(this).find('img').attr('src');
        $('#bigImageWrap').addClass('show').find('.image').attr('src', src);
    });
    $('#bigImageWrap').find('.closeBtn').on('click', function(){
        $('#bigImageWrap').removeClass('show').find('.image').attr('src', '');
    });
});