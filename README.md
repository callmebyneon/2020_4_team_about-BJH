---
duration: ''
name: 'ABOUT__봉준호'
description: ''
feature: ''
---


### 간단 설명
- 자바스크립트(+ 제이쿼리)를 이용하여 어느정도의 게임을 만들 수 있을까?에 대한 호기심
- 메인 페이지의 게임을 플레이 할 수 있는 것을 1차 목표로 함
- 서브 페이지는 관련된 내용들을 소개하는 페이지와 가상의 브랜드의 커뮤니티 페이지, 파생 상품들
- ** 전체 제작 기간 (6~7주) + 수정 사항 업데이트

### 참고 페이지
- [(게임 참고 페이지)](http://izerocom2.cafe24.com/game.html)
- [FODI : Festival Of Dangerous Ideas](https://festivalofdangerousideas.com)

***

## 파일 미리보기
_서브페이지 폴더_
- 📁 01
    - 📁 css / img / js
    - 📄 who_is_he.html
- 📁 02
    - 📁 css / img / js
    - 📄 filmography.html
- 📁 03
    - 📁 css / img / js
    - 📄 character.html
- 📁 04
    - 📁 css / img / js
    - 📄 comunity.html
- 📁 05
    - 📁 css / img / js
    - 📄 goods.html
- 📁 06 🙋‍♂️
    - 📁 css / img / js
    - 📄 aboutus.html
_메인 게임 스테이지_
- 📁 STAGE1
    - 📁 css/ img/ js/ soundfx
    - 📄 STAGE1.html
- 📁 STAGE2 🙋‍♂️
    - 📁 css/ img/ js/ sound/ soundfx
    - 📄 STAGE2.html
- 📁 STAGE3
    - 📁 css/ img/ js/ sounds
    - 📄 STAGE3.html
    - 📄 STAGE3_cnt.html
    - 📄 STAGE3_l.html
    - 📄 STAGE3_m.html
    - 📄 STAGE3_s.html
- 📁 common
    - 📁 css
        - 🅰 (font files)
        - 📄 animate.css
        - 📄 basic.css
    - 📁 img
        - 📷 (images)
    - 📁 js
        - 📄 jquery-3.4.1.min.js
        - 📄 prefixfree.min.js
        - 📄 wow.min.js
    - 📄 foot.html
    - 📄 head.html
- 📄 index.html


# 👀 Self Code-review

## 💬 가장 아쉬운 점, 고민했던 점
👉 코드+파일 정리 필요함
+ JavaScript를 더 공부하고 만들었으면 덜 막막했을 것 같다
+ 의사소통이 생각보다 너무 부족하다
+ ❔ 협업은 어떻게 해야 잘 할 수 있을까?
+ ❔ (css나 js, 파일 정리 규칙 같이) 작성 규칙들을 이용해 어디까지 실시간으로 정리가 될 수 있는가??   
👉 오류를 고치고 프로젝트를 마무리하면서 코드를 정리하는 시간이 필요하다
+ 게임을 만드는 과정에서 배울 수 있는게 많았지만 역시 짧은 시간 내에 할 프로젝트는 아닌 것 같다 💭

***

## (직접) 작성한 코드들 리뷰

### 📁 STAGE2 - ([STAGE2 바로가기](https://user809-git.github.io/portfolioA/STAGE2/STAGE2.html))
- **화면 가로사이즈 901px이상일 때만 게임 플레이 가능*
- jQuery 사용
- 고민들
    - 게임의 각 기능별 function을 잘 나누고 만들어야 한다.
    - 플레이 캐릭터와 악당들, 길이 아닌 곳들을 데이터로 가져와서 움직임에 따라 반응을 하도록 한다.
    - 시간 관계상 간단한 움직임으로 게임을 즐길 수 있도록 해야 했다.
    - 게임의 진행 단계, 행동 방향들, 클리어와 게임 오버의 기준을 정하고 어떻게 움직일지를 생각해서 그대로 반응하도록 만든다.
- 🤔 사실 작동만 하는 코드라는 생각이 든다.

#### 1. 변수들과 게임 속 악당 오브젝트 움직임 👇
```js
// .okja 플레이 캐릭터(주인공, pc)
var pc = $("#pc");
// pc의 가로축 좌표(left), 세로축 좌표(top)
var left_px = pc.position().left;   
var top_px = pc.position().top;
// 주인공 캐릭터(pc) 가로크기
var pc_width = 152;
var pc_height = 120;

// 악당들
var villain = $('.vill');

// pc 이동거리 지정
var move_d = 1;

// 눌려진 가로,(x) 세로 (y)키 저장변수
var savex_key;
var savey_key;

// 가로(x), 세로(y) setInterval 함수 저장변수
var movex_timeId = 0;
var movey_timeId = 0;
// 가로(x), 세로(y)방향 키보드 눌림 감지
var x_on = 0;
var y_on = 0

// 반응형 대비 게임 창 가로크기
var br_width = $(".game").innerWidth();
var br_height = $(".game").innerHeight();



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
            // pc가 각 빌런들의 위치를 기준으로 각자의 (left값)범위 안에 들어왔을 떄 pc를 향하도록
            // 빌런들이 pc를 완벽하게 따라오는 방식은 아니라서 직진만 하지 않는다면 빌런을 피하기가 쉽다
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
        
        /**클리어 판정 GAME CLEAR */
        if (left_px >= br_width - pc_width - 10) {
            game_clear();
            clearTimeout(play_time);
        }
    }, 10);
}
```

#### 2. 방향 키 입력에 따른 pc 이미지 교체하기 👇
- 키가 바뀔 때 마다 gif파일을 불러오면 키가 계속 눌려있을 떄는 gif 파일의 첫번쨰 이미지만 보인다.   
-> gif파일로서의 메리트가 사라져 버렸다.
- 그래서 입력된 키의 값이 바뀔 떄만 이미지 src를 변경하도록 함
- 그 결과 두 개의 키 값을 한꺼번에 받지 못해 대각선으로 움직이지 못하게 되어 버렸다.
- 움직이는 gif vs 스프라이트 이미지?
```js
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
```

