//     回到顶部
//返回顶部效果（判断是否在顶部以隐藏显示按钮）
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#stop').fadeIn();
		} else {
			$('#stop').fadeOut(0);
		}
	});
    $(".fixed_contactus").click(function(){
    	window.location.href="contact.html";
    })
	// 点击返回顶部滚动
	$('#s_top').click(function () {
		
		$(this).parent().animate({"bottom":1000,"opacity":0},400,function(){
			$('#stop').css("opacity",1).fadeOut(0).css("bottom",200);
		});
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});