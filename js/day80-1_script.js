$(function(){
    var $btnPrev= $('.ct2 .btns button:first'),
        $btnNext= $('.ct2 .btns button:last'),
        $artG = $('.ct2 .artGroup'),
        setInt = setInterval(next,3000);

        $artG.find('article:last').prependTo($artG);
        $artG.find('article:last').prependTo($artG);
        $artG.css({marginLeft:'-30%'});
        
        //핸들러함수 (handler function)
        $btnPrev.click(prev);
        $btnNext.click(next);
        
        function prev(){
            $artG.stop().animate({marginLeft:'0%'},{
                duration: 1000,
                easing: 'linear',
                complete:previnit
            });
            $artG.find('article').removeClass('selected');
            $artG.find('article:eq(1)').addClass('selected');
                function previnit(){
                    $artG.find('article:last').prependTo($artG);
                    $artG.css({marginLeft:'-30%'});
                    clearInterval(setInt);
                }
            }

        function next(){
            $artG.stop().animate({marginLeft:'-60%'},{
                duration: 1000,
                easing: 'linear',
                complete:previnit
            });
            $artG.find('article').removeClass('selected');
            $artG.find('article:eq(3)').addClass('selected');
                function previnit(){
                    $artG.find('article:first').appendTo($artG);
                    $artG.css({marginLeft:'-30%'});
                }
        }
});