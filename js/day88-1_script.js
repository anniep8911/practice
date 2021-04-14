$(function(){
    var $artG = $('.ct34 .artGroup'),
        $dragBox = $artG.find('.box'),
        $dropBox = $('.ct34 .centerCover'),
        boxHide = {width:0,height:0,borderRadius:'160px'},
        boxShow = {width:'160px',height:'160px',borderRadius:0},
        $h4 = $dropBox.find('h4'),
        $h5 = $dropBox.find('h5'),
        $p = $dropBox.find('p'),
        txt='',
        $stop = $dropBox.find('.btStop'),
        $myMusic = $dropBox.find('.texts audio'),
        mPath = '';

        $dragBox.draggable({
            revert: true,
            revertDuration:500,
            containment : '.ct34 section',
            zIndex:20,
            drag: function(){
                $dragBox.removeClass('dragging');
                $(this).addClass('dragging');
            }
        });
        $dropBox.droppable({
            accept:$dragBox,
            drop:function(){
                $dragBox.animate(boxShow);
                $('.dragging').stop().animate(boxHide,function(){
                    txt= $(this).find('h4').text();
                    $h4.text(txt);
                    txt=$(this).find('h5').text();
                    $h5.text(txt);
                    txt=$(this).find('p').text();
                    $p.text(txt);
                    $dropBox.find('.album').addClass('run');
                    $image =$(this).css('background-image');
                    $dropBox.find('.album .core').css('background-image',$image);
                    mPath=$(this).attr('data-src');
                    $myMusic.attr('src',mPath);
                });
            }
        });
        
        $stop.on('click',function(){
            $dropBox.find('.album').removeClass('run');
            $dragBox.removeClass('dragging');
            $dragBox.animate(boxShow);
            $h4.text('Drop here');
            $h5.text('앨범이미지를 여기에 드래그 해주세요.');
            $p.text(' 여기에 앨범 설명이 보입니다.');
            $dropBox.find('.album .core').css('background-image','');
            $myMusic.attr('src','');
        });
    });