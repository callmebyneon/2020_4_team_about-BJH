		var pc = document.querySelector('.okja');
        var left_px=0;    //PC 가로축 좌표 marginLeft
		var top_px=0;     //PC 세로축 좌표 marginTop
		var move_d=2;     //PC 이동거리
		var savex_key;    //눌려진 가로키 저장변수
		var savey_key;    //눌려진 세로키 저장변수
		var movex_time;   //가로 setInterval 함수 저장변수
		var movey_time;   //세로 setInterval 함수 저장변수
		var x_on=0;       //가로방향 키보드 눌림 감지
		var y_on=0;       //세로방향 키보드 눌림 감지
		
		
		var br_width=1500; //브라우저 가로크기
		var br_height=750;//브라우저 세로크기
        var pc_width = pc.style.width() - 30;
        var pc_height = pc.style.height() - 360;
		
		/*$(document).on({
            keydown: function(){
                if(event.keyCode==37 || event.keyCode==39){
                    savex_key=event.keyCode;
                    if(x_on!=1){
                        x_on=1;
                        movex_time=setInterval(keyx_move,1);
                    }
                }
                else if(event.keyCode==38 || event.keyCode==40){
                    savey_key=event.keyCode;
                    if(y_on!=1){
                        y_on=1;
                        movey_time=setInterval(keyy_move,1);
                    }
                }
            },
            keyup: function(){
                if(event.keyCode==37 || event.keyCode==39){
                    clearInterval(movex_time);
                    x_on=0;
                    }
                else if(event.keyCode==38 || event.keyCode==40){
                    clearInterval(movey_time);
                    y_on=0;

                }
            }
        });*/
        document.onkeydown = onkey_press;
		document.onkeyup = onkey_clear;

        function onkey_press() {
            if(event.keyCode==37 || event.keyCode==39){
                savex_key=event.keyCode;
                if(x_on!=1){
                    x_on=1;
                    movex_time=setInterval(keyx_move,1);
                }
            }
            else if(event.keyCode==38 || event.keyCode==40){
                savey_key=event.keyCode;
                if(y_on!=1){
                    y_on=1;
                    movey_time=setInterval(keyy_move,1);
                }
            }
        }
        function onkey_clear() {
            if(event.keyCode==37 || event.keyCode==39){
                clearInterval(movex_time);
                x_on=0;
                }
            else if(event.keyCode==38 || event.keyCode==40){
                clearInterval(movey_time);
                y_on=0;

            }
        }
		// 키 눌림 체크 함수,변수에 키값 저장 
		
		
			
		
			
		function keyx_move() {
			if(savex_key==37){
				left_px -= move_d;
				if(left_px < -30){
					left_px = -30;
                }
                
			}
			
			else if(savex_key==39){
				left_px += move_d;
				
				if(left_px>br_width - pc.innerWidth() - 30){
					left_px = br_width - pc.innerWidth() - 30;
				}
                
			}
            pc.css({'margin-left' : left_px+'px'});
		}
		
		function keyy_move(){
			if(savey_key==38){
				top_px -= move_d;
				
				if(top_px < -360){
					top_px = -360;
				}	
			}	
			else if(savey_key==40){
				top_px += move_d;
				if(top_px > br_height - pc.innerHeight() - 360){
					top_px = br_height - pc.innerHeight() - 360;
				}	
			}
            pc.css({'margin-top' : top_px+'px'});
		}

    //게임 시작
	   function start_game(){
            pc.src="src/image/okja.gif";
            document.querySelector('.start-message').style.display="none";
            opst_init();

            x_on=0;
            y_on=0;
           
        }

// 장애물 비행기 초기화
        var opst_1 = document.querySelector('.vill1');
        var opst_2 = document.querySelector('.vill2');
        var opst_3 = document.querySelector('.vill3');
        var opst_4 = document.querySelector('.vill4');
        var opst_5 = document.querySelector('.vill5');
        var opst_6 = document.querySelector('.vill6');

        function opst_init(){
                /*clearTimeout(opst_movex_time);
                clearTimeout(opst_movex_time1);
                clearTimeout(opst_movex_time2);
                clearTimeout(opst_movex_time3);
                clearTimeout(opst_movex_time4);
                clearTimeout(opst_movex_time5);*/
            
                /*opst_top_px = 0;
                opst_top_px1 = 0;
                opst_top_px2 = 0;
                opst_top_px3 = 0;
                opst_top_px4 = 0;
                opst_top_px5 = 0;
                opst_left_px=0;//장애물 비행기 가로축 좌표
                opst_left_px1=0;//장애물 두번째 가로축 좌표
                opst_left_px2=0;
                opst_left_px3=0;
                opst_left_px4=0;
                opst_left_px5=0;*/
            
                opst_1.addClass('villain').delay(10).stop().animate({'marginBottom':410}, 2000);
                opst_2.addClass('villain').stop().delay(900).animate({'marginTop':473}, 3200);
                opst_3.addClass('villain').stop().delay(3000).animate({'marginTop':515}, 3600);
                opst_4.addClass('villain').stop().delay(5000).animate({'marginBottom':500}, 3000);
                opst_5.addClass('villain').stop().delay(7000).animate({'marginTop':428}, 4000);
                opst_6.addClass('villain').stop().delay(10000).animate({'marginBottom':540}, 2800);
            
                /*document.styleSheets[0].rules[1].style.marginTop=opst_top_px+'px';
                document.styleSheets[0].rules[3].style.marginTop=opst_top_px1+'px';
                document.styleSheets[0].rules[4].style.marginTop=opst_top_px2+'px';
                document.styleSheets[0].rules[5].style.marginTop=opst_top_px3+'px';
                document.styleSheets[0].rules[6].style.marginTop=opst_top_px4+'px';
                document.styleSheets[0].rules[8].style.marginTop=opst_top_px5+'px';
                document.styleSheets[0].rules[1].style.marginLeft="0px";
                document.styleSheets[0].rules[3].style.marginLeft="0px";
                document.styleSheets[0].rules[4].style.marginLeft="0px";
                document.styleSheets[0].rules[5].style.marginLeft="0px";
                document.styleSheets[0].rules[6].style.marginLeft="0px";
                document.styleSheets[0].rules[8].style.marginLeft="0px";
                document.styleSheets[0].rules[1].style.left=br_width+"px";
                document.styleSheets[0].rules[3].style.left=br_width+"px";
                document.styleSheets[0].rules[4].style.left=br_width+"px";
                document.styleSheets[0].rules[5].style.left=br_width+"px";
                document.styleSheets[0].rules[6].style.left=br_width+"px";
                document.styleSheets[0].rules[8].style.left=br_width+"px";
                document.styleSheets[0].rules[1].style.display="block";
                document.styleSheets[0].rules[3].style.display="block";
                document.styleSheets[0].rules[4].style.display="block";
                document.styleSheets[0].rules[5].style.display="block";
                document.styleSheets[0].rules[6].style.display="block";
                document.styleSheets[0].rules[8].style.display="block";*/
        }