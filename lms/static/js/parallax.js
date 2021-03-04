$(window).scroll(function () {
    // js for parallax
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 2 + 'px';
    $('.parallax-img').css('transform', 'translate3d(0, '  + imgPos + ', 0)');
});
