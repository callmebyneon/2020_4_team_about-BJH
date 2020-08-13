$(function () { 
//    window.addEventListener(
//        "keydown", checkKeyPress, false);
//
//    function checkKeyPress(key) {
//        if (key.keyCode == "38") {
//            alert("tsh 'a' dh");
//        }
//    } 
 

  
 $(document).Keyboard(function(e){
     if (e.Keyboard == 37) {
         document.getElementById('keymovesound').play();
         return false;
     }if (e.Keyboard == 39) {
         document.getElementById('keymovesound').play();
         return false
     }if (e.Keyboard == 38) {
         document.getElementById('keymovesound').play();
         return false;
     }if (e.Keyboard == 40) {
         document.getElementById('keymovesound').play();
         return false;
     }if (e.Keyboard == 32) {
         document.getElementById('start').play();
         return false;
    
     }
 }) 
      
 

});
