$(function(){
    var i=0;
    var $ga09btn = $('.ga09 .btns button');
    var $ga09 = $('.ga09');
    var $gaBrNext= $ga09btn.first();
    var $gaBrPrev= $ga09btn.last();
    var $gaItem = $ga09.find('.artGroup');
    var $num = $ga09.find('.btns span i');

    function bR(){
        
        $gaItem.find('article:first').appendTo($gaItem);
        i = (i + 1) % 4;
        $num.text(i+1);
    }
    function bL(){
        $gaItem.find('article:last').prependTo($gaItem);
        i = (i + 3) % 4;
        $num.text(i+1);
    }

    $gaBrNext.click(bL);
    $gaBrPrev.click(bR);
});