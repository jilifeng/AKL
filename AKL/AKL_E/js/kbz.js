$(function() {
	//	下拉显示  吸顶条
	$(window).bind("scroll", function() {
		var sTop = $(window).scrollTop();
		var beiK = $(".beijing_s").height();
		if (sTop >= beiK) {
			$('.header').slideUp(500);
			$('.header').css({ opacity: .5 });
		} else {
			$('.header').slideDown(500);
			$('.header').css({ opacity: 1 });
		}
	});
	//Home点击下一页面
	$('.huange_ba img').click(function() {
		$('html,body').animate({ scrollTop: $('.seva_bac').offset().top }, 800);
	})
	//about_us点击下一页面
	$('.join_go img').click(function() {
		$('html,body').animate({ scrollTop: $('.about_us_two').offset().top }, 800);
	})
	/*Product Center点击下一页面*/
	 $('.xia_qyavb img').click(function() {
		$('html,body').animate({ scrollTop: $('.didian_hh').offset().top }, 800);
	})
	 /*地图点击下一页*/
	 $('.map_dowms img').click(function() {
		$('html,body').animate({ scrollTop: $('.jiao_hu').offset().top }, 800);
	})
	//Online Marketing点击下一页面
	$('.elsce_teng img').click(function() {
		$('html,body').animate({ scrollTop: $('.jishu_zj').offset().top }, 800);
	})
	//Supply Chain Management点击下一页面
    $('.xian_vys img').click(function() {
		$('html,body').animate({ scrollTop: $('.mip_ss').offset().top }, 800);
	})
     /*
     * *中英跳转
     */
    $('.langular_f').mouseenter(function(){
		$('.langular_f p').slideDown(200);
		});
	$('.langular_f').mouseleave(function(){
		$('.langular_f p').slideUp(200);
	});
	/****
    /**
     * 中英切换
     * */
    $('.langular_f p').on('click',function(){
		window.location.href="../AKL_C/index.html";
	})
})