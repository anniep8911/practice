$(function () {
    var $thumImg = $('.thumImg ul li');
    var $thum = $('.thumImg ul');
    var $main = $('.mainImg')
    var $btnPrev = $('.btns button').first();
    var $btnNext = $('.btns button').last();
    var $i = $('.ga05 section p i');

    function thum() {
        //this는 이벤트를 당하는 대상을 의미
        var path = $(this).css('background-image');
        $main.css('background-image', path);
        // var ind = $(this).index('.thumImg');
        // $('body').css('background-color','green');
        var index = $(this).index();
        //alert(index);
        $i.text(index + 1);
    };

    //선언함수
    function next() {
        $thum
            .find('li:first')
            .appendTo($thum);
    }
    function prev() {
        $thum
            .find('li:last')
            .prependTo($thum);
    };
    //리스너함수
    $thumImg.click(thum);
    $btnNext.click(next);

    //콜백함수(선언하지 않고 바로 시작하는 함수)
    $btnPrev.click(function () {
        $thum
            .find('li:last')
            .prependTo($thum);
    });
});


//.test요소의 하위에있는 모든 html요소를 지우고 새로운요소인 p를 추가
$('.test').html('p')
//.test요소에있는 text를 지우고 새로운 text를 추가 
$('.test').text('text!!')
//.test요소에 속성중 data-index속성을 확인
$('.test').attr('data-index')
//.test요소에 속성중 data-index속성에 값으로 5를 넣기
$('.test').attr('data-index',5)
//.test요소에 속성중 data-index속성의 값을 지우기
$('.test').removeAttr('data-index',5)
//.test요소에 value값을 가져오기
$('.test').val()
//.test요소에 value값으로 volume을 입력하기
$('.test').val('volume')
//.test요소의 css값중 background-color값을 가져오기
$('.test').css('background-color')
//.test요소의 css값중 background-color값을 green으로 바꾸기
$('.test').css('background-color','green')

//.test의 하위요소인 p태그에 class이름 pname을 삽입하기
$('.test>p').addClass('pname');
//.test의 하위요소인 p태그에 class이름 pname을 지우기
$('.test>p').removeClass('pname');




