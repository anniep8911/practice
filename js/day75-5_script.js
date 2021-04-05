$(function(){
    var $btnPrev = $('.btns button:first');
    var $btnNext = $('.btns button:last');
    var $imgG =  $('.imgG');

    $imgG.find('.img:first').appendTo($imgG);

    $btnPrev.click(function(){
        $imgG.find('.img:last').fadeOut(500,function(){
            $(this).prependTo($imgG).show();
        });
    });

    $btnNext.click(function(){
        //첫번째 이미지를 빼면서 없애면 fadeIn효과가 적용됨
        $imgG.find('.img:first').hide(0,function(){
            $(this).appendTo($imgG).fadeIn(500);
        });
    })
});