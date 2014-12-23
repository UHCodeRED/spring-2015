var suVisible = false;
var suTop = "";
var suWidth = "";

function toggleSignUpHeader(){
	if (suVisible){
		suVisible = false;
		$("#home").css("height",'');
		$("#banner").css("height",'').css({
            width: $(window).width(),
            height: $(window).height() - 60
        });
		$("#regContent").animate({
			    "height" : 0
		}, 500, function() {
			$("#regContent").css("visibility", "hidden")
			$("#regButtonHeader").animate({
		    	"width": suWidth
			}, 500, function(){
				$(".bannerText").animate({
			    	"top": suTop
				}, 500, function() {
					$(".bannerText").css("top", '');
				});
			});
		});
	}else{
		suVisible = true;
		suTop = $(".bannerText").css("top");
		suWidth = $("#regButtonHeader").css("width");
		var ptop = ($(window).height() - $("#CodeRED").height() - ($("#regContent")[0].scrollHeight) - 120)/2;
		$(".bannerText").animate({
	    	"top": (ptop > 0) ? ptop : 0
		}, 500, function(){
			$("#regButtonHeader").animate({
		    	"width": $("#bannerContent").width()
			}, 500, function() {
				$("#regContent").css("width", $("#bannerContent").width()).css("visibility", "visible");
				$("#regContent").animate({
			    	"height": ($("#regContent")[0].scrollHeight)
				}, 500, function(){
					if ($("#home").height() < 680){
						$("#home").animate({
							"height" : $("#CodeRED").height() + ($("#regContent")[0].scrollHeight) + 110
						},100);
						$(".banner").animate({
							"height" : $("#CodeRED").height() + ($("#regContent")[0].scrollHeight) + 110
						},100);
					}
				});
			});
		});
	}	
}