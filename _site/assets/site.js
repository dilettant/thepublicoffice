Included file 'javascripts/jquery-1.8.2.min.js' not found in _includes directory
$(function() {
    // var stickyHeaderTop = $('.main-nav').outerHeight();
    // var contentMargin = parseInt($('.content').css('margin-top'));
    // var newMargin = contentMargin + $('.back').outerHeight() + 'px';
    
    // $(window).scroll(function(){
    //     if( $(window).scrollTop() > stickyHeaderTop ) {
    //         $('.back').addClass("sticky");
    //         $('.fixable').css({"margin-top": newMargin});
    //     } else {
    //         $('.back').removeClass("sticky");
    //         $('.fixable').css({"margin-top": contentMargin});
    //     }
    // });
  $('ul.primary li a').click(function(){
    console.log('will open', $(this).find('ul.secondary'));
    $(this).find('ul.secondary').toggle();
  });

});