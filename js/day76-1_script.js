$(function () {
    var $h2 = $('.header .nav h2');
    $h2.click(function () {
        var dp = '';
        dp = $(this).next().css('display');
        if(dp=='none'){
            $h2.siblings().slideUp();
            $(this).siblings().slideDown();
        }else{
            $h2.siblings().slideUp();
        }
    });
});