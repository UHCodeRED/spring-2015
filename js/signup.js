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
		var ptop = ($(window).height() - $("#CodeRED").height() - ($("#regContent")[0].scrollHeight) - 120)/2;
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

var schools = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  limit: 10,
  prefetch: {
    // url points to a json file that contains an array of school names, see
    // https://github.com/twitter/typeahead.js/blob/gh-pages/data/schools.json
    url: './js/unis.json',
    // the json file contains an array of strings, but the Bloodhound
    // suggestion engine expects JavaScript objects so this converts all of
    // those strings
    filter: function(list) {
      return $.map(list, function(school) { return { name: school }; });
    }
  }
});
 
// kicks off the loading/processing of `local` and `prefetch`
schools.initialize();
 
// passing in `null` for the `options` arguments will result in the default
// options being used
$('#prefetch .typeahead').typeahead(null, {
  name: 'schools',
  displayKey: 'name',
  // `ttAdapter` wraps the suggestion engine in an adapter that
  // is compatible with the typeahead jQuery plugin
  source: schools.ttAdapter()
});