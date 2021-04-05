$(function(){
  /*  $('body').html('<h1>hello</h1>');
    $('body').text('<h1>hello</h1>');
    $('body').html('<h1>hello</h1>');
    $('h1').html('문서객체 조작하기<ul><li>조작</li></ul>');
    var h1;
    h1 = $('h1').html();
    console.log(h1);*/

    var ul = $('ul').html();
    console.log(ul);
    //0부터 시작
    //선택된 p태그에 문자열 대입하기
    var p = $('ul p').eq(0).html('선택된 요소의 하위요소를 문자열로 반환하거나 주어진값을 대입합니다.');
    console.log(p);
    var t1, t2, t3, t4; 
    t1="선택된 요소의 문자를 반환하거나 주어진 값을 문자로 대입합니다."
    $('ul p').eq(1).html(t1);
    t2="선택된 요소를 제거합니다."
    t3="선택된 요소와 하위 요소를 복사(복제)합니다."
    t4="선택된 요소의 하위 요소를 제거합니다."
    $('ul p').eq(2).text(t2);
    $('ul p').eq(3).text(t4);
    $('ul p').eq(4).text(t3);
});