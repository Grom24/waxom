$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        $(".navbar-sticky").addClass("darkheader");
    } else {
        $(".navbar-sticky").removeClass("darkheader");
    }
});