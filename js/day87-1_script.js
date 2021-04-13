$(function () {
    var $pg2 = $('.pg2'),
        $art = $pg2.find('article'),
        num = 0,
        per = 0;

    $art.each(function (ind) {
        num = $art.eq(ind).find('span').text();
        $art.eq(ind).find('span').text(0);
        console.log(num);
        $({percent:0}).animate({percent:num},{
            duration:2000,
            progress: function(){
                per=parseInt(this.percent);
                deg=per*3.6;
                rightDeg = Math.min(deg,180);
                leftDeg = Math.max(deg,180);
                console.log(rightDeg+","+leftDeg);
                $art.eq(ind).find('.right li').css({transform:'rotate('+rightDeg+'deg)'});
                $art.eq(ind).find('.left li').css({transform:'rotate('+leftDeg+'deg)'});
                

                /*if(deg>=180){
                    $art.eq(ind).find('.right li').css({transform:'rotate(180deg)'});
                    $art.eq(ind).find('.left li').css({transform:'rotate('+deg+'deg)'});
                }else{
                    $art.eq(ind).find('.right li').css({transform:'rotate('+deg+'deg)'});
                }*/
                $art.eq(ind).find('span').text(per);
            }
        });
    });
});