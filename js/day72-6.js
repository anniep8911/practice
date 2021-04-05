$(function(){
    var $btn=$('.gal03 .btn2 button');
    var $btnPrev = $btn.first();
    var $btnNext = $btn.last();
    var $artGroup = $('.gal03 .artGroup');
    var i = 0;
    var $num = $('.gal03 .btns span');

    function prev(){
        $artGroup.find('article:last').prependTo($artGroup);
        i = (i + 3) % 4;
        $num.find('i').text(i+1);  
    }
    function next(){
        $artGroup.find('article:first').appendTo($artGroup);
        i = (i + 1) % 4;
        $num.find('i').text(i+1);  
    }
    $btnPrev.click(prev);
    $btnNext.click(next);

    
});