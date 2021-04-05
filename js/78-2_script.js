$(function(){
    var $bgG = $('.bgG');
    var $bgImg = $('.bgG .image');
    var ind = $bgImg.index();
    var $hG = $('.h2View .hGroup');
    var $pG = $('.pView .pGroup');
    var path=['http://wwwnaver.com','http://google.com','http://www.daum,net','http://wwww.absolut.dothome.co.kr'],
        txt=['네이버','구글','다음','보드카'],
        i=0;

    //세팅
    $bgG.find('.image:first').appendTo($bgG);
    $hG.css({top:'-100%'});
    $hG.find('h2:last').prependTo($hG);
    $pG.css({top: '-100%'});
    $pG.find('p:last').prependTo($pG);

    $('.btPrev').click(function(){
        $bgG.find('.image:last').fadeOut(1000,function(){
            $bgG.find('.image:last').prependTo($bgG);
            $bgG.find('.image:first').show();
        });
        $hG.animate({top:'0%'},{
            duration: 1000,
            complete: function(){
                $hG.css({top:'-100%'});
                $hG.find('h2:last').prependTo($hG);
            }
        });
        $pG.animate({top:'0%'},{
            duration: 1000,
            complete: function(){
                $pG.css({top:'-100%'});
                $pG.find('p:last').prependTo($pG);
            }
        });
        i = (i+3) % 4;
        $('.btn a').attr('href',path[i]);
        $('.btn a').text(txt[i]);
    });
    
    $('.btNext').click(function(){
        $bgG.find('.image:first').fadeOut(0,function(){
            $bgG.find('.image:first').appendTo($bgG);
            $bgG.find('.image:last').fadeIn(1000);
        });
        $hG.animate({top:'-200%'},function(){
            $hG.css({top:'-100%'});
            $hG.find('h2:first').appendTo($hG);
        });
        $pG.animate({top:'-200%'},function(){
            $pG.css({top:'-100%'});
            $pG.find('p:first').appendTo($pG);
        });
        i = (i+1) % 4;
        $('.btn a').attr('href',path[i]);
        $('.btn a').text(txt[i]);
    });
    
});