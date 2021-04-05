$(function(){
    var $btnPrev= $('.btns button:first');
    var $btnNext= $('.btns button:last');
    var $imgG = $('.imgGroup');
    var $btnBtm = $('.pagenation li');
    var $pageNum = $('.pageNum span');
    var i = 0;
    $btnPrev.click(function(){
        i = (i+3) % 4;
        $imgG.animate({marginLeft :i*-100+'%'},1000);
        $btnBtm.removeClass('checked');
        $btnBtm.eq(i).addClass('checked');
        $pageNum.text(i+1);
        console.log(i); 
    });
    $btnNext.click(function(){
        i = (i+1) % 4;    
        $imgG.animate({marginLeft :i*-100+'%'},1000);
        $btnBtm.removeClass('checked');
        $btnBtm.eq(i).addClass('checked');
        console.log(i);
        $pageNum.text(i+1);
        
    });
    $btnBtm.click(function(){
        $btnBtm.removeClass('checked');
        $(this).addClass('checked');
        var ind = $(this).index()+1;
        $pageNum.text(ind);
        $imgG.animate({marginLeft :(ind-1)*-100+'%'},1000);
    });
});
