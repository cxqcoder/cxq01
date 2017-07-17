
$( function(){
	 	$(".nav_piece").hover(function(){
	 		$(this).find("ul").stop().slideDown(1000,'elasticOut')
	 	},function(){
	 		$(this).find("ul").stop().slideUp(200);
	 	});
	     $(".y1").click(function(){
	     	  window.open("littlebird.html?thisid="+$(this).index())
	     })
})