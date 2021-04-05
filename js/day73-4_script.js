$(function(){
    function th(){
        var path = $(this).attr('src');
        $('.mainImg img').attr('src',path)
    }
    var num=1;
    function next(){
        $('.thumImg ul li img').first().appendTo('.thumImg ul');
    }
    function prev(){
        $('.thumImg ul li img').last().dependTo('.thumImg ul');
    }
    $('.thumImg ul li img').click(th);
    var btnPrev = $('.btns button').first();
    var btnNext = $('.btns button').last();
    btnNext.click(next);
    btnPrev.click(prev);


});
/*
$(function(){
    /*
    $ele.attr('특성명') - ele의 '특성'의 값을 검사
    $ele.attr('특성명','값') - ele의 '특성'에 '값'을 대입
    $(this) - 함수, 메서드가 적용되는 대상, 함수가 적용되는 이것! 
    
    var path = '';
    $('.thumGroup img').click(changeImg);
    function changeImg(){
        //this 는 click메서드가 적용되는 대상
        path = $(this).attr('src');
        console.log(path);
        $('.image img').attr('src',path);
    }
});*/