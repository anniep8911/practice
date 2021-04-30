$(function(){
    //원래 사용내용
    //$('.box').animate({width:600, height:600});
    var box = gsap.from('.box',{
        width: 600,
        height: 600,
        duration: 4,
        rotation: 720,
        x:800,
        paused: true
    });
        $('.bt1').click(function(){
            box.play();
        });
        $('.bt2').click(function(){
            box.pause();
        })
        $('.bt3').click(function(){
            box.resume();
        })
        $('.bt4').click(function(){
            box.reverse();
        })
        $('.bt5').click(function(){
            box.restart();
        })
});