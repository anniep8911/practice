$(function(){
    var $imgG = $('.ga03 .imgGroup'),
        $btnNext=$('.btNext'),
        $btnPrev=$('.btPrev');

    //초기세팅
    /*
    $imgG.css({left:'-100%'});
    $imgG.find('.image:last').prependTo($imgG);
    
    $btnNext.click(function(){
        $imgG.animate({left:'-200%'},2000,'easeOutBounce',function(){
            $imgG.css({left:'-100%'});
            $imgG.find('.image:first').appendTo($imgG);
        });
    });
    $btnPrev.click(function(){
        $imgG.animate({left:'0%'},2000,'easeOutBounce',function(){
            $imgG.css({left:'-100%'});
            $imgG.find('.image:last').prependTo($imgG);
        });
    });*/
    
    $btnNext.click(function(){
        $imgG.animate({left:'-200%'},{
            duration: 1000,
            easing: 'easeOutBounce',
            complete: function(){
                $imgG.css({left:'-100%'});
                $imgG.find('.image:first').appendTo($imgG);
            }
        });
    });
    
});

//부모요소 선택 :class="test"의 부모를 선택한다.
$('.test').parent()
//상위요소 선택
$('.test').parents()
//하위요소 div 선택
$('.test div')
//자식요소 div 선택
$('.test>div')
//자식요소들 선택
$('.test').children()
//형요소 div(바로 이전선택자) 선택
$('.test').prev('div')
//형요소들 선택
$('.test').prevAll()
//동생요소(다음요소) div 선택
$('.test').next('div')
$('.test+div')
//동생요소들 선택
$('.test').nextAll()
//지정동생(다음) .divF요소들 선택자 선택 
$('.test').nexUntil('.divF')
//전체형제요소 선택
$('.test').siblings()


//전체선택
$('*')
//아이디 test선택
$('#test')
//클래스 test선택
$('.test')
//요소 div선택
$('div')
//그룹선택(test1,2,3,4)
$('.test1,.test2,.test3,.test4')
//종속선택 <div class="test"></div>
$('div.test')
//종속선택 <div id="test"></div>
$('div#test')

