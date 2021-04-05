$(function(){
    var $prevBtn = $('.cnt04 .btns button:first');
    var $nextBtn = $('.cnt04 .btns button:last');
    var $artG = $('.cnt04 .artGroup');
    var $pg = $('.cnt04 .pagenation');
    var i = 0;
    
    function prev(){
        $artG.find('article:last').prependTo($artG);
        i = (i+3)%4
        console.log(i);
        $pg.find('li').removeClass('clicked');
        $pg.find('li').eq(i).addClass('clicked');
    }
    function next(){
        $artG.find('article:first').appendTo($artG);
        i = (i+1)%4
        console.log(i);
        $pg.find('li').removeClass('clicked');
        $pg.find('li').eq(i).addClass('clicked');
    }
    $prevBtn.click(prev);
    $nextBtn.click(next);
    
    var $pgLi1 = $('.cnt04 .pagenation').find('li');
    function cl(){
        var path = $(this).index();
        $pg.find('li').removeClass('clicked');
        $pg.find('li').eq(path).addClass('clicked');
        var pathI = path+1;
        console.log(pathI);
        var url = $('.i'+pathI).css('background-image');
        $artG.find('article').eq(0).css('background-image',url);
        console.log(url); 
    }

    $pgLi1.click(cl);
    
    
});