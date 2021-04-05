
$(function(){
    var $thumImg= $('.thumImg ul li img');
    var $thum= $('.thumImg ul');
    var $main = $('.mainImg img')
    var $btnPrev = $('.btns button').first();
    var $btnNext = $('.btns button').last();

    function thum(){
        //this는 이벤트를 당하는 대상을 의미
        var path = $(this).attr('src');
        $main.attr('src',path);
       // var ind = $(this).index('.thumImg');
       //$('body').css('background-color','green');
    };
    
    //선언함수
    function next(){
        $thum.find('li:first').appendTo($thum);
    }
    function prev(){
        $thum.find('li:last').prependTo($thum);
    };
    //리스너함수
    $thumImg.click(thum);
    $btnNext.click(next);

    //콜백함수(선언하지 않고 바로 시작하는 함수)
    $btnPrev.click(function(){
        $thum.find('li:last').prependTo($thum);
    }); 
});