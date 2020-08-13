$(function(){
    var wh = $(window).height();
    var sct = $(window).scrollTop();
    
    $(window).on("resize", function(){
        wh = $(window).height();
    });
    
    const roll = $(".artcle2");
    const startLine = $(".roll-start");
    const finalLine = $(".final");
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        var bottom = $(document).innerHeight();
        if(st >= roll.offset().top - wh + 100 &&
           st <= bottom - wh - 100) {
            $(".gradientBox").show();
        } else {
            $(".gradientBox").hide();
        }
        
        var st2 = st + wh/2;        
        if(st2 >= finalLine.offset().top) {
            finalLine.addClass('show');
        } else finalLine.removeClass('show');
    });

    
});