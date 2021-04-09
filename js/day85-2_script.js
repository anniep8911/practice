$(function(){
    var $ct32=$('.ct32'),
        $artG=$ct32.find('.artGroup'),
        $art=$ct32.find('article'),
        $bar = $ct32.find('.bar');

        for(var i=1;i<8;i++){
            $art.clone().appendTo($artG);
        }
        var j= $artG.children('article:last').index()+1;
        //크기키우기
        $artG.outerWidth(270*j);
        
        //현재 article의 값을 반영해줌
        $art=$artG.find('article');
        //E.each(fn(){}) 선택된 요소 E의 각각이라는 의미// 각각fn실행
        $art.each(function(k){
            $art.eq(k).find('.image').addClass('i'+(k+1));
            $('.i'+(k+1)).css({backgroundImage:'url(img/pic0'+(k+1)+'.jpg)'});
        });

        //드래그바 동작
        $bar.draggable({
            containment:'parent',
            axis:'x'
        });
});