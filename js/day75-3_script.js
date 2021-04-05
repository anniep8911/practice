$(function(){
    var $hideB = $('.basic .btHide');
    var $showB = $('.basic .btShow');
    var $ToggleB = $('.basic .btToggle');
    var $imgB = $('.basic .image');
    var $hideF = $('.fade .btHide');
    var $showF = $('.fade .btShow');
    var $ToggleF = $('.fade .btToggle');
    var $imgF = $('.fade .image');
    var $hideS = $('.slide .btHide');
    var $showS = $('.slide .btShow');
    var $toggleS = $('.slide .btToggle');
    var $imgS = $('.slide .image img');
    var dp='';
    $hideB.click(function(){
        $imgB.hide(0,function(){
            dp = $(this).css('display');
            console.log(dp);
        });
    });
    $showB.click(function(){
        $imgB.show(1000,function(){
            dp = $(this).css('display');
            console.log(dp);
        });
    });
    $ToggleB.click(function(){
        $imgB.toggle(200);
    });

    $hideF.click(function(){
        $imgF.fadeOut(3000);
    });
    $showF.click(function(){
        $imgF.fadeIn(3000);
    });
    $ToggleF.click(function(){
        $imgF.fadeToggle(1000);
    });
    $showS.click(function(){
        $imgS.slideDown(2000);
    });
    $hideS.click(function(){
        $imgS.slideUp(2000);
    });
    $toggleS.click(function(){
        $imgS.slideToggle(1000);
    });
});