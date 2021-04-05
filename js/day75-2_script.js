$(function(){
    var $h2 = $('.hdrWrap h2');
    var $num = $h2.index();

    console.log($('body').css());
    $h2.eq(0).addClass('clicked');

});