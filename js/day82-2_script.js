$(function(){
    var $ct = $('.content');

    $ct.on('mouseenter mouseleave',function(eve){
        switch(eve.type){
            case 'mouseenter': $(this).find('h3, p').stop().animate({top:0, opacity: 1},1000);
            break;
            case 'mouseleave': $(this).find('h3, p').stop().animate({top:80, opacity: 0},1000);
        }
        /*    
        if(eve.type == 'mouseenter'){
            $(this).find('h3, p').animate({top:0, opacity: 1},1000);
        }else if(eve.type == 'mouseleave'){
            $(this).find('h3, p').animate({top:80, opacity: 0},1000);
        }*/
    });
});