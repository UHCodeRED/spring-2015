//Toggle mobile menu
$(".navbar.navbar-inverse.navbar-static-top a").click(function() {
    $(".navbar-collapse").addClass("hideClass");
});
$(".navbar.navbar-inverse.navbar-static-top a").click(function() {
    $(".navbar-collapse").addClass("collapse");
});
$(".navbar.navbar-inverse.navbar-static-top a").click(function() {
    $(".navbar-collapse").removeClass("in");
});
$(".navbar-toggle").click(function() {
    $(".navbar-collapse").removeClass("hideClass");
});

$(function() {
    function positionNav() {
        var position = $('#home').height() - $(window).scrollTop() - 60;
        if (position >= 0) {
            $(".menu").css('margin-top', position).show();
        } else {
            $(".menu").css('margin-top', 0).show();
        }
    }
    
    $(window).scroll(function() {
        positionNav();
    });
    
    $(window).resize(function() {
        positionNav();
    });

    positionNav();
});

function scrollToAnchor(aid){
    $('html,body').animate({scrollTop: $(aid).offset().top - 60},'slow');
}