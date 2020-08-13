$(function () { 
//    window.addEventListener(
//        "keydown", checkKeyPress, false);
//
//    function checkKeyPress(key) {
//        if (key.keyCode == "38") {
//            alert("tsh 'a' dh");
//        }
//    } 
 

  
 $(document).keydown(function(e){
     if (e.keyCode == 37) {
         document.getElementById('keymovesound').play();
         return false;
     }if (e.keyCode == 38) {
         document.getElementById('keymovesound').play();
         return false
     }if (e.keyCode == 39) {
         document.getElementById('keymovesound').play();
         return false;
     }if (e.keyCode == 40) {
         document.getElementById('keymovesound').play();
         return false;
     }if (e.keyCode == 32) {
         document.getElementById('start').play();
         return false;
    
     }
 }) 
      
 

});
