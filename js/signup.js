var suVisible = false;
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
			$("#regContent").css("visibility", "hidden");
			$("#regContent").css("width", '');
			$("#registration").css("box-shadow",'');
			$("#regButtonHeader").css("background", '');
			$("#regButtonHeader").animate({
		    	"width": suWidth
			}, 500, function(){
				$(".bannerText").animate({
			    	"top": ($(window).height() - $("#CodeRED").height() - 140)/2
				}, 500);
			});
		});
	}else{
		suVisible = true;
		suWidth = $("#regButtonHeader").css("width");
		$("#regButtonHeader").css("background", "#C8102E");
		var ptop = ($(window).height() - $("#CodeRED").height() - ($("#regContent")[0].scrollHeight) - 140)/2;
		$(".bannerText").animate({
	    	"top": (ptop > 0) ? ptop : 0
		}, 500, function(){
			$("#regButtonHeader").animate({
		    	"width": $("#bannerContent").width()
			}, 500, function() {
				$("#registration").css("box-shadow","0 0 5px #000");
				$("#regContent").css("width", $("#bannerContent").width()).css("visibility", "visible");
				$("#regContent").animate({
			    	"height": ($("#regContent")[0].scrollHeight)
				}, 500, function(){
					if ($(window).height() < 680){
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