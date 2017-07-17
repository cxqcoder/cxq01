var GLOBLE = GLOBLE || {};
$(function() {
	var mainSlideIndex = 0;
	var mainSlideGoing = false;
	var mainSlideDelay = 0;
	var mainSlideTimer = null;
	$(".wrap_block,.main_wrap,.gaishu_block").css("height", ($(window).height() - 50) + "px");
	$(".gaishu_block").width($(window).width());
	$(window).resize(function() {
		$(".wrap_block,.main_wrap,.gaishu_block").css("height", ($(window).height() - 50) + "px");
		$(".gaishu_block").width($(window).width());
		if(mainSlideIndex) {
			if(GLOBLE.resizeTimer) {
				//				clearInterval(GLOBLE.resizeTimer);
			}
			GLOBLE.resizeTimer = setTimeout(function() {
				mainSlideGoing = true;
				mainSlideGo();
				gaishuMove();

			}, 200)
		}
	});
	doenterAnimate();

	function doenterAnimate() {
		GLOBLE.entertimer = setTimeout(function() {
			$(".enter_content").animate({
				"top": "35%"
			}, 1000)
			$(".enter_content .wel_animate").each(function(index, element) {
				var $this = $(this);
				setTimeout(function() {
					$this.show().addClass("animated fadeInUp");
				}, 200 * (index + 1))
			});
			setTimeout(function() {
				$(".enter_wrap").slideUp(600, "easeOutStrong", function() {
					GLOBLE.welcomeOver = true;
				}).hide(500);
			}, 2500);
		}, 4000)
	} //函数结束

	var scrollFuc = function(e) {
		e = e || window.event;
		if(e.wheelDelta) {
			if(e.wheelDelta > 0) {
				mainSlideUp();
				console.log("向上滚")
			}
			if(e.wheelDelta < 0) {
				!!GLOBLE.welcomeOver ? mainSlideDown() : '';
			}
		} else if(e.detail) {
			if(e.detail > 0) {
				!!GLOBLE.welcomeOver ? mainSlideDown() : '';
			}
			if(e.detail < 0) {
				mainSlideUp();
			}
		}
	}
	if(document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFuc, false);
	}
	window.onmousewheel = document.onmousewheel = scrollFuc;
	//向下滚动
	function mainSlideDown() {
		if(mainSlideDelay < 1) { //这个判断用于检测第一次鼠标滚动，让第二次鼠标滚动的时候，再执行页面动效
			clearInterval(mainSlideTimer);
			mainSlideTimer = setTimeout(function() {
				mainSlideDelay++;
			}, 100)

		} else if(!mainSlideGoing) {
			mainSlideGoing = true;
			mainSlideIndex++;
			if(mainSlideIndex > $(".wrap_block").length - 2) {
				mainSlideIndex = $(".wrap_block").length - 2;
			}
			mainSlideGo();

		}
	}

	//向上滚动
	function mainSlideUp() {
		if(mainSlideDelay < 1) {
			clearInterval(mainSlideTimer);
			mainSlideTimer = setTimeout(function() {
				mainSlideDelay++;
			}, 100)

		} else if(!mainSlideGoing) {
			mainSlideGoing = true;
			mainSlideIndex--;
			if(mainSlideIndex < 0) {
				mainSlideIndex = 0;
			}
			mainSlideGo();
		}
	}

	//滚动方法
	function mainSlideGo() {
		$(".main_slide").animate({
			"top": "-" + $(".wrap_block").height() * mainSlideIndex + "px"
		}, 600, "easeBothStrong", function() {
			mainSlideGoing = false;
			mainSlideDelay = 0;
			if(mainSlideIndex == 0) {

			} else if(mainSlideIndex == 4) {
				$(".nav_piece").removeClass("now").eq(mainSlideIndex - 1).addClass("now");
				$(".nav_piece").eq(mainSlideIndex).addClass("now");
			} else {
				$(".nav_piece").removeClass("now").eq(mainSlideIndex - 1).addClass("now");
			}
		});
	}
	//	点击导航
	$(".nav_piece h1").click(function() {
			var nindex = $(this).parent().index(".nav_piece");
			if(nindex == 4) {
				nindex = 3;
			}
			if(nindex != 5) {
				mainSlideIndex = nindex + 1;
				mainSlideGo();
			}
		})
	   var anchors = $(".nav_piece h1");
	   var tindex;
	 if(tindex = getUrlParams('thisid')){
        tindex!=-1 && ($(".enter_wrap").slideUp(0));
        anchors.eq(tindex).trigger("click");
        
    }
	function getUrlParams(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)
         return  r[2];
     else 
         return "";
    }
	 $(".enter_wrap").on("dblclick",function(){
        $(this).slideUp(500)
    })
		//	欢迎页箭头
	$(".welcom_content .donext").click(function() {
			mainSlideIndex = 1;
			mainSlideGo();
		})
		//概述轮播
	$(".gaishu_right").mouseenter(function() { //当鼠标指针穿过的时候执行函数
		$(this).removeClass("nohover");
	})
	var gindex = 0;
	$(".gaishu_left").css("opacity", 0.3);
	if(gindex == 0 || gindex == 2) {
		$(".gaishu_left").css("opacity", 0.3);
	}
	$(".gaishu_left").click(function() {
		gindex--;
		gindex = gindex < 0 ? 0 : gindex;
		gaishuMove();
		if(gindex == 0) {
			$(".gaishu_left").css("opacity", 0.3);
		}
	})
	$(".gaishu_right").click(function() {
		gindex++;
		gindex = gindex > 2 ? 2 : gindex;
		gaishuMove();
		if(gindex == 2) {
			$(".gaishu_right").css("opacity", 0.3);
		}
	})

	function gaishuMove() {
		$(".gaishu_left, .gaishu_right").css("opacity", 0.3);
		$(".gaishu_slider").animate({
			"left": "-" + $(".gaishu_block").width() * gindex + "px"
		}, 600, function() {
			$(".gaishu_left, .gaishu_right").css("opacity", 1);
		});
	}
	//呼吸灯
	setInterval(function() {
			$(".jiazhi_shineimg").fadeIn(1000, function() {
				$(".jiazhi_shineimg").delay(100).fadeOut(400);
			})
		}, 1000)
		//小鸟云
	$(".yunmove_btn_right").click(function() {
		var $this = $(this);
		$(".yunmove_btn.now").animate({
			"left": "78px"
		}, 100, function() {
			$(".yunmove_btn.now").removeClass('now');
			$this.find(".yunmove_btn").animate({
				"left": "0px"
			}, 400).addClass("now");
		});
		$(".yun_slider").animate({
			"left": "-910px"
		}, 600);
	});
	$(".yunmove_btn_left").click(function() {
		$This = $(this);
		$(".yunmove_btn.now").animate({
			"left": "-78px"
		}, 100, function() {
			$(".yunmove_btn.now").removeClass("now");
			$This.find(".yunmove_btn").animate({
				"left": "0px"
			}, 400).addClass("now");
		});

		$(".yun_slider").animate({
			"left": "0px"
		}, 600)
	})
	var sindex=0;
	var story="从前有座山，山里有个庙，庙里有个老和尚，给小和尚讲故事。故事讲的是：别急，往下听";
	
		setInterval(function(){
			var str=story.substring(0,sindex++);
			$(".story").text(str);
		    sindex=sindex>story.length?0:sindex;
		},600);
		
	
})