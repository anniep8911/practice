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

    $(window).on('mousewheel',wheelPage);

    function wheelPage(evt){
        delta =evt.originalEvent.wheelDelta
        //console.log(delta);
        if(delta > 0 && scrEvt == false && p > 0){
            //이전페이지 보기
            prevPage();
        }else if(delta < 0 && scrEvt == false && p < 5){
            //다음페이지 보기
            nextPage();
        }
    }

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

    //day89-1_script.js
$(function(){
    var $page = $('.page'),
        $Prev = $('.btPrev'),
        $next = $('.btNext'),
        pageHeight = $page.outerHeight(),
        p = 0,
        delta = 0,
        scrEvt = false;

    $(window).on('resize',function(){
        pageHeight = $page.outerHeight();
        console.log(pageHeight);
    });
    $(window).on('mousewheel',wheelPage);

    function wheelPage(evt){
        delta =evt.originalEvent.wheelDelta
        //console.log(delta);
        if(delta > 0 && scrEvt == false && p > 0){
            //이전페이지 보기
            prevPage();
        }else if(delta < 0 && scrEvt == false && p < 5){
            //다음페이지 보기
            nextPage();
        }
    }

    $Prev.on('click',prevPage);
    function prevPage(){
        scrEvt = true;
        if(p > 0) p--;
        $('html').stop().animate({scrollTop :pageHeight*p},function(){
            scrEvt = false;
        });
    }
    $next.on('click',nextPage);

    function nextPage(){
        //p = (p+1)%6
        //if( p < 5 ) p = p+1;
        scrEvt = true;
        if( p < 5 ) p++;

        $('html').stop().animate({scrollTop :pageHeight*p},function(){
            scrEvt =false;
        });
    }
});
});