$(function(){
    /*var $pg1 = $('.pg1'),
        $art = $pg1.find('article'),
        $bar = $('.progress .bar'),
        num=0;
    
    $({percent:0}).animate({percent:50},{
        progress: function(){
            duration: 1800
        }
            //console.log(this.percent);
    });

    $art.each(function(ind){
        num = $art.eq(ind).find('span').text();
        console.log(num);
    });
*/

    var $art = $('.pg1 article'),
        $bar = $art.find('.bar');
    $art.each(function(i){
        var num=0;
        num = $art.eq(i).find('span').text();
        $art.eq(i).find('span').text(0);
        $art.eq(i).find('.bar').css({width:0});
        $({percent:0}).animate({percent:num},{
            duration: 5000,
            progress: function(){
                $art.eq(i).find('span').text(parseInt(this.percent));
                $art.eq(i).find('.bar').css({width:this.percent+'%'});
            }
        });
    });
    

});