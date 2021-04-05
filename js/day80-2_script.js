$(function(){
//animation Que :명령받은 순서로 실행, 명령대기중인것은 기다리는것 
//Que를 제어하는 메서드 .stop() - true가 기본값인 상태
//이전에 실행된 animate실행 여부
//animate(1).stop(true).animate();이라고 하면 animate(1)은 지속시키지 
//않고 다음 animation이 실행

    var $cntBtn = $('.lnbWrap ul li'),
        $cntBg = $('.lnbWrap .bg'),
        $ftrWrap=$('.ftrWrap'),
        $con = $('.content');
        ind=0,
        top = [];
        
        $cntBtn.mouseenter(naV);
        $cntBtn.click(scrollClk);

        $(window).stop().scroll(function(){
            alert('발생!');
        });

        $('html').on("scroll",function(){
            ind++;
            alert(ind);
        });

        function naV(){
            ind = $(this).index();
            $cntBg.stop().animate({marginLeft:ind*25+'%'},{
                duration:1000,
                easing:'easeOutBounce'
            });
        }
        
        //top크기 받아오면서 적용
        function scrollClk(){
            top[ind]=$('.content').eq(ind).offset().top;
            ind = $(this).index();
            $('html').animate({scrollTop:top[ind]-160},500*(ind+1),'easeOutBounce')
        }



        $ftrWrap.click(function(){
            //scrollTop은 내장객체와 내장함수로 사용가능함
            $('html').animate({scrollTop:0},1000*(ind+1),'easeOutBounce');
        });

});