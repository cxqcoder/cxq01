$(
	function() {
		//		轮播
		var mindex = 1;
		$(".pre").hover(function(){
			clearInterval(timer);
		},function(){
			play();
		})
		$(".pre").click(function() {
			hand(mindex);
			mindex--;
			mindex = mindex < 1 ? 3 : mindex;	
			console.log(mindex);

		})
		$(".middle span").hover(function() {
			var i = $(this).index() + 1;
			clearInterval(timer);
			hand(i);
		},function(){
		play();
		})
		$(".next").hover(function(){
			clearInterval(timer);
		},function(){
			play();
		})
		$(".next").click(function() {
			mindex++;
			mindex = mindex > 3 ? 1 : mindex;
			hand(mindex);
		})

		function hand(index) {
			$(".banimg").css("display", "none")
			$(".ban0" + index).css("display", "block");
			$(".banner .middle span").removeClass("now").eq(index - 1).addClass("now");

		}
		//定时播放函数
		function play() {
			timer = setInterval(function() {
				hand(mindex);
				console.log(mindex);
				mindex += 1;
				console.log(mindex);
				mindex = mindex > 3 ? 1 : mindex;
			},10000);
		}
		//调用函数
		play();
		//		产品切换
		var gindex = 0;
		$(".pre1").click(function() {
			gindex--;
			gindex = gindex < 0 ? 5 : gindex;
			change(gindex);

		})
		$(".next1").click(function() {
			gindex++;
			gindex = gindex > 5 ? 0 : gindex;
			change(gindex);
		})
		$(".nbt").click(function() {
			gindex = $(this).index();
			change(gindex);
		})
      //花那些事儿
      var findex = 0;
		$(".pre2").click(function() {
			findex--;
			findex = findex < 0 ? 5 : findex;
			qiehuan(findex);

		})
		$(".next2").click(function() {
			findex++;
			findex = findex > 5 ? 0 : findex;
			qiehuan(findex);
		})
		$(".mbt").click(function() {
			findex = $(this).index();
			qiehuan(findex);
		})
		function change(i) {
			$(".goods .gcontentone").css("display", "none").eq(i).css("display", "block");
			$(".nbt").removeClass("cur").eq(i).addClass("cur");
		}
		function qiehuan(j) {
			$(".goods .gcontenttwo").css("display", "none").eq(j).css("display", "block");
			$(".mbt").removeClass("cur").eq(j).addClass("cur");
		}
		//      业务介绍
		$(".showbtn").hover(function() {
			$(this).addClass("animated").addClass("tada");
		}, function() {
			$(this).removeClass("animated").removeClass("tada");
		})
		$(".ywcenter").hover(function() {
			$(this).addClass("animated").addClass("tada");
		}, function() {
			$(this).removeClass("animated").removeClass("tada");
		})
		var bool = true;
		$(".showbtn").click(function() {
			if(bool) {
				$(this).addClass("chakai");
				$(this).parent().next().slideDown(500);
				bool = !bool;
			} else {
				$(this).removeClass("chakai");
				$(this).parent().next().slideUp(500);
				bool = !bool;
			}

		})
//		团队成员
        var index=0;
       $(".teamchange .next").click(function(){
       	$(".teammove").animate({left:205},500).animate({left:-1100},500,function(){
       		$(this).append($(this).children().first()).css("left","0");
       	})
       	index++;
       	index=index>2?0:index;
       	point(index);
       })
       $(".teamchange .pre").click(function(){
       	  	$(".teammove").prepend($(".teammove").children().last()).css("left","-1100").animate({left:600},0).animate({left:0},500);
            index--;
       	    index=index<0?2:index;
       	    point(index);
       })
       function point(i){
       	$(".s1").eq(i).addClass("now").siblings(".s1").removeClass("now");
       }	
       $(".imgbox").hover(function(){
       	$(this).children(".hyt").css("cursor","pointer").fadeIn(600);
       },function(){
       	$(this).children(".hyt").fadeOut(600);
       })
       $(".dianzhan").click(function(){
       	var num=parseInt($(this).parent().parent().prev().children(".sintrofor").text());
         $(this).parent().parent().prev().children(".sintrofor").find("span").text(num+1);
       })
       $(".dz").hover(function() {
			$(this).addClass("animated").addClass("tada");
		}, function() {
			$(this).removeClass("animated").removeClass("tada");
		})
	}
);