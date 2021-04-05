$(function(){
    var $box = $('.canvas .box');
    //$box.animate({width:'0px'},2000,'easeInElastic');
    $box.animate({height:'500px', width: '200px'},
    {duration: 2000, easing:'easeOutElastic', complete : fn});
    function fn(){
        alert('끝@');
    }
});
