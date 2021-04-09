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

        $bar.on('drag',drgaHandler);

        // .bar의 값이 0 > artG의 marginLeft :0 , .bar값:770px > .artG값은 -1350px이 됨 
        var barPos=0, agPos=0;
        function drgaHandler(){
            barPos=$bar.css('left');
            barPos=parseInt(barPos);
            //현재 커서위치를 전체 움직일 크기로 빼고, 현재 커서가 움직일수있는 최대값으로 나누면 됨
            agPos= barPos * -1350 / 770;
            $artG.css({'marginLeft':agPos});
            console.log(barPos+','+agPos);
        }
});