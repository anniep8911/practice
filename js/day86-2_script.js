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

    var $art = $('.pg1 article');
    
    $art.on('mouseenter',ent);
    
    function ent(){
        var ind=0, num=0;
        ind = $(this).index();
        num=$art.eq(ind).find('span').text();

        $({percent:0}).animate({percent:num},{
            duration: 1000,
            progress: function(){
                $art.eq(ind).find('span').text(0);
                $art.eq(ind).find('.bar').css({width:0});         
                $art.eq(ind).find('span').text(parseInt(this.percent));
                $art.eq(ind).find('.bar').css({width:this.percent+'%'});
                
            }
        })

    }

    /*
    $art.each(function(i){
        var num=0, per='';
        num = $art.eq(i).find('span').text();
        per = num+'%';
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
    */

});