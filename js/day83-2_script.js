//day83-2_script.js
$(function(){
    //barney navgation
    $(window).on('click', function(evt){
        //console.log(evt);
        /*
        clientXY : viewport 안에서 마우스 좌표
        offsetXY : target되는 요소의 offset을 포함한 마우스 좌표
        screenXY : 모니터화면 안에서 마우스 좌표
        pageXY : 문서안에서 마우스 좌표*/
    });
    
    var flag = true;
    $('.navWrap menu').on('mouseenter', menu120);
    $('.navWrap').on('mouseleave', menu40);
    $('.navWrap menu').on('click', showNav);
    $('.navWrap menu').on('mousemove', moveNav);
    function menu120(){
        $(this).stop().animate({width:120});
    }
    function menu40(){
        $('.navWrap menu').stop().animate({width:40});
        $('.navWrap nav').stop().animate({marginLeft : -860});
        flag=true;
    }
    function showNav(){
        if(flag){
            $('.navWrap nav').stop().animate({marginLeft : 0});
            flag=false;
        }else{
            $('.navWrap nav').stop().animate({marginLeft : -860});
            flag=true;
        }
    }
    function moveNav(evt){
        $('.navWrap').css({top:evt.clientY-60});
    }
    /**********************************************/
    //light box
    var offX = 0,
        offY = 0;
    $('.navWrap .image').on('click', lightbox);
    $('.lightBox .btClose').on('click', closebox);
    $('.lightBox .bt').on('mousemove', pointMove);
    $('.lightBox .prev').on('mouseenter click')
    $('.lightBox .next').on('mouseenter click')
    function lightbox(){
        $('.lightBox').fadeIn()
        //교재 227p, 230p
        offX = $('.lightBox').outerWidth();
        offY = $('.lightBox').outerHeight();
    }
    function closebox(){
        $('.lightBox').fadeOut()
    }
    var posX = 0,
        posY = 0;
    function pointMove(evt){
        console.log(offX, offY);
        posX = (offX-720)/2;
        posY = (offY-480)/2;
        $('.lightBox .point').css({
            top: evt.clientY-posY-40,
            left: evt.clientX-posX-40
        });
    }
});
















