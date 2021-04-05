$(function(){
  var $artView = $('.ct05 .artWrap'),
      $btnPrv = $('.ct05 section .btnPrev'),
      $btnNxt = $('.ct05 .btnNext');

  $artView.find('article:last').prependTo($artView);
  $artView.find('article:last').prependTo($artView);
  $artView.find('article:last').prependTo($artView);
  $artView.find('article:last').prependTo($artView);
  $artView.css({marginLeft:'calc(100% / 16 * -2)'});
  $btnPrv.click(prev);
  $btnNxt.click(next);

  function prev(){
    $artView.stop().animate({marginLeft:'0%'},{
      duration:2000,
      complete: function(){
        $artView.find('article:last').prependTo($artView);
        $artView.css({marginLeft:'calc(100% / 16 * -2)'});
        $artView.find('article').removeClass('show');
        $artView.find('article').eq(4).addClass('show');
      }
    });

  }

  function next(){
    $artView.animate({marginLeft:'calc(100% / 16 * -4)'},{
      duration:2000,
      complete: function(){
        $artView.find('article:first').appendTo($artView);
        $artView.css({marginLeft:'calc(100% / 16 * -2)'});
        $artView.find('article').removeClass('show');
        $artView.find('article').eq(4).addClass('show');
      }
    });
  }
});
