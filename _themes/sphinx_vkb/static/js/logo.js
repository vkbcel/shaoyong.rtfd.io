$(function() {
    $('.myself').mouseover(function(){
            $('.logo-out').animate({borderSpacing: 315}, {
                step: function (now, fx) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            }, 1000);
            $(this).animate({width: '350px'}, 500);
    })
    $('.myself').mouseleave(function(){
        $(this).stop(true);
        $('.logo-out').stop(true);
        // $('.logo-out').css({'-webkit-transform':'rotate(-45deg)','-moz-transform':'rotate(-45deg)','transform':'rotate(-45deg)'});
        // $(this).css("width","100px");
            $('.logo-out').animate({borderSpacing: -45}, {
                step: function (now, fx) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            }, 1000);
            $(this).animate({width: '100px'}, 500);
    })
})