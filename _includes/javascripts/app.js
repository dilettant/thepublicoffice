$(function() {
    var stickyHeaderTop = $('.main-nav').outerHeight();
    var contentMargin = parseInt($('.content').css('margin-top'));
    var newMargin = contentMargin + $('.back').outerHeight() + 'px';
    
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('.back').addClass("sticky");
            $('.fixable').css({"margin-top": newMargin});
        } else {
            $('.back').removeClass("sticky");
            $('.fixable').css({"margin-top": contentMargin});
        }
    });
});