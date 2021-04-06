//day82-1_script.js
$(function () {
    var $btnTop = $('.btTop'),
        $html = $('html'),
        $lnbLi = $('.lnbWrap li'),
        $lnb=$('.lnbWrap'),
        $bg = $lnb.find('.bg'),
        $htmlScrollTop = 0;
        i=0,
        $fix= $lnb.offset().top,
        $cnt = $('.content'),
        ctOffset = 0,
        $scR=[];

        for(var j = 0; j <= 3; j++){
            $scR[j]=$cnt.eq(j).offset().top;
        }
        console.log($scR);

    $btnTop.on('click',function(){
        $html.animate({scrollTop:0},3000,'easeOutBounce');
    });

    $lnbLi.on('click',function(){
        i=$(this).index();
        ctOffset= $cnt.eq(i).offset().top;
        $html.animate({scrollTop:ctOffset},2000,'easeInBounce');
    });

    $(window).on('scroll',function(){
        $htmlScrollTop = $(this).scrollTop();
        if($fix<=$htmlScrollTop){
            $lnb.addClass('top');
        }else{
            $lnb.removeClass('top');
        }
        console.log($htmlScrollTop);
        //스크롤다운시 이동
        if($scR[0]>=$(this).$htmlScrollTop){
            $bg.stop().animate({marginLeft: 0 * 25 + '%'},500,'easeOutBounce');
        }else if($scR[1]>=$(this).$htmlScrollTop){
            $bg.stop().animate({marginLeft: 1 * 25 + '%'},500,'easeOutBounce');
        }else if($scR[2]>=$(this).$htmlScrollTop){
            $bg.stop().animate({marginLeft: 2 * 25 + '%'},500,'easeOutBounce');
        }else if($scR[3]>=$(this).$htmlScrollTop){
            $bg.stop().animate({marginLeft: 3 * 25 + '%'},500,'easeOutBounce');
        }
    });

    $lnbLi.on('mouseenter',function(){
        i=$(this).index();
        $bg.stop().animate({marginLeft: i * 25 + '%'},500,'easeOutBounce');
    });



});