$(function(){
    var $mnImg = $('.mnWrap section'),
        $btnClose = $('.lightBox .btnClose'),
        $prev = $('.lightBox .btns .prev'),
        $next = $('.lightBox .btns .next'),
        $btn = $('.lightBox .btns .btn'),
        $imgG = $('.lightBox .imgGroup'),
        $lightBox =$('.lightBox'),
        $nvMenu = $('.navWrap menu'),
        $nvWrap = $('.navWrap'),
        $nv = $('.navWrap nav');

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
            console.log(eve.pageX, eve.pageY);
        });

        $nvMenu.on('mousemove',moveNav);
        function moveNav(eve){
            $nvWrap.css({top:eve.pageY-60})
        }

        
        $nvMenu.on('mouseenter',function(){
            $nvMenu.animate({width:120},500);
        });
        $nvWrap.on('mouseleave',function(){
            $nvMenu.animate({width:40},500);

        });



        var flag =  true;
        $nvMenu.on('click',showNav);
        function showNav(eve){
            if(flag){
                $nv.animate({marginLeft:0});
                flag=false;
            }else{
                $nv.animate({marginLeft:-860})
                flag=true;
            }
        }
        
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