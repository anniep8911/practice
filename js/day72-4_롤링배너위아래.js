$(function(){
    //ul에 첫번째 li요소가 제일 마지막요소로 옮겨지는것 
    //$('.ele1').appendTo('.ele4');
    //1을2의 마지막자식으로 첨부
    //$('.ele1').appendTo('.ele2');
    
    
    function bt1(){
        $('.target ul li').first().appendTo('.target ul');
    }
    function bt2(){
        $('.target .ul li').last().prependTo('target ul');
    }
    $('.bt2').click(bt2);
    $('.bt1').click(bt1);
});

function event(){
    $('보여줄영역').prependTo('전체슬라이드')
}