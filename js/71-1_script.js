//문서 자체가 준비되었을때 (브라우저에 로딩이 되었을때)
//$jQuery (document).ready(function(){});
$(function(){
    //기본선택자(전체선택자, 아이디선택자, 클래스선택자, 요소(타입)선택자, 그룹선택자), 종속선택자
    $('*').css({'border-color' : '#fc0'});
    //css 선택자는 ''안에서 작성이 되어야 함.
    //속성은 css용은 ''안에서, js용은 ''를 안쓰고 사용함
    $('#wrapper').css({ borderColor : '#f00'});
    //p태그와 li태그를 동시에 선택하여 배경색을 핑크로,
    $('p,li').css({backgroundColor :  'pink'});
    //계층선택자(자식선택자, 하위선택자, 동위선택자)
    $('#wrapper>div').css({borderWidth : 10});
    $('#wrapper .part').css({borderStyle: 'dashed'});
    //div아래의 .part를 가진형제중 바로 아래 형제
    $('.section>div+.part').css({color : 'white', fontWeight:'bold', textTransform : 'uppercase'});
    //div아래의 .part를 가진형제중 전체형제
    $('.section>div~.part').css({backgroundColor : 'orange'});
    //기본필터선택자
    //전체 li에서 가장 먼저 선택되는것 :: 객체는 만들어지고 순서에따라 index라는 값이 부여가 됨
    $('li:first').css({borderColor : 'blue'});
    //인덱스 불러오기
    $('li:eq(0)').css({borderStyle : 'dashed'});
    $('li:eq(1)').css({borderColor : 'magenta'});
    $('li:eq(2)').css({borderColor : 'gray'});
    $('li:eq(3)').css({borderColor : 'white'});
    $('li:eq(6)').css({borderColor : 'purple'});
    //index번호가 5번보다 작은요소 
    $('li:lt(5)').css({backgroundColor : 'magenta'});   
    //index번호가 5번보다 큰요소 
    $('li:gt(5)').css({backgroundColor : 'cyan'});
    $('li:even').css({color : 'gray'});
    $('li:odd').css({color : 'orange'});
    //자식필터선택자
    //각각의 첫번째 자식들
    $('li:first-child').css({backgroundColor : 'olive'});
});