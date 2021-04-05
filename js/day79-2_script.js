$(function(){
    var $imgG=$('.ct02 .imgGroup'),
        $h4G = $('.ct02 .h4View .hGroup'),
        $h5G = $('.ct02 .h5View .hGroup'),
        $pG = $('.ct02 .pView .pGroup'),
        $btns = $('.ct02 .btns'),
        $btnPrev = $('.ct02 .btnPrev'),
        $btnNext = $('.ct02 .btnNext'),
        $num=$('.ct02 .pagenum'),
        $btn=$('.ct02 .pView .btn'),
        $url = ['http://www.naver.com','http://www.daum.com','http://www.nate.com','http://www.absolut.com','http://www.google.com','http://www.ednplus.com'],
        i = 0,
        even=setInterval(next,3000);

        $imgG.css({marginLeft:'-33.33%'});
        $imgG.find('.image:last').prependTo($imgG);
        $imgG.find('.image:last').prependTo($imgG);
        $h4G.css({left:'-100%'});
        $h4G.find('h4:last').prependTo($h4G);
        $h5G.css({top:'-100%'});
        $h5G.find('h5:last').prependTo($h5G);
        $pG.css({top:'-100%'});
        $pG.find('p:last').prependTo($pG);
        
        $btnPrev.click(prev);
        $btnNext.click(next);
        $btns.mouseenter(function(){
            clearInterval(even);
        });
        $btns.mouseleave(function(){
            even = setInterval(next,3000);
        });
        
        
        function prev(){
            $imgG.find('.image>figure').removeClass('selected');
            $imgG.find('.image:eq(1)>figure').addClass('selected');
            $imgG.animate({marginLeft:'0%'},1000,'linear',function(){
                $imgG.find('.image:last').prependTo($imgG);
                $imgG.css({marginLeft:'-33.33%'});
            });
            $h4G.animate({left:'0%'},{
                duration:1000,
                complete: function(){
                    $h4G.find('h4:last').prependTo($h4G);
                    $h4G.css({left:'-100%'});
                }
            });
            $h5G.animate({top:'0%'},{
                duration:1000,
                easing:'linear',
                complete: function(){
                    $h5G.find('h5:last').prependTo($h5G);
                    $h5G.css({top:'-100%'});
                }
            });
            $pG.animate({top:'0%'},{
                duration:1000,
                easing:'linear',
                complete: function(){
                    $pG.css({top:'-100%'});
                    $pG.find('p:last').prependTo($pG);
                }
            });

            i=(i+5)%6;
            $num.find('span').text(i+1);
            $btn.find('a').attr('href',$url[i]);

        }
        function next(){
            $imgG.find('.image>figure').removeClass('selected');
            $imgG.find('.image:eq(3)>figure').addClass('selected');
            $imgG.animate({marginLeft:'-66.66%'},{
                duration:1000,
                easing:'linear',
                complete: function(){
                    $imgG.find('.image:first').appendTo($imgG);
                    $imgG.css({marginLeft:'-33.33%'});
                }
            });
            $h4G.animate({left:'-200%'},{
                duration: 1000,
                easing: 'linear',
                complete: function(){
                    $h4G.css({left:'-100%'});
                    $h4G.find('h4:first').appendTo($h4G);
                }
            })
            $h5G.animate({top:'-200%'},{
                duration: 1000,
                easing: 'linear',
                complete: function(){
                    $h5G.css({top:'-100%'});
                    $h5G.find('h5:first').appendTo($h5G);
                }
            })
            $pG.animate({top:'-200%'},{
                duration:1000,
                easing:'linear',
                complete: function(){
                    $pG.css({top:'-100%'});
                    $pG.find('p:first').appendTo($pG);
                }
            })
            i=(i+1)%6;
            $num.find('span').text(i+1);
            $btn.find('a').attr('href',$url[i]);
        }
});