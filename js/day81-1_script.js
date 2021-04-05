$(function(){
    var $btnPrv = $('.ct3 .btns .btnPrev'),
        $btnNxt = $('.ct3 .btns .btnNext'),
        $artG = $('.ct3 .artGroup'),
        $h3 = $('ct3 .h3View');

        $btnPrv.click(clkP);
        $btnNxt.click(clkN);

        //초기세팅
        $artG.find('article:last').prependTo($artG);
        $artG.css({marginLeft:'-33.33%'});
        function clkP(){
            $artG.stop().animate({marginLeft:'0%'},{
                duration: 500,
                easing: 'linear',
                complete: function(){
                    $artG.css({marginLeft:'-33.33%'});
                    $artG.find('article:last').prependTo($artG);
                    
            }
        })    
    }
    function clkN(){
        $artG.stop().animate({marginLeft:'-66.66%'},{
            duration:500,
            easing: 'linear',
            complete: function(){
                $artG.css({marginLeft:'-33.33%'});
                $artG.find('article:first').appendTo($artG);
            }
        })
    }
});