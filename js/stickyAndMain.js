$(".navbar.navbar-inverse.navbar-static-top a").click(function() {
    $(".navbar-collapse").addClass("hideClass");
    $(".navbar-collapse").addClass("collapse");
    $(".navbar-collapse").removeClass("in");
});
$(".navbar-toggle").click(function() {
    $(".navbar-collapse").removeClass("hideClass");
});

$(function() {
    function positionNav() {
        var position = $('#home').height() - $(window).scrollTop() - 60;
        $(".menu").css('margin-top', (position >= 0) ? position : 0).show();
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
    event.preventDefault();
    $('html,body').animate({scrollTop: $(aid).offset().top - 60},'slow');
}