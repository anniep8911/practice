$(function(){
    var $li= $('.tabBar li');
    var $art = $('.ga01 section .artGroup article');
    var $h3 = $('.ga01 header h3');
    function show(){
        var ind = $(this).index();
        $art.hide();
        $art.eq(ind).show();
        $li.removeClass('checked');
        $li.eq(ind).addClass('checked');
    }
    $li.click(show);


    var $btn =$('button');
    var $h1 =$('h1');
    var i = 0;
    $btn.click(function(){
       $h1.show(
            1000,function(){
                for(var j= 0; j <= 90;j++){
                    $h1.text(i);
                    i++;
                }
            }
        );
    });
});