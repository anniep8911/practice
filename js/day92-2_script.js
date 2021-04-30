$(function(){
    var $ct01 = $('.ct01'),
        $silder = $ct01.find('.artGroup'),
        $btPrev=$ct01.find('.btPrev'),
        $btNext=$ct01.find('.btNext');

        //초기화
        $silder.css({marginLeft: '-25%'});
        $silder.children(':last').prependTo($silder);

        $btPrev.on('click',function(){
            gsap.to($silder,{
                marginLeft:'0%',
                onComplete: function(){
                    $silder.css({marginLeft: '-25%'});
                    $silder.children(':last').prependTo($silder);
                } 
            });
        })

        $btNext.on('click',function(){
            gsap.to($silder,{
                marginLeft:'-50%',
                onComplete: function(){
                    $silder.css({marginLeft: '-25%'});
                    $silder.children(':first').appendTo($silder);
                } 
            });
        });

        gsap.to('.ct01 span',{
            top : -10,
            scale: 1.2, 
            stagger:{
                each:0.3,
                repeat:-3,
                yoyo:true
            }
        });

    var $bnr = $('.banner'),
        $banner = $bnr.find('.figGroup'),
        simplyScroll={};
        
        //초기화
        $banner.css({marginLeft:'-50%'});

        simplyScroll = gsap.to($banner,{
            duration: 1,
            marginLeft:'-33.34%',
            repeat:-2,
            ease:'linear',
            onRepeat: function(){
                $banner.css({marginLeft:'-50%'});
                $banner.find(':last').prependTo($banner);
            }
        });

        $banner.on('mouseenter mouseleave',function(eve){
            switch(eve.type){
                case "mouseenter" : simplyScroll.pause();
                break;
                case "mouseleave" : simplyScroll.resume();
                break;
                default: console.log('옳지못한 값');
            }
          
        });


});