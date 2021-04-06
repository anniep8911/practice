$(function(){
    var offset_ct=0;
    var i=0;
    //휠다운시 nextPage, 휠업 prevPage
    $('.btNext').on('click',nextPage);
    $('.btPrev').on('click',prevPage);

    function nextPage(){
        offset_ct = $('.content').eq(i).offset().top;
        i = (i+1)%4;
        //각 content의 offset().top의 값을 html의 scrollTop의 값으로 대입
        $('html').animate({scrollTop:offset_ct},1000);
    };

    function prevPage(){
        offset_ct = $('.content').eq(i).offset().top;
        i = (i+3)%4;
        //각 content의 offset().top의 값을 html의 scrollTop의 값으로 대입
        $('html').animate({scrollTop:offset_ct},1000);
    }
});