$(function(){  
//	下拉显示  吸顶条
		$(window).bind("scroll", function () {  
        var sTop = $(window).scrollTop();  
        var beiK=$(".beijing_s").height();
        if (sTop >=beiK) {  
           $('.header').slideUp(500);
           $('.header').css({opacity:.5});
        }
        else{
        	$('.header').slideDown(500);
        	 $('.header').css({opacity:1});
        }  
    });    
    /*
     * *中英切换
     */
    $('.langular_f').mouseenter(function(){
		$('.langular_f p').slideDown(200);
		});
	$('.langular_f').mouseleave(function(){
		$('.langular_f p').slideUp(200);
	});
	/****
	 * *中英跳转
	 ****/
	$('.langular_f p').on('click',function(){
		window.location.href="../AKL_E/index.html";
	})
//	   切换
	$('.huange_ba img').click(function(){
//				$(this).attr('src',$(this).attr('src')=='img/moren.png'?'img/dianji.png':'img/moren.png');
		//下拉到一定高度	
		$('.left_muew li:eq(0)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
		$('.left_muew li:eq(1)').css({"width":"26px","height":"26px","border":"7px solid white","background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
		$('.left_muew li:eq(2)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});		
	})
			
	//首页下跳
	$('.huange_ba img').click(function(){
		$('html,body').animate({scrollTop:$('.guan_yu').offset().top}, 800);
	})
	
	//关于我们下跳
	$('.niuniu_n img').click(function(){
		$('html,body').animate({scrollTop:$('.seva_bac').offset().top}, 800);
		$('.left_muew li:eq(0)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
		$('.left_muew li:eq(2)').css({"width":"26px","height":"26px","border":"7px solid white","background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
		$('.left_muew li:eq(1)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});		
	})	
	
	//公司介绍
	$('.gon_gon img').click(function(){
		$('html,body').animate({scrollTop:$('.fazhan').offset().top}, 800);
	})	
	
	//服务介绍
	$('.fuwu_fwu img').click(function(){
		$('html,body').animate({scrollTop:$('.jishu_zj').offset().top}, 800);
	})	
	
	//技术支持
	$('.ju_aniu img').click(function(){
		$('html,body').animate({scrollTop:$('.move_ji').offset().top}, 800);
	})	
	
	//生产
	$('.sheng_cajng img').click(function(){
		$('html,body').animate({scrollTop:$('.yuns_vc').offset().top}, 800);
	})
	//电商服务
	$('.kfd_xia img').click(function(){
		$('html,body').animate({scrollTop:$('.our_story').offset().top}, 800);
	})
	
	//产品中心
	$('.xia_qyavb img').click(function(){
		$('html,body').animate({scrollTop:$('.didian_hh').offset().top}, 800);
	})
	//供应链服务
	$('.xian_vys img').click(function(){
		$('html,body').animate({scrollTop:$('.mip_ss').offset().top}, 800);
	})
	//公司介绍
	$('.v_avxx img').click(function(){
		$('html,body').animate({scrollTop:$('.ow_chengz').offset().top}, 800);
	})
	//任职要求
	$('.join_go img').click(function(){
		$('html,body').animate({scrollTop:$('.ani_ddf').offset().top}, 800);
	})
	//地图
	$('.dit_tuss img').click(function(){
		$('html,body').animate({scrollTop:$('.jiao_hu').offset().top}, 800);
	})
	//交互中心
	$('.jiaohu_xiaji img').click(function(){
		$('html,body').animate({scrollTop:$('.product_after').offset().top}, 800);
	})
	//售后中心
	$('.shouhou_zonf img').click(function(){
		$('html,body').animate({scrollTop:$('.xinpin_tuijian').offset().top}, 800);
	})
	//右侧列表下滑
	$('.left_muew li:eq(0)').click(function(){
		$('html,body').animate({scrollTop:$('.beijing_s').offset().top}, 800);
		console.log($('.left_muew li:eq(0)'))
		$('.left_muew li:eq(0)').css({"width":"26px","height":"26px","border":"7px solid white"});
		$('.left_muew li:eq(0)').css({"background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
		$('.left_muew li:eq(1)').css({"width":"18px","height":"18px"," background":"#fff","margin":"10px 0","background":"rgba(255,255,255,1)"});
		$('.left_muew li:eq(2)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
	})	
	
	$('.left_muew li:eq(1)').click(function(){
		$('html,body').animate({scrollTop:$('.guan_yu').offset().top}, 800);
		$('.left_muew li:eq(1)').css({"width":"26px","height":"26px","border":"7px solid white"});
		$('.left_muew li:eq(1)').css({"background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
		$('.left_muew li:eq(2)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
		$('.left_muew li:eq(0)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});	
	})	
	
	$('.left_muew li:eq(2)').click(function(){
		$('html,body').animate({scrollTop:$('.seva_bac').offset().top}, 800);
		$('.left_muew li:eq(2)').css({"width":"26px","height":"26px","border":"7px solid white",});
		$('.left_muew li:eq(2)').css({"background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
		$('.left_muew li:eq(1)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
		$('.left_muew li:eq(0)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});	
	})	
	//滚轮事件
	$(window).scroll(function(){
		if($(document).scrollTop()>=0){
			$('.left_muew li:eq(0)').css({"width":"26px","height":"26px","border":"7px solid white"});
			$('.left_muew li:eq(0)').css({"background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
			$('.left_muew li:eq(1)').css({"width":"18px","height":"18px"," background":"#fff","margin":"10px 0","background":"rgba(255,255,255,1)"});
			$('.left_muew li:eq(2)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
		}
		if($(document).scrollTop()>=500){
			$('.left_muew li:eq(1)').css({"width":"26px","height":"26px","border":"7px solid white"});
			$('.left_muew li:eq(1)').css({"background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
			$('.left_muew li:eq(0)').css({"width":"18px","height":"18px"," background":"#fff","margin":"10px 0","background":"rgba(255,255,255,1)"});
			$('.left_muew li:eq(2)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
		}
		if($(document).scrollTop()>=1000){
			$('.left_muew li:eq(2)').css({"width":"26px","height":"26px","border":"7px solid white"});
			$('.left_muew li:eq(2)').css({"background":"rgba(255,255,111,0)","margin":"10px 0 10px -4px"});
			$('.left_muew li:eq(0)').css({"width":"18px","height":"18px"," background":"#fff","margin":"10px 0","background":"rgba(255,255,255,1)"});
			$('.left_muew li:eq(1)').css({"width":"18px","height":"18px"," background":"white","margin":"10px 0","background":"rgba(255,255,255,1)"});
		}
	})
//		关于我们
	$('.huange_ba img').click(function(){
		$('.gy_files').addClass("animated fadeInDown");
		setTimeout(function(){
			$('.gy_files').removeClass("animated fadeInDown");
		},1000)
	})
	//导航移上去下来
	$('.tiaoz_d').on('mouseenter',function(){
		$('.yincag_s').slideDown(200);
	})
	$('.tiaoz_d').on('mouseleave',function(){
		$('.yincag_s').slideUp(200);
	})	
	//点击亚昆商城变色
	$('.yk_tiao').on('click',function(){
		$('.yk_tiao').css({'color':'#0090ec'})
	})
	//点击加入我们跳转
	$('.jia_ruwo span').on('click',function(){
		window.location.href="join_us.html";
	})
//	//职位分布
	$(".job_name").click(function(){
		$(this).next('.job_modile').toggle();
		$(this).next('.job_modile').siblings('.job_modile').hide();
		return false
	})
})
