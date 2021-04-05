$(function(){
    
    var $btnPrev=$('.ga03 .btns button:first');
    var $btnNext=$('.ga03 .btns button:last');
    var $imgG = $('.ga03 .imgGroup');
    
    //초기화 작업필요 
    $imgG.find('.image:first').appendTo($imgG);
    
    $btnPrev.click(function(){
        //마지막 이미지가 사라짐
        $imgG.find('.image:last').fadeOut(500,function(){
            //첫번째 이미지로 업뎃
            $(this).prependTo($imgG).show();
        });
    });
    $btnNext.click(function(){
        //첫번째 이미지가 사라지면서   
        $imgG.find('.image:first').hide(0,function(){
            //마지막에 다시 나타남
            $(this).appendTo($imgG).fadeIn(500);
        });
    });

});