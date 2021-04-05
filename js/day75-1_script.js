$(function(){
    var $mnFig = $('.cnt28 .imgMain'),
        $thumFig = $('.cnt28 .imgThumb figure'),
        $dt = $('.cnt28 section article dl dt'),
        $btnL = $('.cnt28 .btns button:first'),
        $btnR = $('.cnt28 .btns button:last');
    $dt.click(function(){
        $dt.removeClass('show');
        $(this).addClass('show');
    });
    $thumFig.click(function(){
        //var $ind = $(this).index();
        var i = $(this).attr('data-num');
        $mnFig.css('margin-left',i*-100+'%');
        //$mnFig.css('margin-left',ind*-100+'%');
    });
    
    var i = 1;
    $btnR.click(function(){
        $mnFig.css('margin-left',i*-100+'%');
        i++;
        if(i >= 4){
            i=3;
        }
    });
    
    $btnL.click(function(){
        if(i <= -1){
            i=0;
        }
        $mnFig.css('margin-left',j*-100+'%');
        i--;
        
    });
    
});