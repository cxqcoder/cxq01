var titleLsitFisrsOn = true;
$(".title_list .pen").click(function() {
	if(titleLsitFisrsOn) {
		$(".title_list").animate({
			"width": "100px",
			backgroundPositionX: "-680px"
		}, 0, function() {
			$(".title_list").animate({
					"width": "780px",
					backgroundPositionX: "-320px"
				},
				1300, "easeOutStrong");
		});
	}
})
var likeTipsArr = ["娘娘威武", "皇上万岁，万万岁", "爱死你啦、MUA~", "再点一下试试~"];
var num = 20;
var ifLikebtnClicked = false;
$(".likeimg").click(function() {
	if(!ifLikebtnClicked) {
		ifLikebtnClicked = true;
		$(".like_tips").text(likeTipsArr[Math.floor(Math.random() * likeTipsArr.length)]);
		doMove();
		$(".likenum").text("喜欢（" + (num + 1) + "）");
		console.log("111");

	} else if(ifLikebtnClicked && $(".like_tips").text() == "再点一下试试~") {
		$(".like_tips").text("喊你点就点嗦~傻");
		doMove();
		console.log("111");
	} else {
		$(".like_tips").text("皇上，你已经翻过牌了！");
		doMove();
	}

	//提示框运动方法，如果要写相关其他dom操作，可以在方法中相应位置添加
	function doMove() {
		$(".like_tips").animate({
			"top": "0",
			opacity: "1"
		}, 600, "elasticOut", function() {
			$(".like_tips").delay(1000).animate({
				"left": "-500px",
				opacity: "0"
			}, 600, "backIn", function() {
				$(".like_tips").animate({
					"top": "379",
					"left": "258px",
					opacity: "0"
				}, 0);
				$(".likeimg").addClass("likeclicked");
			});
		});
	}

})