$(function () {
    //장바구니








    $(document).ready(function () {
        // 상품 호버시 장바구니 아이콘(.xline900 ) 클릭시 .itemslist에 appendto 된 li가 추가되는 함수








        $('.xline900').click(function () {

            $('.baskett').addClass('moving');
            //장바구니 가 4개 이상 쌓였을시 350이상이면 스크롤발생 함수
            var itemheigt = $('.itemslist').height();

            if (itemheigt >= 353) {
                $('.items').css('overflow-y', 'scroll');
            }
            //.itemslist에 appendto되는  li + 클레스 + img
            var length = $(".itemslist > li").length + 1;
            $("<li class='kim'><img src='img/ok1/goods/ok1.png' class='kim2'><span>옥자 캐릭터 Bag 15,000원</span><div class='itemxicon'><img src='img/mart/NEW%20x_icon.png' alt=''></div></li>").appendTo(".itemslist");
            $(".right_top_login .bflex span").html("총수량: " + length);
            $('.right_top_login .maketnum').html(length);
            //.itemslist 에 추가되는 li 개수를 읽어 .right_top_login .bflex span에 총수량을 나타낸다.
            $(function () {
                // 장바구니안 상품에 엑스표시 클릭시 없어지며 총수량 감소하는 함수
                $('.itemxicon').click(function () {
                    $(this).parents('li').remove();

                    var length2 = $(".itemslist > li").length;

                    $(".right_top_login .bflex span").html("총수량: " + length2);
                    $('.right_top_login .maketnum').html(length2);
                    if (itemheigt == 0) {
                        $('.items').css('overflow-y', 'hidden');
                    }

                });
            });
        });
        //두번째 상품 코드 동일한데 좀 무식하게 짯습니다 더 간결하게 만드실수 있을거에요 ㅎㅎ
        $('.xline901').click(function () {

            $('.baskett').addClass('moving2');
            var itemheigt = $('.itemslist').height();
            $('.maketnum').html(length);
            if (itemheigt >= 353) {
                $('.items').css('overflow-y', 'scroll');
            }

            var length = $(".itemslist > li").length + 1;
            $("<li class='kim'><img src='img/ok1/goods/ok2.png' class='kim2'><span>옥자 캐릭터 Mug 15,000원</span><div class='itemxicon'><img src='img/mart/NEW%20x_icon.png' alt=''></div></li>").appendTo(".itemslist");
            $(".right_top_login .bflex span").html("총수량: " + length);
            $('.right_top_login .maketnum').html(length);

            $(function () {

                $('.itemxicon').click(function () {

                    var end = $(".right_top_login .bflex span").html("총수량: " + length);
                    $(this).parents('li').remove();

                    var itemheigt = $('.itemslist').height();
                    var length2 = $(".itemslist > li").length;

                    $(".right_top_login .bflex span").html("총수량: " + length2);
                    $('.right_top_login .maketnum').html(length2);

                    if (itemheigt == 0) {
                        $('.items').css('overflow-y', 'hidden');
                    }



                    //             
                });
            });
        });

    });
    //장바구니 클릭하면 makittlist1 열리는거
    $(function () {
        //            $('.makittlist1').hide();
        $('.baskett').click(function () {
            $('.makittlist1').css('right', '400px');
        });

    });


    $(function () {
        //장바구니 xix클릭하면 makittlist1 닫히는거
        $('.xix').click(function () {
            $('.makittlist1').css('right', '0px');
        });

    });




    //돋보기
    $(function () {

        var target = $('.target');
        //1
        var zoom = target.data('zoom');

        $(".submain")
            .on('mousemove', magnify)
            .prepend("<div class='magnifier'></div>")
            .children('.magnifier').css({
                "background": "url('" + target.attr("src") + "') no-repeat",
                // 2
                "background-size": target.width() * zoom + "px " + target.height() * zoom + "px"
            });

        var magnifier = $('.magnifier');

        function magnify(e) {

            // 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
            var mouseX = e.pageX - $(this).offset().left;
            var mouseY = e.pageY - $(this).offset().top;

            // 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
            if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
                magnifier.fadeIn(100);
            } else {
                magnifier.fadeOut(100);
            }

            //돋보기가 존재할 때
            if (magnifier.is(":visible")) {

                // 3
                var rx = -(mouseX * zoom - magnifier.width() / 2);
                var ry = -(mouseY * zoom - magnifier.height() / 2);

                //돋보기를 마우스 위치에 따라 움직인다.
                //돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
                var px = mouseX - magnifier.width() / 2;
                var py = mouseY - magnifier.height() / 2;

                //적용
                magnifier.css({
                    left: px,
                    top: py,
                    backgroundPosition: rx + "px " + ry + "px",

                });
            }
        }
    });






    //장바구니 끝

    // 마우스 터치 슬라이드

    $(function () {
//        $(".flexbox").swipe({
//            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
//                if (direction == "left") {
//                    $(".s1,.ok,.helminth").css('right', '1500px');
//                    $(".next").css('display', 'block');
//                    $(".right").css('display', 'none');
//                    $('.blackwall').animate({
//                        'bottom': '-1020'
//                    });
//                    $('.blackwall2').animate({
//                        'bottom': '-1020'
//                    });
//
//                } else if (direction == "right") {
//                    $(".s1,.ok,.helminth").css('right', '0px');
//                    $(".next").css('display', 'none');
//                    $(".right").css('display', 'block');
//                    threshold: 0
//                    $('.blackwall').animate({
//                        'bottom': '-1020' 
//                    });
//                    $('.blackwall2').animate({
//                        'bottom': '-1020'
//                    });
//                }
//
//            },
//        });
        //end 

        // resize


//        $(window).resize(function () {
//            if ($(window).width() > 1001) {
//                      $(".flexbox").swipe({
//            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
//                if (direction == "left") {
//                $(".s1,.ok,.helminth").css('right', '0px');
//                    
//                }else if (direction == "right") {
//              $(".s1,.ok,.helminth").css('right', '0px');
//                } 
//                
//            }
//        }); 
//
//            } 
//        });






        $("header").load("../common/head.html");
        $("footer").load("../common/foot.html");

        //슬라이드 system



        $('.right').click(function () {
            $('.s1').css('right', '1500px');
            $('.ok').css('right', '1500px');
            $('.helminth').css('right', '1500px');
            $(".right").css('display', 'none');
            $(".next").css('display', 'block');
            $('.blackwall').animate({
                'bottom': '-1020'
            });
            $('.blackwall2').animate({
                'bottom': '-1020'
            });
        });

        $('.next').click(function () {
            $('.s1').css('right', '0px');
            $('.ok').css('right', '0px');
            $('.helminth').css('right', '0px');
            $(".next").css('display', 'none');
            $(".right").css('display', 'block');
        });


        $('.subnavgrup > li').click(function () {
            $('.subnavgrup > li').removeClass();
            $(this).addClass('active');
        });


        $('.subnavgrup > li:nth-child(2)').click(function () {
            $('.ok').show();
            $('.s1,.ok,.helminth').css('right', '0px');
            $('.s1, .helminth').hide();
            $(".next").css('display', 'none');
            $(".right").css('display', 'block');



        });

        $('.subnavgrup > li:nth-child(1)').click(function () {
            $('.s1').show();
            $('.s1,.ok,.helminth').css('right', '0px');
            $('.ok,.helminth').hide();
            $(".next").css('display', 'none');
            $(".right").css('display', 'block');


        });

        $('.subnavgrup > li:nth-child(3)').click(function () {
            $('.helminth').show();
            $('.helminth,.ok,.s1').css('right', '0px');
            $('.ok,.s1').hide();
            $(".right").css('display', 'block');
            $(".next").css('display', 'none');
            $(".right").css('display', 'block');

        });



    });
});