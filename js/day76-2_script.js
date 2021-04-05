$(function(){
    var $bars = $('.hdrWrap header .bars');
    var $nav = $('.navWrap')
    $bars.click(function(){
        $nav.slideToggle();
    });
});