$(function(){
    //변수
    var $06btnPrev=$('.ct06 .prev'),
        $06btnNext=$('.ct06 .next'),
        $06imgGroup = $('.ct06 .imgGroup'),
        $06thumGroup =$('.ct06 .thmGroup'),
        $05btnPrev=$('.ct05 .prev'),
        $05btnNext=$('.ct05 .next'),
        $05imgGroup = $('.ct05 .imgGroup'),
        $05thumGroup =$('.ct05 .thmGroup');

        //이벤트
        $06btnPrev.on('click',prev06);
        $06btnNext.on('click',next06);
        $05btnPrev.on('click',prev05);
        $05btnNext.on('click',next05);

        //전처리
        $06thumGroup.css({marginLeft:'-50%'});
        $06imgGroup.css({marginLeft:'-100%'});
        $06imgGroup.find('.image:last').prependTo($06imgGroup);


        $05thumGroup.css({marginLeft:'-50%'});
        $05thumGroup.find('.image:last').prependTo($05thumGroup);
        $05imgGroup.css({marginLeft:'-100%'});
        $05imgGroup.find('.image:last').prependTo($05imgGroup);
        $05imgGroup.find('.image:last').prependTo($05imgGroup);
        $05imgGroup.find('.image:last').prependTo($05imgGroup);
        $05imgGroup.find('.image:last').prependTo($05imgGroup);
        
        //함수
        function prev06(){
            $06thumGroup.stop().animate({marginLeft:'0'},{
                duration: 1000,
                complete: function(){
                    $06thumGroup.css({marginLeft:'-50%'});
                    $06thumGroup.find('.image:last').prependTo($06thumGroup);
                }
            });
            $06imgGroup.stop().animate({marginLeft:'0'},{
                duration: 1000,
                complete: function(){
                    $06imgGroup.css({marginLeft:'-100%'});
                    $06imgGroup.find('.image:last').prependTo($06imgGroup);
                }
            });
        }
        function next06(){
            $06thumGroup.stop().animate({marginLeft:'-100%'},{
                duration: 1000,
                complete: function(){
                    $06thumGroup.css({marginLeft:'-50%'});
                    $06thumGroup.find('.image:first').appendTo($06thumGroup);
                }
            })
            $06imgGroup.stop().animate({marginLeft:'-200%'},{
                duration: 1000,
                complete: function(){
                    $06imgGroup.css({marginLeft:'-100%'});
                    $06imgGroup.find('.image:first').appendTo($06imgGroup);
                }
            });
        }
        function prev05(){
            $05thumGroup.stop().animate({marginLeft:'0'},{
                duration: 1000,
                complete: function(){
                    $05thumGroup.css({marginLeft:'-50%'});
                    $05thumGroup.find('.image:last').prependTo($05thumGroup);
                }
            });
            $05imgGroup.stop().animate({marginLeft:'0'},{
                duration: 1000,
                complete: function(){
                    $05imgGroup.css({marginLeft:'-100%'});
                    $05imgGroup.find('.image:last').prependTo($05imgGroup);
                }
            });
        }
        function next05(){
            $05thumGroup.stop().animate({marginLeft:'-100%'},{
                duration: 1000,
                complete: function(){
                    $05thumGroup.css({marginLeft:'-50%'});
                    $05thumGroup.find('.image:first').appendTo($05thumGroup);
                }
            })
            $05imgGroup.stop().animate({marginLeft:'-200%'},{
                duration: 1000,
                complete: function(){
                    $05imgGroup.css({marginLeft:'-100%'});
                    $05imgGroup.find('.image:first').appendTo($05imgGroup);
                }
            });
        }
});