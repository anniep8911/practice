$(function(){
    var $navh2 = $('.hdrWrap header nav h2'),
        $hdr = $('.hdrWrap'),
        $navWrap = $('.navWrap');
   /* $navh2.mouseenter(function(){
        $navWrap.slideDown(500);
    });*/
    $navWrap.mouseleave(function(){  
        $navWrap.slideUp(500);
    });
    $navh2.click(function(){
        $navWrap.slideDown(500);    
    });
});