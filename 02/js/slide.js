$(document).ready(function(){
    var btn01 = $(".pop_img01");
    var btn02 = $(".pop_img02");
    var btn03 = $(".pop_img03");
    btn01.click(function(e){
        e.preventDefault();
        $(".dscrb02").stop().slideUp();
        $(".dscrb03").stop().slideUp();
        $(".dscrb01").stop().slideToggle();
    });
    btn02.click(function(e){
        e.preventDefault();
        $(".dscrb01").stop().slideUp();
        $(".dscrb03").stop().slideUp();
        $(".dscrb02").stop().slideToggle();
    });
    btn03.click(function(e){
        e.preventDefault();
        $(".dscrb01").stop().slideUp();
        $(".dscrb02").stop().slideUp();
        $(".dscrb03").stop().slideToggle();
    });
    
});