$(function(){
    var $artG = $('.ct34 .artGroup'),
        $dragBox = $artG.find('.box'),
        $dropBox = $('.ct34 .centerCover'),
        boxHide = {width:0,height:0,borderRadius:'160px'},
        boxShow = {width:'160px',height:'160px',borderRadius:0},
        $h4 = $dropBox.find('h4'),
        txt='',
        $stop = $dropBox.find('.btStop');
        
        
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
                    $dropBox.find('.album').addClass('run');
                });
            }
        });
        
        $stop.on('click',function(){
            $dropBox.find('.album').removeClass('run');
            $dragBox.removeClass('dragging');
            $dragBox.animate(boxShow);
            $h4.text('drag here!');
        });
});