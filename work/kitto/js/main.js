//$(document).ready(function() {
//    /*
//     var defaults = {
//     containerID: 'toTop', // fading element id
//     containerHoverID: 'toTopHover', // fading element hover id
//     scrollSpeed: 1200,
//     easingType: 'linear'
//     };
//     */
//
//    $().UItoTop({ easingType: 'easeOutQuart' });
//
//});
$(function() {

    jQuery.scrollSpeed(100, 900);

});

//$('.Count').each(function () {
//    var $this = $(this);
//    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//        duration: 5000,
//        easing: 'swing',
//        step: function () {
//            $this.text(Math.ceil(this.Counter));
//        }
//    });
//});




$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        // do something
        $('.Count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }, 500));
});


