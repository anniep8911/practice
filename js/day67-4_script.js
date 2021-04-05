//연결된 core파일에서 jqeury 함수를 가르킴
var fx = function(){
    //jQuery('.title').css({color:'#00f'})
}

//jQuery(document).ready(fx) header에서 이용시 문서구조보다
//스크립트가 먼저 실행되도록 하기위한 조치
/*jQuery(document).ready(function(){
    jQuery('.title').css({color:'#fc0'})
});*/

//jquery문자를 $로 표시하면 됨
/*$(function(){
    //$('.title').css({color:'aqua'})
    //함수안에 함수 적용가능
});*/

function bb(){
    //js에서는 value를 입력했지만 제이쿼리에서는 val()로 입력
    var t = $('input').val();
    $('.wr').text(t);
    $('.title').css({color:'aqua'});
}

//.test요소의 하위요소를 제거하고 그 위에 지정한 새 요소 p 생성 
$('.test').html('p')
//.test요소의 하위요소를 제거하고 그 위에 새로운 텍스트 생성 
$('.test').text('텍스트!')
//.test요소의 src로 지정된 속성값 알아보기
$('.test').attr('src')
//.test요소의 src로 지정된 속성값을 http://


