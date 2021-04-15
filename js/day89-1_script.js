$(function(){
    var $page=$('.page'),
        $content=$page.find('.content'),
        $btnUp = $('.btns button:first'),
        $btnDown = $('.btns button:last'),
        pageHeight=$page.outerHeight(),
        pg=0;
        
        for(var i=0; i<=5; i++){
            $content.eq(i).text('page 0'+i);
            $content.eq(i).addClass('ct0'+i);
        }
    
    //리사이즈시 다시 넣어줌 
    $(window).on('resize',function(){
        pageHeight=$page.outerHeight();
    });

    $btnUp.on('click',pageUp);
    $btnDown.on('click',pageDown);

    function pageUp(){
        console.log(pg);
        if(pg > 0){
          pg--;
          $('html').stop().animate({scrollTop:pageHeight*pg});
          $btnDown.css({backgroundColor:'#666'});
        }else{
            pg=0;
            $btnUp.css({backgroundColor:'blue'});
        }
    }
    
    function pageDown(){
        if(pg<5) {
            pg++;
            $('html').stop().animate({scrollTop:pageHeight*pg});
            $btnUp.css({backgroundColor:'#666'});
        }
        else {
            pg=5;
            $btnDown.css({backgroundColor:'red'});
        }
        
    }
});