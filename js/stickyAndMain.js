//StickUp.js
jQuery(function($){$(document).ready(function(){var contentButton = [];var contentTop = [];var content = [];var lastScrollTop = 0;var scrollDir = '';var itemClass = '';var itemHover = '';var menuSize = null;var stickyHeight = 0;var stickyMarginB = 0;var currentMarginT = 0;var topMargin = 0;$(window).scroll(function(event){var st = $(this).scrollTop();if (st > lastScrollTop){scrollDir = 'down';} else {scrollDir = 'up';}lastScrollTop = st;});$.fn.stickUp = function( options ) {$(this).addClass('stuckMenu');var objn = 0;if(options != null) {for(var o in options.parts) {if (options.parts.hasOwnProperty(o)){content[objn] = options.parts[objn];objn++;}}if(objn == 0) {console.log('error:needs arguments');}itemClass = options.itemClass;itemHover = options.itemHover;if(options.topMargin != null) {if(options.topMargin == 'auto') {topMargin = parseInt($('.stuckMenu').css('margin-top'));} else {if(isNaN(options.topMargin) && options.topMargin.search("px") > 0){topMargin = parseInt(options.topMargin.replace("px",""));} else if(!isNaN(parseInt(options.topMargin))) {topMargin = parseInt(options.topMargin);} else {console.log("incorrect argument, ignored.");topMargin = 0;} }} else {topMargin = 0;}menuSize = $('.'+itemClass).size();}stickyHeight = parseInt($(this).height());stickyMarginB = parseInt($(this).css('margin-bottom'));currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));vartop = parseInt($(this).offset().top);};$(document).on('scroll', function() {varscroll = parseInt($(document).scrollTop());if(menuSize != null){for(var i=0;i < menuSize;i++){contentTop[i] = $('#'+content[i]+'').offset().top;function bottomView(i) {contentView = $('#'+content[i]+'').height()*.4;testView = contentTop[i] - contentView;if(varscroll > testView){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover);} else if(varscroll < 50){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq(0)').addClass(itemHover);}}if(scrollDir == 'down' && varscroll > contentTop[i]-50 && varscroll < contentTop[i]+50) {$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover);}if(scrollDir == 'up') {bottomView(i);}}}if(vartop < varscroll + topMargin){$('.stuckMenu').addClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'}, 10);$('.stuckMenu').css("position","fixed");$('.isStuck').css({top: '0px'}, 10, function(){});};if(varscroll + topMargin < vartop){$('.stuckMenu').removeClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top': currentMarginT + 'px'}, 10);$('.stuckMenu').css("position","relative");};});});});

jQuery(function($) {
    $(document).ready(function() {
        $('.navbar-wrapper').stickUp({
            parts: {
                0: 'banner',
                1: 'about',
                2: 'schedule',
                3: 'faq',
                4: 'sponsors'
            },
            itemClass: 'menuItem',
            itemHover: 'active',
            topMargin: 'auto'
        });
    });

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

    //Resize Header
    $(function() {
        function resizeHeader() {
            $('#banner').css({
                width: $(window).width(),
                height: $(window).height() - 60
            });

            //True vertical centering
            $('.bannerText').css("top", ($(window).height() - $("#CodeRED").height() - 140)/2);

            //Resize registration form
            if (suVisible){
                var ptop = ($(window).height() - $("#CodeRED").height() - ($("#regContent")[0].scrollHeight) - 120)/2;
                $('.bannerText').css("top", (ptop > 0) ? ptop : 0);
                if ($(window).height() < 680){
                    $("#home").animate({
                        "height" : $("#CodeRED").height() + ($("#regContent")[0].scrollHeight) + 110
                    },100);
                    $(".banner").animate({
                        "height" : $("#CodeRED").height() + ($("#regContent")[0].scrollHeight) + 110
                    },100);
                }else $("#home").css("height", '');
                $('#regContent').css("width", $("#bannerContent").width()).css("height", ($("#regContent")[0].scrollHeight));
                $('#regButtonHeader').css("width", $("#bannerContent").width());
            }
        }
        
        $(window).resize(function() {
            resizeHeader();
        });

        resizeHeader();
    });
});