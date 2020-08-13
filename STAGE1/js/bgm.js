//   -- 폴더 안에 bgm.mp3가 있어야함 bgm말고 다른 MP3넣어주세요

	var audio = new Audio('src/sound/bgm.mp3');	

    audio.oncanplay = function(){
       if(document.getElementById("onoff").checked) this.play();   
	
    }
//-- 해당 인풋 CHK 클릭시 HTML 자체적인 컨트롤러에서 PLAY 실행.

function myfunction(el) {
    if(el.checked) {
		
       //audio.load(); // *처음부터 재생
        
		audio.volume = 1;
		audio.play();   // *pause에서부터 이어서 재생
		
    } 
    else {
        audio.pause();
    } 
}  
    
    // 다시누르면  정지     
    // 해당 구현은 INPUT에만 해당함

 


//엔터 start하면 바로 mainbgm play
 $(document).keydown(function(e){
  if (e.keyCode == 13) {  
       $(".onoff").trigger('click');
       audio.volume = 0.2;			// 사운드 볼륨 조절
     }
 });


//엔터 = 13
//스페이스바 = 32
//←(중간) = 37
//↑(중간) = 38
//→(중간) = 39
//↓(중간) = 40
 