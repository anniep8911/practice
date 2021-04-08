$(function(){
    var flag= true;

    $('.navWrap menu').on('mouseenter',menu120);
    $('.navWrap menu').on('mouseleave',menu40);
    $('.navWrap menu').on('click',showNav);
    $('.navWrap menu').on('mousemove',moveNav);
    $('.navWrap .prev').on('mouseenter click', prevHandler);
    
    //함수영역
    $(window).on('click',function(eve){
        console.log(eve.pageX,eve.pageY);
        /*
            clientXY : viewport안에서 마우스 좌표
            offsetXY : target되는 요소의 offset을 포함한 마우스좌표
            screenXY : 모니터화면 안에서 마우스 좌표 
            pageXY: 문서 안에서 마우스 좌표 
        */ 
    });
    
    function menu120(){
        $(this).stop().animate({width:120},500);
    }
    function menu40(){
        $(this).stop().animate({width:40},500);
        $('.navWrap nav').stop().animate({marginLeft:-860},500);
        //초기값 변수를 원래 상태로 돌리기위해 작성
        flag=true;
    }
    function showNav(){
        if(flag){
            $('.navWrap nav').stop().animate({marginLeft:0},500);
            $(this).find('menu').stop().css({width:120});
            flag=false;
        }else{  
            $('.navWrap nav').stop().animate({marginLeft:-860},500);
            falg=true;
        }
    }
    function moveNav(eve){
        $('.navWrap').css({top:eve.clientY-60})
    }




    //lightBox 영역
    var ofX=0, ofY=0;

    $('.mnWrap section').on('click',lightbox);
    $('.lightBox .btClose').on('click',closebox);
    $('.lightBox .bt').on('mousemove',pointMove);
    $('.lightBox .prev').on('mouseenter click',prev);
    $('.lightBox .next').on('mouseenter click',next);
    

    //함수영역
    function lightbox(){
        $('.lightBox').fadeIn();
    };
    function closebox(){
        $('.lightBox').fadeOut();
    };
    ofY= $('.lightBox').outerHeight();
    ofX= $('.lightBox').outerWidth();

    function pointMove(eve){
        var posX=(ofX-720)/2;
        var posY=(ofY-480)/2;
        $('.lightBox .point').css({top:eve.clientY-posY-40,left:eve.clientX-posX-40});
    }

});