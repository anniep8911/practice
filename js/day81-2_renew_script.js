$(function(){
  var $artView = $('.ct05 .artGroup'),
      $btnPrv = $('.ct05 .btnPrev'),
      $btnNxt = $('.ct05 .btnNext');

  $artView.css({marginLeft:'-16.66%'});
  $btnPrv.click(prev);
  $btnNxt.click(next);

  function prev(){
    $artView.stop().animate({marginLeft:'0%'},{
      duration:1000,
      complete: function(){
        $artView.find('article:last').prependTo($artView);
        $artView.css({marginLeft:'-16.66%'});
        $artView.find('article').removeClass('show');
        $artView.find('article').eq(4).addClass('show');
      }
    });

  }

  function next(){
    $artView.animate({marginLeft:'-33.32%'},{
      duration:1000,
      complete: function(){
        $artView.find('article:first').appendTo($artView);
        $artView.css({marginLeft:'-16.66%'});
        $artView.find('article').removeClass('show');
        $artView.find('article').eq(4).addClass('show');
      }
    });
  }
});
