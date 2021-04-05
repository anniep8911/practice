$(function(){
    var $artG=$('.ct01 .artGroup'),
    $btnPrev=$('.ct01 .btns .btnPrev'),
    $btnNext=$('.ct01 .btns .btnNext'),
    //자동메서드 setInterval()
        autoplay =setInterval(nextArt,1000);
    //setInterval()해제 함수 : clearInterval()
    
    //초기설정
    $artG.css({marginLeft : '-25%'});
    $artG.find('article:last').prependTo($artG);
    $btnPrev.click(function(){
        $artG.animate({
            marginLeft:'0%'
        },{
            duration: 1000,
            easing: 'linear',
            complete: function(){
                $artG.css({marginLeft:'-25%'});
                $artG.find('article:last').prependTo($artG);
            }
        });
        
    });
    $btnNext.click(nextArt);
    $btnNext.mouseenter(function(){
        clearInterval(autoplay);
    });
    $btnNext.mouseleave(function(){
        autoplay = setInterval(nextArt,1000);  
    });
    $btnPrev.mouseenter(function(){
        clearInterval(autoplay);
    });
    $btnPrev.mouseleave(function(){
        autoplay = setInterval(nextArt,1000);  
    });
    
    function nextArt(){
        $artG.animate({marginLeft:'-50%'},1000,'linear',init);
    }

    function init(){
        $artG.find('article:first').appendTo($artG);
        $artG.css({marginLeft:'-25%'});
    }

});