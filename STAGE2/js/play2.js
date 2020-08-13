$(function(){
// START //

/* 변수 저장 */
var pc = $("#pc");                  //.okja 플레이 캐릭터(주인공)
var left_px = pc.position().left;   //PC 가로축 좌표 left
var top_px = pc.position().top;     //PC 세로축 좌표 top
var villain = $('.vill');           //악당들

var move_d = 1;                     //PC 이동거리
var savex_key;                      //눌려진 가로키 저장변수
var savey_key;                      //눌려진 세로키 저장변수

var movex_timeId = 0;               //가로 setInterval 함수 저장변수
var movey_timeId = 0;               //세로 setInterval 함수 저장변수
var x_on = 0;                       //가로방향 키보드 눌림 감지
var y_on = 0;                       //세로방향 키보드 눌림 감지

var br_width = $(".game").innerWidth();     //게임 창 가로크기
var br_height = $(".game").innerHeight();   //게임 창 세로크기
var pc_width = pc.innerWidth();             //주인공 캐릭터 가로크기
var pc_height = pc.innerHeight();           //주인공 캐릭터 세로크기
/* // 변수 저장 */


function onkey_press(event) {
    // 이전 키값과 다를 때만 이미지 변경
    // 대각선 이동 불가능
    // console.log("x방향 : "+savex_key+", y방향 : "+savey_key);
    if(event.keyCode==37 || event.keyCode==39){
        savey_key = 0;
        event.preventDefault();
        if(event.keyCode==37 && savex_key != 37) {
            pc.attr("src", "img/run-back.gif");
        }
        if(event.keyCode==39 && savex_key != 39) {
            pc.attr("src", "img/run.gif");
        }
        
        savex_key = event.keyCode;
        if(x_on != 1){
            x_on=1;
            movex_timeId = setInterval(keyx_move, 2);
        }
    }
    else if(event.keyCode==38 || event.keyCode==40){
        savex_key = 0;
        event.preventDefault();
        if(event.keyCode==38 && savey_key != 38) {
            pc.attr("src", "img/back.gif");
        }
        if(event.keyCode==40 && savey_key != 40) {
            pc.attr("src", "img/front.gif");
        }
        
        savey_key = event.keyCode;
        if(y_on!=1){
            y_on=1;
            movey_timeId = setInterval(keyy_move, 2);
         
        }
    }
}
function onkey_clear(event) {
    if(event.keyCode==37 || event.keyCode==39){
        event.preventDefault();
        clearInterval(movex_timeId);
        x_on=0;
    }
    else if(event.keyCode==38 || event.keyCode==40){
        event.preventDefault();
        clearInterval(movey_timeId);
        y_on=0;

    }
}
// 키 눌림 체크 함수,변수에 키값 저장
function keyx_move() {
    if(savex_key == 37){
        left_px -= move_d;
        if(left_px < 0){
            left_px = 0;
        } 

    } else if(savex_key == 39){
        left_px += move_d;
        
        /**GAME CLEAR */
        if(left_px == br_width - pc_width - 10){
            pc.attr("src", "img/hurt.gif");
            document.getElementById('success').play();
            $('.clear-message').show();
//            alert('GAME CLEAR');
        }
        
        if(left_px > br_width - pc_width){
            left_px = br_width - pc_width;
        }

    }
    pc.css('left', left_px);

}

function keyy_move(){
    if(savey_key == 38){
        top_px -= move_d;

        if(top_px < 200){
            top_px = 200;
        } 
    } else if(savey_key == 40){
        top_px += move_d;
        if(top_px >400){
            top_px = 400;
        }
        
    }if(top_px > br_height - pc_height){
            top_px = br_height - pc_height;
        }	
    pc.css('top', top_px);

}
    


// 적 오브젝트 움직임
function vill_init2(){
    
    var v_pos = [];
    var v_top = [];
    villain.each(function(){
        var t = $(this).position();
        v_pos.push(t.left);
    });
    
    var play_time = setInterval(function() {
        left_px = pc.position().left;
        for(var i = 0; i < villain.length; i++){
            if(left_px >= v_pos[i] - pc_width && left_px <= v_pos[i] + pc_width){
                if(i == 0 || i == 3 || i == 5){
                    villain.eq(i).attr("src", "img/villain_"+i+"_b.gif");
                    villain.eq(i).stop().animate({bottom:br_height/2},60);
                } else {
                    villain.eq(i).attr("src", "img/villain_"+i+"_f.gif");
                    villain.eq(i).stop().animate({top:br_height/2},60);
                }
                
            } else {
                if(i == 0 || i == 3 || i == 5){
                    villain.eq(i).attr("src", "img/villain_"+i+"_f.gif");
                    villain.eq(i).stop().animate({bottom:-76},50);
                } else {
                    villain.eq(i).attr("src", "img/villain_"+i+"_b.gif");
                    villain.eq(i).stop().animate({top:-76},50);
                }
            }
        }
        
        /**충돌 판정 GAME OVER */
        top_px = pc.position().top;
        var v1_top = $(".v1").position().top,
            v2_top = $(".v2").position().top,
            v3_top = $(".v3").position().top,
            v4_top = $(".v4").position().top,
            v5_top = $(".v5").position().top,
            v6_top = $(".v6").position().top;
        v_top = [v1_top, v2_top, v3_top, v4_top, v5_top, v6_top];
        for(var j = 0; j < 6; j++){
            if(top_px < v_top[j]+66 &&
               top_px+pc_height - 10 > v_top[j] &&
              left_px < v_pos[j]+50 &&
              left_px+pc_width - 10 > v_pos[j]){
                
                game_over();
                clearTimeout(play_time);
                
            }
        }
    }, 10);
}
    
function game_over() {
   $(document).off("keydown");
     move_d = 0;  
//    clearTimeout(play_time);
//    clearInterval(movex_time);
//    clearInterval(movey_time);
    x_on=1;
    y_on=1;
    
    villain.stop();
    pc.attr("src", "img/gameover.gif");
    $('.end-message').show();
    document.getElementById('gameover').play();
}

$(document).on({
    keydown: function(event){
        if(event.keyCode >= 32 && event.keyCode <= 40){
            event.preventDefault();
        }
        onkey_press(event);
    },
    keyup: function(event){
        onkey_clear(event);
        
        /* GAME START / SPACE BAR 눌림 */
        if (event.keyCode == 32) {
            $(".howtoplay").hide();
            $('.start-message').hide();
            pc.attr("src", "img/run.gif");
            vill_init2();

            x_on=0;
            y_on=0;
        }
    }
});

    
// END //
    
    
});