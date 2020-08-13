//window.onbeforeunload = function() {window.scrollTo(0,0);}
////load시 맨위로////
$(document).ready(function() {
       $(document).scrollTop(0);
});

//////////////////// 헤더,푸터 로드 //////////////////

        $(function(){
          $("header").load("head.html");
          $("footer").load("foot.html");
			
			new WOW().init();
        
        });

////////////////////////////////////////////////////		



//---------------설국열차---------------//
$(document).ready(function() {
    $(window).scroll( function(){
		    var Snowpiercer = $(".Snowpiercer").offset().top;	//설국열차 박스 탑값
            var bottom_of_window = $(window).scrollTop();	//윈도우 스크롤
			
			$('.container').stop().animate({opacity:"1"});
			$('.hideme').addClass('SHOWME');

			console.log("시작");
			console.log("★설국열차.offset().top : " + $('.Snowpiercer').offset().top);	//430
			console.log("$(window).scrollTop() : " +  bottom_of_window);
			console.log("끝");
		
            if( bottom_of_window <= (Snowpiercer-230)){
				// 스노우 박스(200) 사라짐
               	$('.Snow-txt').stop().animate({opacity:"0"});
				$('.Snow-img').stop().animate({opacity:"0"});
            }
		
			if( bottom_of_window >= (Snowpiercer-200) &&  bottom_of_window <= (Snowpiercer+100) ){   
				//내 스크롤값이 스노우 박스(230)보다 크거나 &&  스노우 박스(530)보다 작을때 나타나라
				
				console.log("나타났다!");
                $('.Snow-txt').stop().fadeIn().animate({opacity:"1", top:"-80px"});
				$('.container').stop().animate({opacity:"0"});

            } else if ( bottom_of_window >= (Snowpiercer+200) ){ 
				//스노우 박스(630(텍스트 사라짐)
				$('.Snow-img').stop().fadeIn().animate({opacity:"1"});
				$('.Snow-txt').stop().animate({opacity:"0"},900).fadeOut();
				return false
			}
    });
});	

//----------------옥자---------------//
$(document).ready(function() {
    $(window).scroll( function(){

			var OKJA = $(".OKJA").offset().top;					//옥자 박스 탑값
            var bottom_of_window = $(window).scrollTop();	//윈도우 스크롤

//			console.log("시작");
//			console.log("★옥자.offset().top : " + $('.OKJA').offset().top);	//2680
//			console.log("$(window).scrollTop() : " + $(window).scrollTop());
//			console.log("끝");			

            if( bottom_of_window <= (OKJA-180) ){
				// 옥자 박스(2500) 사라짐
                $('.OKJA-txt').stop().animate({opacity:"0"});
				$('.OKJA-txt').stop().animate({opacity:"0"});
            }
			if( bottom_of_window >= (OKJA-200) &&  bottom_of_window <= (OKJA+100)){
				//내 스크롤값이 옥자 박스(2480)보다 크거나 &&  스노우 박스(2780)보다 작을때 나타나라
				console.log("나타났다!");
                $('.OKJA-txt').stop().fadeIn().animate({opacity:"1", top:"-60px"});
              	
            } else if ( bottom_of_window >= (OKJA+110) ){
				//옥자 박스(2790(텍스트 사라짐)
				$('.OKJA-img').stop().fadeIn().animate({opacity:"1"},200);
				$('.OKJA-txt').stop().animate({opacity:"0"},900).fadeOut();
				return false
			}
    });
	return false
});	

//-------------------기생충---------------//
$(document).ready(function() {
    $(window).scroll( function(){

			var PARASITE = $(".PARASITE").offset().top;			//기생충 박스 탑값
            var bottom_of_window = $(window).scrollTop();	//윈도우 스크롤

//			console.log("시작");
//			console.log("★기생충.offset().top : " + $('.PARASITE').offset().top); //4730
//			console.log("$(window).scrollTop() : " + $(window).scrollTop());
//			console.log("끝");

            if( bottom_of_window <= (PARASITE-450)  ){
				// 기생충 박스(4280) 사라짐
                $('.PARA-txt').stop().animate({opacity:"0"});
				$('.PARA-txt').stop().animate({opacity:"0"});
            }
			if( bottom_of_window >= (PARASITE-430) &&  bottom_of_window <= (PARASITE+70) ){
				//내 스크롤값이 기생충 박스(4300)보다 크거나 &&  기생충 박스(4800)보다 작을때 나타나라
                $('.PARA-txt').stop().fadeIn().animate({opacity:"1", top:"-100px"});
              	
            } else if ( bottom_of_window >= (PARASITE+80)){
				//기생충 박스(4810(텍스트 사라짐)
				$('.PARA-img').stop().fadeIn(400).animate({opacity:"1"},300);
				$('.PARA-txt').stop().animate({opacity:"0"},1000).fadeOut();
				return false
			}
       
    });
});	
//bottom_of_window >= PARASITE && bottom_of_window <= PARASITE+100
//윈도우 스크롤이 설국열차보다탑(맨위값)보다 크고, 내 스크롤이 설국열차탑값보다 작을때 그 사이 (+100) 사이즈가 되면 나타나라.
//윈도우 스크롤이 설국열차탑값 300 보다 크면 사라지게하라.
// 

/*------------------------------------------------------------------*/
/*  Mouse Whell		*/

$(function() {
	$(window).scroll( function() {
		if ($(this).scrollTop() >= 0 && $(this).scrollTop() <= 100  ) {
			$('#mouse').fadeIn();
		} else {
			$('#mouse').fadeOut(300);
		}
	});
});

/*------------------------------------------------------------------*/
/*  현재 스크롤바의 위치값을 반환합니다		*/

//	$(function() {
//		$(window).scroll(function() {
//			var scroll = $(window).scrollTop(); 	
//
//		});	
//	});		

/*------------------------------------------------------------------*/
/* Scroll TOP		*/

//	$(window).scroll(function () {
//		var height = $(document).scrollTop();
//		log(height);
//	
//	});
//	
//	function log(str){
//		$('#log').text(str);
//	}

/*------------------------------------------------------------------*/
/* DOWN button		*/

//$(function() {
//	$('.DOWN').fadeIn();
//	$(window).scroll( function() {
//		if ($(this).scrollTop() >= 0 ) {
//			$('.DOWN').fadeIn();
//			$('.UP').hide();
//		} else {
//			$('.DOWN').hide();
//		}
//	});
//
//	$('.DOWN').click( function() {
//		$('html, body').stop().animate({scrollTop : 9999}, 1000);
//		return false;
//	});

/*------------------------------------------------------------------*/
/* TOP button		*/

//	$(window).scroll( function() {
//		if ($(window).scrollTop()+1000  > $("footer").offset().top ) {
//			$('.DOWN .down').fadeOut();
//			$('.UP').show();
//        } else {
//			$('.UP').hide();
//			$('.DOWN .down').fadeIn();
//		}
//	});
//
//	$('.UP').click( function() {
//		$('html, body').stop().animate({scrollTop : 0}, 1000)
//		return false;
//	});
//});



//document.getElementById("hero").style.backgroundImage = "url('run_left.gif')"; // 이미지 변경