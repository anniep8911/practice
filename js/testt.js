$(function(){
    var $art= $('.art');
    var $artWrap= $('.cntWrap');
    $art.eq(0).css({top:0,bottom:0,left:0,right:0,'z-index':9});
    $art.eq(1).css({left:0,top:0});
    $art.eq(2).css({right:0,bottom:0});
    
    $art.click(function(){
        $(this).animate({left:0,right:0, top:0 , bottom:0},{
            duration:1000,
            easing: 'easeOutBounce',
            complete: function(){
                $(this).prependTo($artWrap);
                $art.eq(0).css({top:0,bottom:0,left:0,right:0,'z-index':9});
                $art.eq(1).css({left:0,top:0});
                $art.eq(2).css({right:0,bottom:0});
            }
                
        });
    });
})