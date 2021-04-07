$(function(){
    var $mnImg = $('.mnWrap section'),
        $btnClose = $('.lightBox .btnClose'),
        $prev = $('.lightBox .btns .prev'),
        $next = $('.lightBox .btns .next'),
        $btn = $('.lightBox .btns .btn'),
        $imgG = $('.lightBox .imgGroup'),
        $lightBox =$('.lightBox');


        $mnImg.on('click',show);
        $btnClose.on('click',hide);

        function show(){
            $lightBox.fadeIn();
        }
        function hide(){
            $lightBox.fadeOut();
        }

        $prev.on('click',prev);

        //커서위치 감지하기
        //event hadler는 매개변수를 (parameter)를 통해 이벤트의 상태를 감지할 수 있다.
        $(window).on('click',function(eve){
    
        });

        //세팅
        $imgG.css({marginLeft:'-100%'});
        $imgG.find('.image:last').prependTo($imgG);

        function prev(){
            $imgG.animate({marginLeft:0},{
                duration:1000,
                easing: 'linear',
                complete: function(){
                    $imgG.find('.image:last').prependTo($imgG);
                    $imgG.css({marginLeft:'-100%'});
                }
            })
        }


});